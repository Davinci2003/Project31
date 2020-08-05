class Particle{
    constructor(x,y,radius){
        var options = {
            restitution:0.5,
            friction:0
        }
        this.body = Bodies.circles(x,y,radius,options);
        this.color = color(random(0,225),random(0,225),random(0,225));
        //this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.r);
        pop();
    }
}