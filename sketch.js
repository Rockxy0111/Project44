const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

  

    ground = new Ground(500,600,1000,8)
    wall1 = new Ground(0,300,8,600)
    wall2 = new Ground(1000,300,8,600)
    wall3 = new Ground(500,0,1000,8)

    buddy= new Pig(500,300,50)
  
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    wall1.display();
    wall2.display();
    wall3.display();
    buddy.display();
}