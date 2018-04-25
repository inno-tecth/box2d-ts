import { b2Draw, b2Transform, b2Vec2, b2Color, b2_pi, b2DrawFlags } from "box2d";

export class DebugDraw extends b2Draw
{
    private context2D:CanvasRenderingContext2D;
    
    public constructor(canvas:HTMLCanvasElement)
    {
        super();
        this.context2D = canvas.getContext('2d');


        let flags = b2DrawFlags.e_none;
        flags |= b2DrawFlags.e_shapeBit;
        flags |= b2DrawFlags.e_particleBit;
        flags |= b2DrawFlags.e_jointBit;
        flags |= b2DrawFlags.e_pairBit;
        //flags |= b2DrawFlags.e_aabbBit;
        flags |= b2DrawFlags.e_centerOfMassBit;
        flags |= b2DrawFlags.e_controllerBit;
        
        this.SetFlags(flags);
    }
    public getContext2D():CanvasRenderingContext2D{ return this.context2D; }
    public clear()
    {
        let ctx = this.context2D;
        ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
    }
    public PushTransform(xf: b2Transform): void
    {
        let ctx = this.context2D;
        ctx.save();
        ctx.translate(xf.p.x, xf.p.y);
        ctx.rotate(xf.q.GetAngle());
    }
    public PopTransform(xf: b2Transform): void
    {
        this.context2D.restore();
    }
    public DrawPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void
    {
        let ctx = this.context2D;
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for(let i = 1; i < vertexCount; i ++)
        {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();
        ctx.strokeStyle = color.MakeStyleString(1);
        ctx.stroke();
    }
    public DrawSolidPolygon(vertices: b2Vec2[], vertexCount: number, color: b2Color): void
    {
        let ctx = this.context2D;
        ctx.beginPath();
        ctx.moveTo(vertices[0].x, vertices[0].y);
        for(let i = 1; i < vertexCount; i ++)
        {
            ctx.lineTo(vertices[i].x, vertices[i].y);
        }
        ctx.closePath();
        ctx.fillStyle = color.MakeStyleString(0.5);
        ctx.fill();
        ctx.strokeStyle = color.MakeStyleString(1);
        ctx.stroke();
    }
    public DrawCircle(center: b2Vec2, radius: number, color: b2Color): void
    {
        let ctx = this.context2D;
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2*b2_pi, true);
        ctx.strokeStyle = color.MakeStyleString(1);
        ctx.stroke();
    }
    public DrawSolidCircle(center: b2Vec2, radius: number, axis: b2Vec2, color: b2Color): void
    {
        let ctx = this.context2D;
        const cx: number = center.x;
        const cy: number = center.y;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, b2_pi * 2, true);
        ctx.moveTo(cx, cy);
        ctx.lineTo((cx + axis.x * radius), (cy + axis.y * radius));
        ctx.fillStyle = color.MakeStyleString(0.5);
        ctx.fill();
        ctx.strokeStyle = color.MakeStyleString(1);
        ctx.stroke();
    }
    public DrawParticles(centers: b2Vec2[], radius: number, colors: b2Color[], count: number): void
    {
        let ctx = this.context2D;
        if(colors)
        {
            for(let i = 0; i < count; i ++)
            {
                let center = centers[i];
                let color = colors[i];
                ctx.fillStyle = color.MakeStyleString();
                ctx.fillRect(center.x - radius, center.y - radius, radius * 2, radius * 2);
            }
        }
        else
        {
            ctx.fillStyle = "rgba(255,255,255,0.5)";
            ctx.beginPath();
            for(let i = 0; i < count; i ++)
            {
                let center = centers[i];
                ctx.rect(center.x - radius, center.y - radius, radius * 2, radius * 2);
            }
            ctx.fill();
        }
    }
    public DrawSegment(p1: b2Vec2, p2: b2Vec2, color: b2Color): void
    {
        let ctx = this.context2D;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = color.MakeStyleString(1);
        ctx.stroke();
    }
    public DrawTransform(xf: b2Transform): void
    {
        let ctx = this.context2D;
        this.PushTransform(xf);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(1, 0);
        ctx.strokeStyle = b2Color.RED.MakeStyleString(1);
        ctx.stroke();
  
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 1);
        ctx.strokeStyle = b2Color.GREEN.MakeStyleString(1);
        ctx.stroke();
  
        this.PopTransform(xf);
    }
}
