var img;
var xPos, yPos;

function setup() {
  createCanvas(640,800);
  noStroke();
  img = loadImage("img1.jpg");
  image(img,0,0,640,800);
  background(0);
  loadPixels();
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
  if(yPos<0){
    yPos=height-10;
  }
  else if(yPos>height){
    yPos=10;
  }
  for(var y=0;y<img.height;y+=1){
    for(var x=0;x<img.width;x+=1){
      var loc =x+y*width;
      fill(img.pixels[loc],100);
      stroke(img.pixels[loc]);
      if(x==xPos && y==yPos){
        var diam= 20.0;
        strokeWeight(5);
        rectMode(CENTER);
        rect(xPos,yPos,diam,diam);
      }
    }
  }
}
function keyPressed() {
  if(key == CODED) {
    if(keyCode ==LEFT) xPos-=30;
    else if(keyCode ==RIGHT) xPos+=30;
    else if(keyCode ==UP) yPos-=30;
    else if(keyCode ==DOWN) yPos+=30;
  }
}