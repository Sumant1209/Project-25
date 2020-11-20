const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (200, 200, 20);

	a1 = createSprite(400, 665, 200, 10, {isStatic : true});
	a1.shapeColor = "red";

	a2 = createSprite(300, 620, 10, 100, {isStatic : true});
	a2.shapeColor = "red";

	a3 = createSprite(500, 620, 10, 100, {isStatic : true});
	a3.shapeColor = "red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  // Look at the hints in the document and understand how to make the package body fall only on
	  Matter.Body.applyForce(paper.body,paper.body.position, {x : 85, y:85});
	}
  }


