var water1;
var water2;
var boatImg1;
var boatImg2;

var boat1;
var boat2;

function preload(){
  water1 = loadImage("img/water1.png");
  water2 = loadImage("img/water2.png");
  boatImg1 = loadImage("img/boats.png");
  boatImg2 = loadImage("img/boats2.png");
}

function setup() {
  createCanvas(3700, 2000);
  boat1 = new Boat(random(2), random(6), 0, 200);
  boat2 = new Boat(random(2), random(6), 0, 1000);
}

function draw(){
  background(31, 95, 140);

  image(water1, -500, 400);
  image(water2, -800, 600);

  boat1.display();
  boat1.move();
  boat1.interact();

  image(water1, -500, 800);
  image(water2, -800, 1000);
  image(water1, -500, 1200);
  image(water2, -800, 1400);

  boat2.display();
  boat2.move();
  boat2.interact();

  image(water1, -500, 1600);

}

function Boat(tempDisplay, tempSpeed, tempXPosition, tempYPosition){

  this.tempDisplay = tempDisplay;
  this.speed = tempSpeed;
  this.xPosition = tempXPosition;
  this.yPosition = tempYPosition;

  this.display = function(){
    if (this.tempDisplay > 0 && this.tempDisplay < 1){
      image(boatImg1, this.xPosition, this.yPosition);
    };
    if (this.tempDisplay > 1 && this.tempDisplay < 2){
      image(boatImg2, this.xPosition, this.yPosition);
    };
  };

  this.move = function(){
    this.xPosition = this.xPosition + this.speed;
  };

  this.interact = function(){
    if (mouseY > this.yPosition && mouseY < this.yPosition + 500){
      this.speed = 0;
    } else {
      this.speed = random(6);
    };
          println(this, this.yPosition);
  };


}
