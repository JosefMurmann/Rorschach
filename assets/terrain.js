let xoff = 0
let r=0;
let v1;
p5.disableFriendlyErrors = true;
function setup() {
  let canvas = createCanvas(1300, 1300,WEBGL);
  canvas.parent("p5Canvas")
    background(255);
 rectMode(CENTER);
 
  slider = createSlider(0, 800, 100);
  slider.position(10, 10);
  slider.style('width', '1280px', 'red');
  noStroke()
  


}



function draw() {
  background(173, 216, 230)
  rotateX(-0.6);
  for(let i = 0; i<90; i++){
  for(let j = 0; j<40; j++ ){
    h = 20*noise((i-xoff)*0.1,j*0.1);
    
    push()
    translate(j*20-400,(-h*h)/2+150, i*20-1800)
    if(h>9){
       fill(100,15000/(h*h),0)
       }else if ( h < 9 && h > 7 ){
         fill(30*h,31*h,150)
       }else{
         fill(h*10,h*15,255)
       }
    box(20, h*h, 20),
    pop()
 
   
   }
    
  }
  let val = slider.value()/1000;
  xoff+=val
}