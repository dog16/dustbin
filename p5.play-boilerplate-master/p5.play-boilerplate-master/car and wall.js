var wall, car;
var speed = 1;
var weight = 1;


function setup() {
  createCanvas(600,400);
  wall = createSprite(500, 200, 60, height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = false;

  car = createSprite(50, 200,50,50);
  car.shapeColor = "blue";
  car.debug = false;
  car.velocityX = 2;

  speed = random(55,90);
  weight = random(400,1500);

  console.log(car.x);
  
}


function draw() {

  background(255,255,255)

  speed = random(55,90);
  weight = random(400,1500);

 if (touching(car,wall)) 
 {
   text("touched",200,200);
   car.velocityX = 0;
   var deformation =( 0.5 * weight * speed * speed)/22509;
   if(deformation>180)
   {
      car.shapeColor = "red";
   }
   else if
   (deformation <180 && deformation > 100)
   {
      car.shapeColor = "yellow";
   }
  
    else // (deformation<100)
   {

     car.shapeColor = "green";
   }
   }


  drawSprites();
}

function touching(car,wall)
{
  if (wall.x-car.x === car.width + wall.width || car.y - wall.y === car.width + wall.width)

 {
     return true;}

     else
     {
        return false;
     }
    }
      //car.velocityX = speed;
     
