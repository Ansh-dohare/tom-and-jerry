var garden, gardenImg;
var jerry, jerry1Img, jerry2Img;
var tom, tom1Img,tom2Img; 

function preload() {
    //load the images here
gardenImg = loadImage("images/garden.png");
jerry1Img = loadImage("images/jerryOne.png");
jerry2Img = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerry3Img = loadImage("images/jerryFour.png");

tom1Img = loadImage("images/tomOne.png");
tom2Img = loadImage("images/tomTwo.png");
tom3Img = loadImage("images/tomFour.png","images/tomThree.png");


}

function setup(){
    createCanvas(1000,800);
  

  
  //create tom and jerry sprites here

jerry = createSprite(100,700,20,20);
jerry.addImage("jerrystanding",jerry1Img);
jerry.scale = 0.15;

tom = createSprite(800,700,20,20);
tom.addImage("tomSleeping",tom1Img);
tom.scale = 0.2;



}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
if(tom.x - jerry.x < (tom.width - jerry.width)/2){
  tom.velocityX = 0;
  tom.addAnimation("tomLastImage",tom3Img);
  tom.x = 300;
  tom.scale = 0.2;
  tom.changeAnimation("jerryLastImage", jerry3Img);
  jerry.scale = 0.15;
  jerry.changeAnimation("jerryLastImage");

}  

   drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("tomRunnig", tom2Img);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", jerry2Img);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
  }


}
