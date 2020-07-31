const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  
  particle = new Particle(random(30,400),30,10);
  
  ground = new Ground(240,780,500,20)

  for (var k = 0; k <=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  for(var j = 40;j<=width;j=j+50){
    plinkos.push(new plinko(j,75,15));
  }

  for(var j = 15; j<=width-10;j=j+50){
    plinkos.push(new plinko(j,175,15));
  }

  for(var j = 40; j<=width;j=j+50){
    plinkos.push(new plinko(j,275,15));
  }

  for(var j = 15; j<=width-10;j=j+50){
    plinkos.push(new plinko(j,375,15));
}

for(var j = 40; j<=width;j=j+50){
  plinkos.push(new plinko(j,475,15));
}
 
76,650
}

function draw() {
  background(0,0,0); 
  
 

  drawSprites();
  particle.display();
  ground.display();
  

  for(var k = 0; k<plinkos.length;k++){
    plinkos[k].display();
  }
  for (var j = 0; j< divisions.length; j++){
    divisions[j].display();
  }

  //for (var m = 0; m< plinkos.length; m++){
   //particles[m].display();
 // }
 // for (var m = 0; m<=width; m=m+148){
   // particles.push(new Particle(m,50,10));
 // }
}