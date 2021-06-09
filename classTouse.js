var a, b;


function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  b = createSprite(400,200,80,30);
  
  a .shapeColor= "green";
  b.shapeColor = "green";

  a.debug = true;
  b.debug = true;
}

function draw() {
  background(0,0,0);  
  b.x = World.mouseX;
  b.y = World.mouseY;
  
      if (a.x - b.x < b.width/2 + a.width/2
      && b.x - a.x < b.width/2 + a.width/2
      && a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2) 
      {
          a.shapeColor="red";
          b.shapeColor="red";
      }
  else {
    a.shapeColor="green";
    b.shapeColor="green";
  }
  
  drawSprites();
}
