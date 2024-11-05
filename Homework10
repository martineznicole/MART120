var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var x = 100;
var y = 200;
var diameter = 50;
var movement = 13;
function setup() 
{
  createCanvas(400, 400);
}

function draw() 
{
background(redColor,greenColor,blueColor);
  //need to create a circle for my head
  circle (x,y,diameter);
  circle (x,y,25);
  if(y < 400)
    {
      y+=13;
    }
  rect(x,y,diameter);
  rect(x,y,10);
  if(x >= 400 || x <= 0)
    {
      movement*=-1;
    }
  
     x += movement;
  point(60,100);
  point(80,100);
  line(175,230,120,180);
  line(80,220,120,180);
  line(225,225,335,130);
  triangle(300,400,100,240,240,300);
  textSize(40);
  text('DANCE!DANCE!', 50, 60);
  textSize(20);
  text('Nicole', 10, 380);
}
