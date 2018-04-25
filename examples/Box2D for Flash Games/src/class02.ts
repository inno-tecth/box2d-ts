import { b2World, b2Vec2, b2BodyDef, b2PolygonShape, b2BodyType, b2FixtureDef } from "box2d";
import { DebugDraw } from "./utils/DebugDraw";

export function class02()
{
    let world = new b2World(new b2Vec2(0, -10));
    let bodyDef = new b2BodyDef();
    bodyDef.position.Set(0, -8);
    let body = world.CreateBody(bodyDef);
    let shape = new b2PolygonShape();
    shape.SetAsBox(50, 25);
    body.CreateFixture(shape, 0);

    bodyDef.type = b2BodyType.b2_dynamicBody;
    bodyDef.position.Set(0, 0);
    body = world.CreateBody(bodyDef);
    shape = new b2PolygonShape();
    shape.SetAsBox(2, 2);
    let fixtureDef = new b2FixtureDef();
    fixtureDef.shape = shape;
    fixtureDef.density = 1;
    fixtureDef.friction = 0.3;

    body.CreateFixture(fixtureDef);


    const timeStep = 1/60;
    const velocityIterations = 6;
    const positionIterations = 2;
    

    let canvas = document.createElement('canvas');
    canvas.width = 680;
    canvas.height = 340;
    document.body.appendChild(canvas);
    
    let draw = new DebugDraw(canvas);
    world.SetDebugDraw(draw);
    function update():void
    {
        //draw.begin();
        world.Step(timeStep, velocityIterations, positionIterations);
        world.DrawDebugData();
        //draw.end();
        world.ClearForces();
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}