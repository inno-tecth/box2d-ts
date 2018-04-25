import { b2World, b2Vec2, b2ContactListener, b2BodyDef, b2BodyType, b2PolygonShape, b2FixtureDef, b2CircleShape, b2Contact, b2ContactImpulse } from "box2d";
import { DebugDraw } from "./utils/DebugDraw";

class ContactListener extends b2ContactListener
{
    private static readonly KILLBRICK:Number=200000;
    private static readonly KILLPIG:Number=150000;
        
    public PostSolve(contact: b2Contact, impulse: b2ContactImpulse): void
    {
        let fa = contact.GetFixtureA();
        let fb = contact.GetFixtureB();
        
        let dataA = fa.GetBody().GetUserData();
        let dataB = fa.GetBody().GetUserData();
        let force = impulse.normalImpulses[0];
        
        console.log(force);
        switch (dataA) {
            case "pig" :
                if (force > ContactListener.KILLPIG) {
                    fa.GetBody().SetUserData("remove");
                }
                break;
            case "brick" :
                if (force > ContactListener.KILLBRICK) {
                    fa.GetBody().SetUserData("remove");
                }
                break;
        }
        switch (dataB) {
            case "pig" :
                if (force > ContactListener.KILLPIG) {
                    fb.GetBody().SetUserData("remove");
                }
                break;
            case "brick" :
                if (force > ContactListener.KILLBRICK) {
                    fb.GetBody().SetUserData("remove");
                }
                break;
        }
    }
}
export function class05()
{
    let world = new b2World(new b2Vec2(0,5));
    let canvas = document.createElement('canvas');
    canvas.width = 680;
    canvas.height = 480;
    document.body.appendChild(canvas);
    let draw = new DebugDraw(canvas);

    let sling:{x:number, y:number, r:number} = {x:100, y:250, r:75};
    let bird:{x:number, y:number} = {x:100, y:250};
    
    enum Status
    {
        None,
        Aiming,
        Shotting,
    }
    let status = Status.None;

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
    function createFloor()
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(320, 465);
        let polygon = new b2PolygonShape();
        polygon.SetAsBox(320, 15);

        let fixtureDef = new b2FixtureDef();
        fixtureDef.shape = polygon;
        fixtureDef.restitution = 0.4;
        fixtureDef.friction = 0.5;

        let floor = world.CreateBody(bodyDef);
        floor.CreateFixture(fixtureDef);
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
    function onMouseDown(e:MouseEvent)
    {
        if(b2Vec2.DistanceVV(new b2Vec2(sling.x, sling.y), new b2Vec2(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop)) < sling.r)
        {
            status = Status.Aiming;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }
    }
    function onMouseMove(e:MouseEvent)
    {
        bird.x = e.clientX - canvas.offsetLeft;
        bird.y = e.clientY - canvas.offsetTop;
        let distanceX = bird.x-sling.x;
        let distanceY = bird.y-sling.y;
        if(distanceX * distanceX + distanceY * distanceY > sling.r * sling.r)
        {
            let birdAngle = Math.atan2(distanceY,distanceX);
            bird.x = sling.x + sling.r * Math.cos(birdAngle);
            bird.y = sling.y + sling.r * Math.sin(birdAngle);
        }
    }
    function onMouseUp(e:MouseEvent)
    {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        canvas.removeEventListener('mousedown', onMouseDown);

        let distanceX = bird.x - sling.x;
        let distanceY = bird.y - sling.y;
        let velocityX = distanceX * -1;
        let velocityY = distanceY * -1;

        let velocity = new b2Vec2(velocityX, velocityY);
        let sphereX = bird.x;
        let sphereY = bird.y;
        let r = 15;

        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(sphereX, sphereY);
        bodyDef.type = b2BodyType.b2_dynamicBody;

        let shape = new b2CircleShape(r);
        let fixtureDef = new b2FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 4;
        fixtureDef.restitution = 0.4;
        fixtureDef.friction = 0.5;

        let body = world.CreateBody(bodyDef);
        body.CreateFixture(fixtureDef);
        body.SetLinearVelocity(velocity);
        status = Status.Shotting;
    }

    function update()
    {
        world.Step(1/30, 6, 2);
        draw.clear();
        world.DrawDebugData();
        world.ClearForces();
        switch(status)
        {
            case Status.None:
            case Status.Aiming:
            {
                let g = draw.getContext2D();
                g.strokeStyle = '#00ff00';
                g.beginPath();
                g.arc(sling.x, sling.y, sling.r, 0, Math.PI * 2);
                
                g.stroke();

                g.fillStyle = '#00ff00';
                g.beginPath();
                g.arc(bird.x, bird.y, 15, 0, Math.PI * 2);
                g.fill();
            }break;
        }
        for (let b=world.GetBodyList(); b; b = b.GetNext()) {
            if (b.GetUserData()=="remove") {
                world.DestroyBody(b);
            }
        }
        requestAnimationFrame(update);
    }
    function main()
    {
        world.SetContactListener(new ContactListener());
        world.SetDebugDraw(draw);

        createFloor();
        createPig(474,232,16);
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

        canvas.addEventListener('mousedown', onMouseDown);
        requestAnimationFrame(update);
    }
    main();
}