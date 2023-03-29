var angle = 0;
var shapes = [];
var villager;
var dagger;
var pep;
var abra;
var gold;
var daggerTex;
var BGM;
var randomPosition;
var daggerPosition;
var title;
var sig;
var font;

function preload() {
  pep = loadImage('images/pep.jpg');
  abra = loadImage('images/abra.png');
  gold = loadImage('images/gold.jpg');
  daggerTex = loadImage('assets/daggertex.png');
  villager = loadModel('assets/lightob.obj', true);
  dagger = loadModel('assets/Heidagger.obj', true);
  BGM = loadSound('sounds/Cursed Animal Crossing.mp3')
  font = loadFont('assets/FinkHeavy.ttf');
}

function setup() {
  createCanvas(800, 600, WEBGL);
  fill('#ED225D');
  textFont(font);
  textSize(36);
  text('p5*js', 10, 50);
  randomPosition = createVector(random(-200, 300), random(-100, 200), 0);
  daggerPosition = createVector(random(-200, 300), random(-100, 200), 0);
  BGM.loop();
  for (var i = 0; i < 4; i++) {
    var shapeType = floor(random(0, 4));
    var shapeSize = random(50, 100);
    var shapeSpeed = random(0.25, 0.45);
    var shapePosition = createVector(random(-200, 300), random(-100, 200), random(-200, 300));
    shapes.push(new Shape(shapeType, shapeSize, shapeSpeed, shapePosition));
  }

  push();
  title = new Sprite();
  title.pos = {x: -200, y: -200};
  title.color = 'black';
  title.rotation = -5;
  title.textColor = 'red';
  title.text = "Cursed Animal Crossing"; 
	title.w = 100;
	title.h = 100;
  pop();

  sig = new Sprite();
  sig.pos = {x: 200, y: 200};
  sig.color = 'black';
  sig.rotation = 5;
  sig.textColor = 'red';
  sig.text = "Ian McGowan"; 
	sig.w = 100;
	sig.h = 100;

}



function draw() {
  background(0);
  orbitControl();
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(48, 129, 216, -300, -300, 0);
  pointLight(48, 129, 216, 300, 300, 0);
  noStroke();
  normalMaterial();
  image(abra);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 0, 0, locX, locY, 100);

  //villager
  push();
  scale(2);
  translate(randomPosition.x, randomPosition.y, randomPosition.z);
  rotateX(frameCount * 0.05);
  rotateY(frameCount * 0.51);
  texture(pep);
  model(villager);
  pop();

  //dagger
  push();
  scale(2);
  translate(daggerPosition.x, daggerPosition.y, daggerPosition.z);
  rotateX(frameCount * 1.05);
  rotateY(frameCount * 1.51);
  texture(daggerTex);
  model(dagger);
  pop();

  for (var i = 0; i < shapes.length; i++) {
    shapes[i].update();
    shapes[i].display();
  }

  angle += 0.01;
}

class Shape {
  constructor(type, size, speed, position) {
    this.type = type;
    this.size = size;
    this.speed = speed;
    this.position = position;
    this.angle = random(0, TWO_PI);
    this.texture = loadImage("images/gold.jpg", "images/abra.png")
  }

  update() {
    this.angle += this.speed;
    var radius = 250;
    var x = radius * cos(this.angle);
    var z = radius * sin(this.angle);
    this.position.x = x;
    this.position.z = z;
  }



  display() {
    push();
    translate(this.position.x, this.position.y, this.position.z);
    rotateY(this.angle);
    rotateX(this.angle);
    texture(this.texture);
    switch (this.type) {
      case 0:
        box(this.size);
        break;
      case 1:
        sphere(this.size / 2);
        break;
      case 2:
        cone(this.size / 2, this.size);
        break;
      case 3:
        cylinder(this.size / 2, this.size);
        break;
    }
    pop();
  }
}

function mouseClicked() {
  randomPosition = createVector(random(-200, 300), random(-100, 200), 0);
  daggerPosition = createVector(random(-200, 300), random(-100, 200), 0);
}


