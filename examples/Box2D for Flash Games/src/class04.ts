import { b2World, b2Vec2, b2BodyDef, b2BodyType, b2PolygonShape, b2FixtureDef, b2Fixture } from "box2d";
import { DebugDraw } from "./utils/DebugDraw";


export function class04()
{
    let world = new b2World(new b2Vec2(0, 10));
    let canvas = document.createElement('canvas');
    canvas.width = 680;
    canvas.height = 480;
    document.body.appendChild(canvas);


    let draw = new DebugDraw(canvas);
    
    function createBrick(x:number, y:number, w:number, h:number, userData:string):void
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(x, y);
        bodyDef.type = b2BodyType.b2_dynamicBody;
        bodyDef.userData = userData;
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
    
    function createIdol(x:number,y:number):void 
    {
        let bodyDef = new b2BodyDef();
        bodyDef.position.Set(x, y);
        bodyDef.type = b2BodyType.b2_dynamicBody;
        bodyDef.userData = 'idol';

        let shape = new b2PolygonShape();
        shape.SetAsBox(5, 20);
        let fixtureDef = new b2FixtureDef();
        fixtureDef.shape = shape;
        fixtureDef.density = 1;
        fixtureDef.restitution = 0.4;
        fixtureDef.friction = 0.5;

        let idol = world.CreateBody(bodyDef);
        idol.CreateFixture(fixtureDef);

        let bw = 5;
        let bh = 20;
        let boxPos = new b2Vec2(0, 10);
        let boxAngle = - Math.PI /4;

        shape.SetAsBox(bw, bh, boxPos, boxAngle);
        fixtureDef.shape = shape;
        idol.CreateFixture(fixtureDef);

        boxAngle = Math.PI/4;
        shape.SetAsBox(bw, bh, boxPos, boxAngle);
        fixtureDef.shape = shape;
        idol.CreateFixture(fixtureDef);

        let vertices:b2Vec2[] = [];
        vertices.push(new b2Vec2(-15,-25));
        vertices.push(new b2Vec2(0,-40));
        vertices.push(new b2Vec2(15,-25));
        vertices.push(new b2Vec2(0,-10));
        shape.SetAsArray(vertices,4);
        fixtureDef.shape=shape;
        idol.CreateFixture(fixtureDef);
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
    function onQueryPoint(fixture:b2Fixture):boolean
    {
        let touchedBody=fixture.GetBody();
        let userData = touchedBody.GetUserData();
        if(userData == 'breakable')
            world.DestroyBody(touchedBody);
        return false;
    }
    function onCanvasClick(e:MouseEvent)
    {
        let x = e.clientX - canvas.offsetLeft;
        let y = e.clientY - canvas.offsetTop;
        world.QueryPoint(onQueryPoint, new b2Vec2(x, y));
    }
    function update()
    {
        draw.clear();
        world.Step(1/30, 6, 2);
        world.DrawDebugData();
        world.ClearForces();
        requestAnimationFrame(update);
    }
    function main()
    {
        createBrick(275,435,30,30,"breakable");
        createBrick(365,435,30,30,"breakable");
        createBrick(320,405,120,30,"breakable");
        createBrick(320,375,60,30,"unbreakable");
        createBrick(305,345,90,30,"breakable");
        createBrick(320,300,120,60,"unbreakable");

        createIdol(320,242);

        createFloor();

        world.SetDebugDraw(draw);
        canvas.addEventListener('click', onCanvasClick);
        requestAnimationFrame(update);
    }
    main();

}