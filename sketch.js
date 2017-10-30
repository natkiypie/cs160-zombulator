// Zombulator by Nathaniel

var backgroundColor;
//var textColor;

const MIN_SIZE = 5;
const MAX_SIZE = 50;
const NUMBER_OF_ZOMBIES = 100;
const NUMBER_OF_HUMANS = 100;

var zombies;

var humans;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(52, 63, 81);
  initializeZombies();
  initializeHumans();
}

function draw() {
  background(backgroundColor);
  noStroke();
  drawZombies();
  drawHumans();
  moveHumans();
  moveZombies();
}

function initializeZombies() {
  zombies = [];
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
  initializeZombie(i);
  }
}

function initializeZombie(index) {
  zombies[index] = {
    x: random(0, windowWidth),
    y: random(0, 200),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(100, 255), random(50, 150), random(50, 150), 150),
    draw: function() {
      fill(this.color);
      ellipse(this.x, this.y, this.size, this.size);
    },
    move: function() {
      this.y +=1;
    }
  };
}

function initializeHumans() {
  humans = [];
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    initializeHuman(i);
  }
}

function initializeHuman(index) {
  humans[index] = {
    x: random(0, windowWidth),
    y: random(windowHeight - 200, windowHeight),
    size: random(MIN_SIZE, MAX_SIZE),
    color: color(random(50, 250), random(50, 250), random(50, 250), 150)
  }
}

function drawZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].draw();
 }
}

function moveZombies() {
  for (var i = 0; i < NUMBER_OF_ZOMBIES; ++i) {
    zombies[i].move();
  }
}

function drawHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    drawHuman(humans[i]);
  }
}

function drawHuman(human) {
  fill(human.color);
  ellipse(human.x, human.y, human.size, human.size);
  //fill(textColor);
  //text("h", human.x, human.y);
}

function moveHumans() {
  for (var i = 0; i < NUMBER_OF_HUMANS; ++i) {
    moveHuman(humans[i]);
  } 
}

function moveHuman(human) {
  human.y -= 1;
}

