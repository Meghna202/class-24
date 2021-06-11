const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var log1;
var bird1;
var box3;
var bow4
var pig2
var log2
var box5
var log3
var log4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,50,50);
    box2 = new Box(890,350,50,50);
    ground = new Ground(600,380,1200,20);
    pig1=new Pig(800, 360);
    log1=new Log(800, 330, 260, PI/2)
    bird1=new bird(200, 100)
    box3=new Box(700, 280, 50, 50);
    box4 = new Box(890, 280, 50, 50)
    pig2=new Pig(800, 300);
    log2=new Log(800, 250, 260, PI/2)
    box5=new Box(800, 200, 50, 50)
    log3=new Log(870, 230, 130, -PI/7)
    log4=new Log(700, 160, 130, PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}