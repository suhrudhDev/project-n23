var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground1,Boxx;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var soldier,soldierIMG;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

}
   function setup(){
	
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6



	groundSprite=createSprite(width/2, height-28, width,14);
	groundSprite.shapeColor=color(255)

	

	engine = Engine.create();
	world = engine.world;

	
	 

	 box1 = new Box(300,620,20,100);
	 box2 = new Box(500,620,20,100);
	 box3=new Box(400,670,220,17);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	packageBody.scale=1.5;

	//Create a Ground
	ground1 = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground1);

	 Boxx= Bodies.rectangle(width/2, height-45, 220, 17 , {isStatic:true} );
	 World.add(world, Boxx);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  box1.display();
  box2.display();
  box3.display();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
	helicopterSprite.velocityX=20;
  }

 
}



