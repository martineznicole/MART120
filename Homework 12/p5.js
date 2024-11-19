var headX = 150;
var headY = 100;
var headDirection = 1;
var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;
var size = 22;
var count = 0;
var sizeDirection = 2;

var characterX = 100;
var characterY = 100;

// define letters
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    

}

function draw()
{
    background(2,100,200);
    stroke(0);
    fill(0);
    // top border
    rect(0,0,width,10);
    // left border
    rect(0,0,5,height);
    // bottom border
    rect(0, height-10,width, 8);
    // right upper border
    rect(width-10,0,10,height-10);
    
   //Border
    createBorders(10);
  
  // Obstacle!!
    fill(2, 204, 0);
    circle(headX,headY,90);
    headX+=headDirection;
    if(headX >= 320 || headX <= 65)
    {
        headDirection *= -1;
    }
    // exit!
    fill(200, 200, 0);
    textSize(30);
    text("Leave Below Please!", width-375,height-80)
  //obstacle!!
  
    fill(2,900,500);
    circle(characterX,characterY,60);
    //createCharacter(100,200);
    drawCharacter();
    characterMovement();

    // handle the keys
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }

 
    fill(50,800,200);
    // moving circle
    circle(shapeX, shapeY, 30);

 
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) - 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 12)) + 1);


    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
   
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    
  
    fill(2,1,40);
    circle(mouseShapeX, mouseShapeY, 90);
}

function characterMovement()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    //character
    
   // circle(characterX,characterY,25);
}
function drawCharacter()
{
    fill(23,40,123);
    circle(characterX,characterY,30);
}
function createBorders(thickness)
{
    // top border
    rect(0,0,width,thickness);
    // left border
    rect(0,0,thickness,height);
    // bottom border
    rect(0, height-thickness,width, thickness);
    // right border
    rect(width-thickness,0,thickness,height-50);
}
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */
