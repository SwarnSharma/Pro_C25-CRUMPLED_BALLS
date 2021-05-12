
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var paper;
var world;

function preload(){
	bg=loadImage("bg.jpg");
}

function setup() {
	createCanvas(1360, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width/2,640,width,20);
	dustbinObj = new dustbin(1200,620);
    paper = new Paper(100,100,50);
    keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 
  groundObject.display();
  dustbinObj.display();
  paper.display();
  //text(mouseX+","+mouseY,mouseX,mouseY);
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:800,y:-465});
	}
}
