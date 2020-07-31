class plinko {
  constructor(x,y,radius) {
    radius=10;
    var options = {
        isStatic: true
    }
    this.r = radius;
    this.body = Bodies.circle(x,y,this.r,options);
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    ellipseMode(CENTER);
    fill("brown");
    ellipse(pos.x, pos.y,this.r);
  }
};