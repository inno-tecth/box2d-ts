import { b2World, b2Vec2, b2BodyDef, b2PolygonShape, b2FixtureDef, b2BodyType, b2CircleShape, b2Body, b2RevoluteJointDef, b2RevoluteJoint, b2DistanceJointDef, b2DistanceJoint } from "box2d";
import { DebugDraw } from "./utils/DebugDraw";

export function class06()
{
    let world = new b2World(new b2Vec2(0,5));
    let canvas = document.createElement('canvas');
    canvas.width = 680;
    canvas.height = 480;
    document.body.appendChild(canvas);
    let draw = new DebugDraw(canvas);
    let sling:b2DistanceJoint;
    let frj:b2RevoluteJoint;
    let rrj:b2RevoluteJoint;
    let left = false;
    let right = false;
    let motorSpeed:number = 0;

    function createFloor()
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(320, 465);
        let shape = new b2PolygonShape();
        shape.SetAsBox(320, 10);
        let fixture = new b2FixtureDef();
        fixture.shape = shape;
        fixture.friction = 2;
        fixture.density = 2;
        let body = world.CreateBody(bodyDef);
        body.CreateFixture(fixture);
    }
    function createBrick(x:number, y:number, w:number, h:number, userData?:string):void
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(x, y);
        bodyDef.type = b2BodyType.b2_dynamicBody;
        bodyDef.userData = "brick";
        let polygon = new b2PolygonShape();
        polygon.SetAsBox(w/2, h/2);
        let fixture = new b2FixtureDef();
        fixture.shape = polygon;
        fixture.density = 2;
        fixture.restitution = 0.4;
        fixture.friction = 0.5;

        let brick = world.CreateBody(bodyDef);
        brick.CreateFixture(fixture);
    }
    function createPig(pX:number,pY:number,r:number)
    {
        var bodyDef =new b2BodyDef();
        bodyDef.position.Set(pX,pY);
        bodyDef.type= b2BodyType.b2_dynamicBody;
        bodyDef.userData="pig";
        var pigShape:b2CircleShape=new b2CircleShape(r);
        var fixtureDef:b2FixtureDef=new b2FixtureDef();
        fixtureDef.shape=pigShape;
        fixtureDef.density=1;
        fixtureDef.restitution=0.4;
        fixtureDef.friction=0.5;
        var thePig =world.CreateBody(bodyDef);
        thePig.CreateFixture(fixtureDef);
    }
    function addWheel(x:number, y:number):b2Body
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(x, y);
        bodyDef.type = b2BodyType.b2_dynamicBody;
        let shape = new b2CircleShape(15);
        let fixtureDef = new b2FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 1;
        fixtureDef.restitution = 0.5;
        fixtureDef.friction = 2;

        let body = world.CreateBody(bodyDef);
        body.CreateFixture(fixtureDef);
        return body;
    }
    function addCart(x:number, y:number, motor:boolean):b2Body
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(x, y);
        bodyDef.type = b2BodyType.b2_dynamicBody;
        bodyDef.userData = 'cart';

        let shape = new b2PolygonShape();
        shape.SetAsBox(40, 20);
        let fixtureDef = new b2FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 10;
        fixtureDef.restitution = 0.5;
        fixtureDef.friction = 0.5;
        let body = world.CreateBody(bodyDef);
        body.CreateFixture(fixtureDef);
        if(!motor)
        {
            let armOrigin = new b2Vec2(0, -60);
            let armW = 4;
            let armH = 60;
            shape.SetAsBox(armW, armH, armOrigin);
            body.CreateFixture(fixtureDef);
            bodyDef.position.Set(x, y - 115);
            shape.SetAsBox(40, 5);
            fixtureDef.shape = shape;

            let arm = world.CreateBody(bodyDef);
            arm.CreateFixture(fixtureDef);

            let armJoint = new b2RevoluteJointDef();
            armJoint.bodyA = body;
            armJoint.bodyB = arm;
            armJoint.localAnchorA.Set(0, -115);
            armJoint.localAnchorB.Set(0, 0);
            armJoint.enableMotor = true;
            armJoint.maxMotorTorque = 1000;
            armJoint.motorSpeed = 6;

            let siege = <b2RevoluteJoint>world.CreateJoint(armJoint);
            let projectileX = x - 80;
            let projectileY = y - 115;
            bodyDef.position.Set(projectileX, projectileY);
            bodyDef.userData = 'projectile';
            shape.SetAsBox(5,5);
            fixtureDef.shape = shape;

            let projectile = world.CreateBody(bodyDef);
            projectile.CreateFixture(fixtureDef);

            let slingJoint = new b2DistanceJointDef();
            slingJoint.bodyA = arm;
            slingJoint.bodyB = projectile;
            slingJoint.localAnchorA.Set(-40, 0);
            slingJoint.localAnchorB.Set(0, 0);
            slingJoint.length = 40;

            sling = <b2DistanceJoint>world.CreateJoint(slingJoint);
        }
        let frontWheel = addWheel(x + 20, y + 15);
        let rearWheel = addWheel(x - 20, y + 15);
        let rJoint = new b2RevoluteJointDef();
        rJoint.bodyA = body;
        rJoint.bodyB = frontWheel;
        rJoint.localAnchorA.Set(20, 15);
        rJoint.localAnchorB.Set(0, 0);
        if(motor)
        {
            rJoint.enableMotor = true;
            rJoint.maxMotorTorque = 1000000;
            rJoint.motorSpeed = 0;
            frj = <b2RevoluteJoint>world.CreateJoint(rJoint);
        }
        else
        {
            world.CreateJoint(rJoint);
        }
        rJoint.bodyB = rearWheel;
        rJoint.localAnchorA.Set(-20, 15);
        if(motor)
        {
            rrj = <b2RevoluteJoint>world.CreateJoint(rJoint);
        }
        else
        {
            world.CreateJoint(rJoint);
        }
        return body;
    }
    function update()
    {
        if (left) {
            motorSpeed-=0.2;
        }
        if (right) {
            motorSpeed+=0.2;
        }
        if (motorSpeed>10) {
            motorSpeed=10;
        }
        if (motorSpeed<-10) {
            motorSpeed=-10;
        }
        console.log(motorSpeed);
        frj.SetMotorSpeed(motorSpeed);
        rrj.SetMotorSpeed(motorSpeed);
        world.Step(1/30, 6, 2);
        draw.clear();
        world.DrawDebugData();
        world.ClearForces();

        requestAnimationFrame(update);
    }
    function onKeyDown(e:KeyboardEvent):void
    {
        switch (e.key) {
            case 'a' :
                left=true;
                break;
            case 'd' :
                right=true;
                break;
            case 'w' :
                world.DestroyJoint(sling);
                break;
        }
    }
    function onKeyUp(e:KeyboardEvent):void
    {
        switch (e.key) {
            case 'a' :
                left=false;
                break;
            case 'd' :
                right=false;
                break;
        }
    }
    function main():void
    {
        world.SetDebugDraw(draw);
        createFloor();
        createBrick(402,431,140,36);
        createBrick(544,431,140,36);
        createBrick(342,396,16,32);
        createBrick(604,396,16,32);
        createBrick(416,347,16,130);
        createBrick(532,347,16,130);
        createBrick(474,273,132,16);
        createBrick(474,257,32,16);
        createBrick(445,199,16,130);
        createBrick(503,199,16,130);
        createBrick(474,125,58,16);
        createBrick(474,100,32,32);
        createBrick(474,67,16,32);
        createBrick(474,404,64,16);
        createBrick(450,363,16,64);
        createBrick(498,363,16,64);
        createBrick(474,322,64,16);
        createPig(474,232,16);

        let frontCart = addCart(200, 430, true);
        let rearCart = addCart(100, 430, false);
        let dJoint = new  b2DistanceJointDef();
        dJoint.bodyA = frontCart;
        dJoint.bodyB = rearCart;
        dJoint.localAnchorA = new b2Vec2(0, 0);
        dJoint.localAnchorB = new b2Vec2(0, 0);
        dJoint.length = 100;
        world.CreateJoint(dJoint);

        requestAnimationFrame(update);
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);

    }
    main();
}