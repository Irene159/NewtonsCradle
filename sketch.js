const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  ground1 = new Ground(400,100,300,40);
  rope1= new Suspender(bob1.body,ground1.body,-50*2,0);
  rope2= new Suspender(bob2.body,ground1.body,-25*2,0);
  rope3= new Suspender(bob3.body,ground1.body,-0*2,0);
  rope4= new Suspender(bob4.body,ground1.body,25*2,0);
  rope5= new Suspender(bob5.body,ground1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("white");
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();
  ground1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //rope6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 
