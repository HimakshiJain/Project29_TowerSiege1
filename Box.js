class Box{
    constructor(x,y,width,height,angle){
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.color = color(this.body.position.x,this.body.position.y,200);
        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER)
        var angle = this.body.angle;
        push();
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(this.color)
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
    }
}