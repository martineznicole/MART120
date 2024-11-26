var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    var s = 83;
    var w = 87;
    var a = 65;
    var d = 68;

    var myXs = []; 
    var myYs = []; 
    var myDiameters = []; 

    function setup() 
    {
      createCanvas(800, 600);
      
          movement = floor(random() * 10) + 1;
     
        for(var i = 0; i < 5; i++)
        {
            
            myXs[i] = getRandomNumber(700);
            myYs[i] = getRandomNumber(500);
            myDiameters[i] = getRandomNumber(100);
        }
        function changeDiameter()
    {
        if (diameter < 200) 
        {
            diameter += 10;
        } 
        else if (diameter >= 200) 
        {
            diameter = 15;
        }

    }
    }

    function draw() 
    {
      background(0);
      
      fill(5, 110, 500);
      circle(x, y, diameter);
      
   
    circle(x,y,70);
    if(x >= 150 || x <= 0)
    {
       movement *= 1;
    }

     x += movement;

      
      controlCircle();

      ellipse(mousex, mousey, 5, 20);

      for(var i = 0; i < myXs.length; i++)
      {
 
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/5, 20, 80, 80, 80, 20, 80);
      }
    }
      {
  
    stroke(0);
    fill(0);
   
    rect(0,0,width,10);
 
    rect(0,0,10,height);
    
    rect(0, height-10,width, 10);

    rect(width-10,0,10,height-50);

   }

    function controlCircle()
    {
      if (x >= 200) 
      {
        x = 50;
      }
      
      if (y >= 300) 
      {
        y = 50;
      }

      if (keyIsDown(s)) 
      {
        y += 10;
      } 
      else if (keyIsDown(w)) 
      {
        y -= 10;
      }

      if (keyIsDown(d)) 
      {
        x += 10;
      } 
      else if (keyIsDown(a)) 
      {
        x -= 10;
      }
  
        
        changeDiameter();

    }

    
    function changeDiameter()
    {
        if (diameter < 200) 
        {
            diameter += 5;
        } 
        else if (diameter >= 100) 
        {
            diameter = 25;
        }
  
    }

    function mouseMoved() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

    function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+20;
    }

    
    function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
    {
        fill(outer_red,outer_green, outer_blue);
        circle(x,y,outer_diameter);
        fill(inner_red, inner_green, inner_blue);
        circle(x,y,inner_diameter);
    }
