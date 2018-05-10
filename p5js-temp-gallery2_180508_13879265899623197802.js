var img;
var xPos, yPos;

function setup() {
  createCanvas(640,800);
  background(0);
  img = loadImage('img1.jpg');
  noStroke();
  xPos=width/2;
  yPos=height/2;
}

function draw() {
  
  if(xPos<0){
    xPos=width-20;
  }
  else if(xPos>width){
    xPos=20;
  }
  else if(yPos<0){
    yPos=height-10;
  }
  else if(yPos>height){
    yPos=10;
  }
  var c= img.get(xPos,yPos);
  fill(c,50);
  stroke(c);
  var diam= 20.0;
  strokeWeight(5);
  rectMode(CENTER);
  rect(xPos,yPos,diam,diam);

}
function keyPressed() {
  
  if(keyCode ===LEFT_ARROW) xPos-=30;
  else if(keyCode ===RIGHT_ARROW) xPos+=30;
  else if(keyCode ===UP_ARROW) yPos-=30;
  else if(keyCode ===DOWN_ARROW) yPos+=30;
 
}
