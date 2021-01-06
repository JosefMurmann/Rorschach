let cam
let see = 0
let move = 0
let map = []
let slider
p5.disableFriendlyErrors = true;
function setup() {
  
  slider = createSlider(500, 5000, 1000);
  slider.position(10, 10);
  slider.style('width', '800px');
  let canvas = createCanvas(windowWidth, windowHeight,WEBGL);
  canvas.parent("p5Canvas")
  fill(0)
  cam = createCamera()
  setCamera(cam)
  cam.pan(180)
  cam.setPosition(5000, -100, 5000);
  perspective(PI/3.0, width/height,0,5000)
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      map.push(new Chunk(i, j))
    }
  }
}

function draw() {
  let val = slider.value();
  
  background(255, 171, 165);

  let campos = createVector(cam.eyeX, cam.eyeZ)
  for (let i = 0; i < map.length; i++) {
    if (map[i].pos.dist(campos) < val)
      map[i].build()
  }

  cam.pan(see)
  
 cam.setPosition(cam.eyeX, noise(cam.eyeX/ 500, cam.eyeZ/ 500) * 400 -120, cam.eyeZ);
  if (keyIsDown(LEFT_ARROW)) {
    see = 0.05;

  } else if (keyIsDown(RIGHT_ARROW)) {
    see = -0.05;

  } else {
    see = 0
  }

  if (keyIsDown(UP_ARROW)) {
    cam.move(0, 0, -7)

  }

  if (keyIsDown(DOWN_ARROW)) {
    cam.move(0, 0, 7)

  }

}

class Chunk {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.pos = createVector(250 + this.x * 500, 250 + this.y * 500)

  }
  build() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let h = noise((i + 10 * this.x) / 10, (j + 10 * this.y) / 10) * 400
        push()
        if(h < 200 && h > 0){
          fill(140-h/2)
          noStroke(0)
        } else if(h < 220 && h > 200) {
          fill(h/10*1,h/10*2,h/10*1)
          noStroke(0)
        }
        else{
          fill(h/8,h/3,230)
          noStroke()
        }
        
        
        
        translate(i * 50 + this.x * 500, h, j * 50 + this.y * 500)
        box(50, 60, 50)
        pop()
      }
    }
  }
}