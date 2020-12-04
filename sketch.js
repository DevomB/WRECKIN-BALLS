
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world;
var block1,block2,block3,block4,block5;
var ground1;
var ball1;
var rope1;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	block1 = new block(800,100,80,80);
	block2 = new block(800,200,80,80);
	block3 = new block(800,300,80,80);
	block4 = new block(800,400,80,80);
	block5 = new block(800,500,80,80);
	ground1 = new ground(800,690,1600,50)
	ball1 = new ball(50,50,30)
	rope1 = new rope({x: 50,y:50},ball1.body)
}


function draw() {
  rectMode(CENTER);
  background(230);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  ground1.display();
  ball1.display();
  rope1.display();
}

function mouseDragged() {
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
	  }