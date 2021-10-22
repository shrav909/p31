var balloon,background;

function preload(){
  backgroundImg = loadImage("Hot Air Ballon-01.png")
  BalloonImage= loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  balloon = createSprite(100,400,20,20);
  balloon.addAnimation("balloon",BalloonImage);
  balloon.scale = 0.4;
}

function draw(){
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  else if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  else if (keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  else if (keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }
  drawSprites();
}