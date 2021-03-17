const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld ;
var myGround ;

function setup() {
  createCanvas(400,400);
  // create engine and world
  myEngine = Engine.create();
  myWorld = myEngine.world;

  myGround = new Ground (200,370, 400, 30);
  
}

function draw() {
  background(0);  
  Engine.update (myEngine); // update myEngine
  myGround.display();
  
}