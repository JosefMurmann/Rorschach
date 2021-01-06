let sballs = []
let mballs = []
let hballs = []

function setup() {
    let canvas =createCanvas(800, 800);
  canvas.parent("p5Canvas")
  noStroke()
}

function draw() {
  background(50);

  for (let i = 0; i < hballs.length; i++) {
    hballs[i].draw()
    hballs[i].move()
  }

  for (let i = 0; i < mballs.length; i++) {
    mballs[i].draw()
    mballs[i].move()
  }
  for (let i = 0; i < sballs.length; i++) {
    sballs[i].draw()
    sballs[i].move()
  }
  if (second() > sballs.length) {
    sballs.push(new sBall())
  }
  if (second() == 0) {
    sballs.length = 0
  }


  if (minute() > mballs.length) {
    mballs.push(new mBall())
  }
  if (minute() == 0) {
    mballs.length = 0
  }

  if (hour() > hballs.length) {
    hballs.push(new hBall())
  }
  if (hour() == 0) {
    hballs.length = 0
  }

}
class sBall {
  constructor() {
    this.pos = createVector(random(0, width), 10)
    this.vel = createVector(random(-5, 5), random(-1, 2))

  }
  draw() {
    fill(0, 255, 255)
    ellipse(this.pos.x, this.pos.y, 10)
  }
  move() {
    this.vel.y += 0.15
    this.pos.add(this.vel)

    if (this.pos.x < 10 || this.pos.x > width - 10) {
      this.vel.x *= -1
    }
    if (second() < 56) {
      if (this.pos.y > 790) {
        this.vel.y *= -0.97
        this.pos.y = 790
      }
    }
  }
}
//--------------------------------------------------------------------------------------------------------------
class mBall {
  constructor() {
    this.pos = createVector(random(25, width - 25), random(50, height - 100))
    this.vel = createVector(random(-2, 3), random(-3, 3))

  }
  draw() {
    fill(255, 0, 85)
    ellipse(this.pos.x, this.pos.y, 50)
  }
  move() {
    this.vel.y += 0.005
    this.pos.add(this.vel)

    if (this.pos.x < 25 || this.pos.x > width - 25) {
      this.vel.x *= -1
    }
    if (minute() < 59 || second() < 40) {
      if (this.pos.y > 775) {
        this.vel.y *= -1
        this.pos.y = 775
      }
    }
          if (this.pos.y < 25) {
        this.vel.y *= -0.2
        this.pos.y = 25
      
    }
  }
}

//--------------------------------------------------------------------------------------------------------------

class hBall {
  constructor() {
    this.pos = createVector(random(25, width - 25), random(50, height - 400))
    this.vel = createVector(random(-1, 1), random(0, 1))

  }
  draw() {
    fill(255, 255, 0)
    ellipse(this.pos.x, this.pos.y, 100)
  }
  move() {
    this.vel.y += 0.001
    this.pos.add(this.vel)

    if (this.pos.x < 50 || this.pos.x > width - 50) {
      this.vel.x *= -1
    }
    if (hour() < 59 || minute() < 59) {
      if (this.pos.y > 750) {
        this.vel.y *= -1
        this.pos.y = 750
      }
    }
      if (this.pos.y < 50) {
        this.vel.y *= -0.2
        this.pos.y = 50
      
    }
  }
}