
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;

function setup() {
  var canvas=createCanvas(1200,400);
 // createSprite(200, 200, 50, 50);

 engine=Engine.create();
 world=engine.world;

 options_ground={
   isStatic:true
 }

 ground=Bodies.rectangle(200,1000,800,50,options_ground);

 World.add(world,ground);
 
 options_ball = {
   restitution:1.0
 }

ball=Bodies.circle(200,100,20,options_ball)
World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  //drawSprites();
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20)


  
}







