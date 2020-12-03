let r =0;
let v1;
disableFriendlyErrors = true
function setup() {
  let canvas =createCanvas(800, 600, WEBGL);
  canvas.parent("p5Canvas")
    background(255);
  camera()
  stroke(230)
  strokeWeight(15)
 rectMode(CENTER);
camera(800, -500, 800, 200, 0, 200, 0, 200, 0);
}



function draw() {
  background(173, 216, 230)
  push()
  strokeWeight(0)
  fill(53, 143, 57)
  translate(200,130,300)
  box(600, 50, 600) 
  pop()
  orbitControl()
  r+=0.1
  for(let i = 0; i<5; i++){
  for(let j = 0; j<30; j++ ){
    for(let k = 0; k<30; k++ ){
    let v = noise(0.3*i ,0.3* j,0.3*k+r,)
    
      if(v < 0.6){
        strokeWeight(0)
      }else{ strokeWeight (v*v*v*v*200) }
      stroke(250-i*10)
    push()
    translate(j*20-100,i*20-100,k*20)
    point(0,0,int(v*10))
    pop()
    }
   }
    
  }
}