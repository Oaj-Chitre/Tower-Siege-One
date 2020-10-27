const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1, stand2;
var slingshot;
var shape;
var slingshot;
var gameState = "onSling";
function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plate = new Plate(560,390, 350, 15);
    //row 1
    
    box1 = new Box(560,370, 40,60);
    box2 = new Box(520,370,40,60);
    box3 = new Box(480,370,40,60);
    box4 = new Box(440,370,40,60);
    box5 = new Box(600,370,40,60);
    box6 = new Box(640,370,40,60);
    box7 = new Box(680,370,40,60);
    //row 2
    
    box8 = new Box(480,310,40,60);
    box9 = new Box(520,310,40,60);
    box10 = new Box(560,310,40,60);
    box11 = new Box(600,310,40,60);
    box12 = new Box(640,310,40,60);
    // row 3
    
    box13 = new Box(520,240,40,60);
    box14 = new Box(560,240,40,60);
    box15 = new Box(600,240,40,60);
    //row 4
    
    box16 = new Box(560,180,40,60);
    //shape
    shape = new Shape(200,200,40,40);
    //slingshot
    slingshot = new Slingshot(shape.body,{x:150,y:200});
}

function draw(){
    
    background("black");

    Engine.update(engine);

    plate.display();
    //row1
    fill("purple");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //row 2
    fill("red");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    //row 3
    fill("blue");
    box13.display();
    box14.display();
    box15.display();
    //row 4
    fill("white");
    box16.display();
    slingshot.display();
    fill("green");
    shape.display();

   
}

//function mouseDragged()
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(shape.body, {x: mouseX , y: mouseY});
    }
}

//function mouseReleased()
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(shape.body);
    }
}