let count = 0;
let numb = 0;
let timer = 5;
let n = 0;
let xpos
let ypos
let xpos1 = xpos;
let ypos1 = ypos;
function setup() {
  let canvas = createCanvas(1200, 700);
  canvas.parent("p5Canvas")
  background(255, 255, 255);
  fill(0, 0, 0);
  frameRate(1000);
  xpos=sin(count)*noise(n, 0)*200 + width/2;
  ypos=cos(count)*noise(n, 0)*200 + height/2;
}
function draw() {
  if (count > 0.02){
  xpos = sin(count)*(1*noise(n, 0))*350 + width/2;
  ypos = cos(count)*(1*noise(n, 0))*300 + height/2;

  let w = pow(noise(0, n)*10,2);
  strokeWeight(w);

  line(xpos, ypos, xpos1, ypos1); 
  line(-xpos+width, ypos, -xpos1+width, ypos1); 

  n= n+0.1;
  count=count+0.05;
  xpos1 = xpos;
  ypos1 = ypos;
  }
  if (count <0.05){
    background(255,255,255);
    let timer = random(8.5,10.5);
    count = count+0.1;
    xpos1 = sin(count)*(1*noise(n, 0))*350 + width/2;
    ypos1 = cos(count)*(1*noise(n, 0))*300 + height/2;
  }
  if ( count > timer) {
    
    console.log("click!" + numb + timer);
    count = 0;
    numb++;
    background(255, 255, 255);
    timer = random(7.5,9.5);
  }
    if (numb == 10000){
      stop();
    }
  }