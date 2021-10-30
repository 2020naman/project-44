var car,carEmpty,carFull
var road,roadImg;

function preload(){
  carEmpty = loadImage("car.png");
  carFull = loadImage("car2.png");
  roadImg = loadImage("road.png");
}

function setup() {
  createCanvas(800,800);

//road
  road= createSprite(420,400,800,800)
  road.addImage(roadImg,"road");
  road.scale=22;

  //car
  car = createSprite(400,600,50,50)
  car.addImage(carEmpty,"car");
  car.scale=0.8;

  
}

function draw() {
  background("blue"); 
  
  car.x = mouseX;

  drawSprites();
}