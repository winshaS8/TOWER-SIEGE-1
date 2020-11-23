const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2,polygon,sling;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26

function preload()
{
   backgroundImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(490,200,200,10);
    stand2 = new Ground(790,300,200,10); 

    block1 = new box1(415,175,30,40);   
    block2 = new box1(445,175,30,40);
    block3 = new box1(475,175,30,40);
    block4 = new box1(506,175,30,40);
    block5 = new box1(536,175,30,40);
    block6 = new box1(566,175,30,40);
    
    block7 = new box2(445,135,30,40);
    block8 = new box2(475,135,30,40);
    block9 = new box2(505,135,30,40);
    block10 = new box2(535,135,30,40);

    block11 = new box3(475,95,30,40);
    block12 = new box3(505,95,30,40);

    block13 = new box4(490,55,30,40);

    block14 = new box1(715,275,30,40);
    block15 = new box1(745,275,30,40);
    block16 = new box1(775,275,30,40);
    block17 = new box1(805,275,30,40);
    block18 = new box1(836,275,30,40);
    block19 = new box1(866,275,30,40);

    block20 = new box2(745,235,30,40);
    block21 = new box2(775,235,30,40);
    block22 = new box2(805,235,30,40);
    block23 = new box2(836,235,30,40);

    block24 = new box3(775,195,30,40);
    block25 = new box3(805,195,30,40);

    block26 = new box4(790,155,30,40);

    polygon = Bodies.circle(50,50,50);
    World.add(world,polygon);

    sling = new slingShot(this.polygon,{x:50,y:50});
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
  //  console.log(box2.body.position.x);
  //  console.log(box2.body.position.y);
  //  console.log(box2.body.angle);
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  ellipseMode(RADIUS);
  ellipse(polygon.position.x,polygon.position.y,20,20);
  sling.display();
  mouseDragged();
  mouseReleased();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}