import { b2World, b2Vec2, b2BodyDef, b2CircleShape, b2FixtureDef, b2PolygonShape, b2BodyType } from "box2d";
import { DebugDraw } from "./utils/DebugDraw";

export function class03():void
{
    let world = new b2World(new b2Vec2(0, 9.8));
    let bodyDef = new b2BodyDef();
    bodyDef.type = b2BodyType.b2_dynamicBody;
    bodyDef.position.Set(320, 30);
    let shape = new b2CircleShape(25);
    let fixture = new b2FixtureDef();
    fixture.shape = shape;
    fixture.density = 1;
    fixture.restitution = 0.6;
    fixture.friction = 0.1;

    let ball = world.CreateBody(bodyDef);
    ball.CreateFixture(fixture);

    bodyDef.position.Set(320, 470);
    bodyDef.type = b2BodyType.b2_staticBody;
    let polygon = new b2PolygonShape();
    polygon.SetAsBox(320, 10);
    fixture.shape = polygon;
    let floor = world.CreateBody(bodyDef);
    floor.CreateFixture(fixture);
    


    let canvas = document.createElement('canvas');
    canvas.width = 640;
    canvas.height = 480;
    document.body.appendChild(canvas);
    let draw = new DebugDraw(canvas);
    world.SetDebugDraw(draw);
    requestAnimationFrame(update);
    function update():void
    {
        world.Step(1/60, 6, 2);
        draw.clear();
        world.DrawDebugData();
        world.ClearForces();
        requestAnimationFrame(update);
    }
}