
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var fly
var hero
var ground
var block,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31
var backgroundImg
var monster
function preload()
{
	backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Ground(400,600,900,30)
hero=new Hero(200,100,200,200)
fly = new Fly(hero.body,{x:250,y:250});
block=new Blocks(500,550,50,50)
block2=new Blocks(500,500,50,50)
block3=new Blocks(500,450,50,50)
block4=new Blocks(500,400,50,50)
block5=new Blocks(500,350,50,50)
block6=new Blocks(500,300,50,50)
block7=new Blocks(500,250,50,50)
block8=new Blocks(500,200,50,50)
block9=new Blocks(500,100,50,50)
block10=new Blocks(500,50,50,50)
block11=new Blocks(500,0,50,50)
block12=new Blocks(570,500,50,50)
block13=new Blocks(570,450,50,50)
block14=new Blocks(570,400,50,50)
block15=new Blocks(570,350,50,50)
block16=new Blocks(570,300,50,50)
block17=new Blocks(570,250,50,50)
block18=new Blocks(570,200,50,50)
block19=new Blocks(570,100,50,50)
block20=new Blocks(570,50,50,50)
block21=new Blocks(650,0,50,50)
block22=new Blocks(650,550,50,50)
block23=new Blocks(650,500,50,50)
block24=new Blocks(650,450,50,50)
block25=new Blocks(650,400,50,50)
block26=new Blocks(650,350,50,50)
block27=new Blocks(650,300,50,50)
block28=new Blocks(650,250,50,50)
block29=new Blocks(650,200,50,50)
block30=new Blocks(650,150,50,50)
block31=new Blocks(650,100,50,50)
monster=new Monster(820,400,150,150)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  block.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  fly.display()
  hero.display()
  ground.display()
  monster.display()
  drawSprites();
 
}

function mouseDragged(){
  
	Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}

