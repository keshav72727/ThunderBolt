class Drop{
    constructor(x,y){
        var options={
          restitution:0.1,
          friction:0.001  
        }
        this.body=Bodies.circle(x,y,5,options);
        this.r=5;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r, this.r);
    }
    update(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,500),y:random(0,400)});
        }
    }
}