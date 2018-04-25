import { b2World, b2Vec2, b2BodyDef, b2Body, b2PolygonShape, b2BodyType, b2FixtureDef } from "box2d";
//@see https://github.com/erincatto/Box2D/blob/master/Box2D/Documentation/manual.docx
export function class01():void
{
    const world = new b2World(new b2Vec2(0, -10));

    const groundBodyDef = new b2BodyDef();
    groundBodyDef.position.Set(0, -10);
    const groundBody = world.CreateBody(groundBodyDef);
    const groundBox = new b2PolygonShape();
    groundBox.SetAsBox(50, 25);
    groundBody.CreateFixture(groundBox, 0);


    const bodyDef = new b2BodyDef();
    bodyDef.type = b2BodyType.b2_dynamicBody;
    bodyDef.position.Set(0, -8);
    const body = world.CreateBody(bodyDef);
    const dynamicBox = new b2PolygonShape();
    dynamicBox.SetAsBox(2, 2);
    const fixtureDef = new b2FixtureDef();
    fixtureDef.shape = dynamicBox;
    fixtureDef.density = 1;
    fixtureDef.friction = 0.3;
    const fixtrue = body.CreateFixture(fixtureDef);


    const bodyDef2 = new b2BodyDef();
    bodyDef2.type = b2BodyType.b2_dynamicBody;
    bodyDef2.position.Set(4, -8);
    const body2 = world.CreateBody(bodyDef2);
    const dynamicBox2 = new b2PolygonShape();
    dynamicBox2.SetAsBox(1, 1);
    const fixtureDef2 = new b2FixtureDef();
    fixtureDef2.shape = dynamicBox2;
    fixtureDef2.density = 0.3;
    fixtureDef2.friction = 0.1;
    body2.CreateFixture(fixtureDef2);


    const timeStep = 1/60;
    const velocityIterations = 6;
    const positionIterations = 2;
    

    let canvas = document.createElement('canvas');
    canvas.width = 680;
    canvas.height = 340;
    document.body.appendChild(canvas);
    let context = canvas.getContext('2d');
    
    function project(x:number, y:number):{x:number, y:number}
    {
        let ret = {x:0, y:0};
        ret.x = (x + 50)/100 * 680;
        ret.y = (25 + y)/50 * 340;
        return ret;
    }
    function update():void
    {
        world.Step(timeStep, velocityIterations, positionIterations);
        let pos = body.GetPosition();
        let pos2 = body2.GetPosition();

        let angle = body.GetAngle();
        console.log(pos.y.toFixed(2));
        
        context.clearRect(0, 0, 680, 340);
        let p1 = project(pos.x - 2, pos.y - 2);
        let p2 = project(pos.x + 2, pos.y + 2);
        context.strokeStyle = 'red';
        context.lineWidth = 1;
        context.strokeRect(0, 0, 680, 340);
        context.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

        p1 = project(pos2.x - 1, pos2.y - 1);
        p2 = project(pos2.x + 1, pos2.y + 1);
        context.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

        let p = project(0, 25-10);
        context.strokeRect(10, p.y, 660, 2);

        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);

    //body.DestroyFixture(fixtrue);
    //world.DestroyBody(body);
}