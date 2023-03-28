var BGM;
var idlePaths = [];
var myAnimation;
var myWalkAnimation;
var walkPaths = [];
var wallImage;
var vegImage;
var curryImage;
var curryImage2;
var healthCounter = 3;
var pointCounter = 0;
var win;
var lose;
var keys = ["w", "a", "s", "d"];
var loseSE;
var played = false;
var pep;
var abra;
var gold;
var villager;

let angle = 0;

function preload() {
  pep = loadImage('images/pep.jpg');
  abra = loadImage('images/abra.png');
  gold = loadImage('images/gold.jpg');
  villager = loadModel('assets/lightob.obj', true);
  BGM = loadSound('sounds/Cursed Animal Crossing.mp3')
}

function setup() {
  createCanvas(800, 600, WEBGL);
  BGM.loop();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
xBound = 800;
yBound = 600;


function draw() {
  background(0);
  orbitControl();
  pointLight(255, 255, 255, 0, 0, 0);
  pointLight(48, 129, 216, -300, -300, 0);
  pointLight(48, 129, 216, 300, 300, 0);
  noStroke();
  normalMaterial();
  image(abra);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 0, 0, locX, locY, 100);

  // box
  push();
  translate(-200, -100, 0);
  rotateX(frameCount * 1.01);
  rotateY(frameCount * 1.01);
  texture(abra);
  box(90);
  pop();

  // sphere
  push();
  translate(-40, -200, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 2.01);
  texture(pep);
  sphere(100);
  pop();

  // ring
  push();
  translate(300, -200, 0);
  rotateX(frameCount * -1.01);
  rotateY(frameCount * -1.01);
  specularMaterial(250);
  texture(gold);
  torus(90, 20);
  pop();

  // cyl
  push();
  translate(-150, 200, 0);
  rotateX(frameCount * 3.01);
  rotateY(frameCount * -2.01);
  texture(pep);
  cylinder(25, 175);
  pop();

  // cone
  push();
  translate(-50, 100, 0);
  rotateX(frameCount * 1.01);
  rotateY(frameCount * 1.51);
  texture(abra);
  cone(140, 80);
  pop();

  // ellip
  push();
  translate(250, 200, 0);
  rotateX(frameCount * 3.01);
  rotateY(frameCount * 3.01);
  texture(pep);
  ellipsoid(160, 40, 50);
  pop();

  // villager
  push();
  scale(2);
  translate(0, 0, 100);
  rotateX(frameCount * 1.01);
  rotateY(frameCount * 0.51);
  texture(pep);
  model(villager);
  pop();

  angle += 0.02;
}
