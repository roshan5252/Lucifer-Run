var ground, groundImage;
var boy, boyImage;
var leftBoundary, rightBoundary;
var edges;
function preload(){
  //pre-load images
  
  groundImage=loadImage("path.png");
  
  boyImage=loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  ground=createSprite(200,200,100,100);
  ground.addImage("ground",groundImage);
  ground.velocityY= 3;
  //ground.scale= 0.5;
  
  boy=createSprite(180,340,30,30);
  boy.addAnimation("boy",boyImage);
  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible=false
  
   rightBoundary=createSprite(400,0,100,800);
  rightBoundary.visible=false
  
  
}

function draw() {
  background("black");
  if(ground.y>400){
    ground.y=height/2
  }
  edges=createEdgeSprites()
  boy.x=World.mouseX;
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  boy.collide(edges[3])
  drawSprites();

}
