var a, b;

var car,wall;


function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  b = createSprite(400,200,80,30);

  car=createSprite(200,200,50,50);
  wall=createSprite(1000,150,50,250);

  car.velocityX=4;

  car.shapeColor='blue';
  wall.shapeColor="gray";
  
  a .shapeColor= "green";
  b.shapeColor = "green";

  a.debug = true;
  b.debug = true;
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;
  
  if(touchCheck(car,wall))
  {
   car.velocityX=0;

  }

  if(touchCheck(a,b))
  {
    a.shapeColor= "pink";
    b.shapeColor = "pink";
  

  }
  
  
  drawSprites();
}

