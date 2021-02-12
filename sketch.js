const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;

function preload(){
 polygon_img=loadImage ("polygon.png");
}



function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

ground1= new Ground(600,1190,1200,10);
ground2= new Ground(650,600,250,10);
ground3 = new Ground (1000,400,300,10);

box1= new Box(600,290,40,50);
box2 = new Box (640,290,40,50);
box3 = new Box(680,290,40,50);
box4 = new Box(720,290,40,50);

box5 = new Box (620,250,40,50);
box6 = new Box(660,250,40,50) ;
box7= new Box (700,250,40,50);

box8 = new Box(640,220,40,50);
box9 = new Box (680,220,40,50);

box10 = new Box (660,150,40,50);


//for ground 2
box11= new Box(880,290,40,50);
box12 = new Box (920,290,40,50);
box13 = new Box(960,290,40,50);
box14 = new Box(1000,290,40,50);

box15 = new Box (900,250,40,50);
box16 = new Box(940,250,40,50) ;
box17= new Box (980,250,40,50);

box18 = new Box(920,220,40,50);
box19 = new Box (960,220,40,50);

box20 = new Box (940,150,40,50);


polygon = Bodies.circle(50,500,20);
World.add(world,polygon);

slingShot = new SlingShot (this.polygon,{x:200,y:400})


  Engine.run(engine);
  
}

function draw (){
    background("black");
    Engine.update(engine);

   // image(polygon,200,400,50,500,20);
    
    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    
    imageMode(CENTER);
    image(polygon_img,polygon.position.x,polygon.position.y,40,40); 

    slingShot.display();
}



function mouseDragged(){
    Matter.Body.setPosition (polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}