let feild = []
let ballz = []

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5Canvas")
  frameRate(60)
  noStroke()
  background(190, 230, 255)
  fill(200, 15, 75, 100)
  for (let i = 0; i < 52; i++) {
    for (let j = 0; j < 27; j++) {
      let x = i
      let y = j
      let n = map(noise(i / 3, j / 3), 0, 1, -TWO_PI, TWO_PI)


      feild.push(new Pusher(x, y, n))
    }
  }

  for (let i = 0; i < 200; i++) {
    ballz.push(new Ball())
  }
}

function draw() {

  for (let i = 0; i < ballz.length; i++) {

    ballz[i].edge();
    ballz[i].move();
    ballz[i].draw();
  }


}
class Ball {
  constructor() {
    this.pos = createVector(random(0, width), random(0, height))
    this.dir = createVector(0, 0)
    this.f = createVector(0.0, 0)


  }
  draw() {

    ellipse(this.pos.x, this.pos.y, 2)
  }
  move() {

    for (let i = 0; i < feild.length; i++) {
      if (this.pos.dist(feild[i].loc) < width / 50)
        this.f.add(feild[i].vec)
    }
    this.f.div(20)
    this.dir.add(this.f)
    this.pos.add(this.dir)
    this.dir.div(1.02)
  }

  edge() {
    if (this.pos.x < 0) {
      this.pos = createVector(random(0, width), random(0, height))
      this.dir = createVector(0, 0)
      this.f = createVector(0.0, 0)
    }
    if (this.pos.x > width) {
      this.pos = createVector(random(0, width), random(0, height))
      this.dir = createVector(0, 0)
      this.f = createVector(0.0, 0)
    }
    if (this.pos.y < 0) {
      this.pos = createVector(random(0, width), random(0, height))
      this.f = createVector(0.0, 0)
      this.dir = createVector(0, 0)
    }
    if (this.pos.y > height) {
      this.pos = createVector(random(0, width), random(0, height))
      this.dir = createVector(0, 0)
      this.f = createVector(0.0, 0)
    }
  }
}
//--------------------------------------------------------

class Pusher {
  constructor(i, j, d) {
    this.loc = createVector(i * (width / 50), j * (height / 25))
    this.heading = d
    this.vec = p5.Vector.fromAngle(d)
  }
}