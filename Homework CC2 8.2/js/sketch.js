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


function preload() {
  img = loadImage('images/wood.jpg');
  win = loadImage('images/win.png');
  lose = loadImage('images/lose.png');
  BGM = loadSound('sounds/Disco in the Velvet Room.mp3');
  moveSE = loadSound('sounds/Cursor1.mp3');
  collectSE = loadSound('sounds/Absorb2.mp3')
  badSE = loadSound('sounds/Barrier Hit Select.wav')
  loseSE = loadSound('sounds/Mystery.ogg');
  winSE = loadSound('sounds/PuzzleSolved.ogg')
  idlePaths = loadStrings("./images/idle/idle.txt");
  walkPaths = loadStrings("./images/walk/walk.txt");
}

function setup() {
  bg = loadImage('images/wood.jpg');
  image(win, 0, 0)
  image(lose, 0, 0)
  BGM.loop();
  createCanvas(800, 600);
  world.gravity.y = 0;
  myAnimation = new animationImage(0, 0, 150, 150);
  myAnimation.loadAnimation('idle', idlePaths);
  myAnimation.loadAnimation('walk', walkPaths);

  curryImage = createSprite(100, 250, 100, 100)
  curryImage.img = "./images/curry.png";
  curryImage.scale = 0.10;
  curryImage.d = 75;


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  xBound = 800;
  yBound = 600;

  vegImage = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  vegImage.img = "./images/veg.png";
  vegImage.scale = 0.20;
  vegImage.d = 75;

  vegImage2 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  vegImage2.img = "./images/veg.png";
  vegImage2.scale = 0.20;
  vegImage2.d = 75;

  vegImage3 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  vegImage3.img = "./images/veg.png";
  vegImage3.scale = 0.20;
  vegImage3.d = 75;

  curryImage2 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  curryImage2.img = "./images/curry.png";
  curryImage2.scale = 0.10;
  curryImage2.d = 75;

  curryImage3 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  curryImage3.img = "./images/curry.png";
  curryImage3.scale = 0.10;
  curryImage3.d = 75;

  curryImage4 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  curryImage4.img = "./images/curry.png";
  curryImage4.scale = 0.10;
  curryImage4.d = 75;

  curryImage5 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100)
  curryImage5.img = "./images/curry.png";
  curryImage5.scale = 0.10;
  curryImage5.d = 75;



  wallImage2 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100, 'static');
  wallImage2.img = "./images/wall.png";
  wallImage2.scale = 0.10;
  wallImage2.w = 185;
  wallImage2.h = 100;

  wallImage3 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100, 'static');
  wallImage3.img = "./images/wall.png";
  wallImage3.scale = 0.10;
  wallImage3.w = 185;
  wallImage3.h = 100;

  wallImage3 = createSprite(getRandomInt(xBound), getRandomInt(yBound), 100, 100, 'static');
  wallImage3.img = "./images/wall.png";
  wallImage3.scale = 0.10;
  wallImage3.w = 185;
  wallImage3.h = 100;
}

function draw() {

  background(bg);
  textSize(32);
  text(`Health: ${healthCounter}`, 10, 40)
  text(`Points: ${pointCounter}`, 300, 40)

  if (myAnimation.isColliding(curryImage)) {
    collectSE.play();
    curryImage.visible = false
    curryImage.pos = { x: -50, y: -50 };
  }

  if (myAnimation.isColliding(curryImage2)) {
    collectSE.play();
    curryImage2.visible = false
    curryImage2.pos = { x: -50, y: -50 };
  }

  if (myAnimation.isColliding(curryImage3)) {
    collectSE.play();
    curryImage3.visible = false
    curryImage3.pos = { x: -50, y: -50 };
  }

  if (myAnimation.isColliding(curryImage4)) {
    collectSE.play();
    curryImage4.visible = false
    curryImage4.pos = { x: -50, y: -50 };
  }

  if (myAnimation.isColliding(curryImage5)) {
    collectSE.play();
    curryImage5.visible = false
    curryImage5.pos = { x: -50, y: -50 };
  }

  if (myAnimation.isColliding(vegImage)) {
    badSE.play();
    vegImage.visible = false
    vegImage.pos = { x: -50, y: -50 };
  }
  if (myAnimation.isColliding(vegImage2)) {
    badSE.play();
    vegImage2.visible = false
    vegImage2.pos = { x: -50, y: -50 };
  }
  if (myAnimation.isColliding(vegImage3)) {
    badSE.play();
    vegImage3.visible = false
    vegImage3.pos = { x: -50, y: -50 };
  }

  if (kb.pressing('d')) {
    myAnimation.updatePosition('forward');
    myAnimation.drawAnimation('walk');

  }
  else if (kb.pressing('a')) {
    myAnimation.updatePosition('reverse');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('w')) {
    myAnimation.updatePosition('up');
    myAnimation.drawAnimation('walk');
  }
  else if (kb.pressing('s')) {
    myAnimation.updatePosition('down');
    myAnimation.drawAnimation('walk');
  }
  else {
    myAnimation.drawAnimation('idle');
  }

  function keyPressed() {
    if (keys.includes(key)) {
      moveSE.loop();
    }
  }

  function keyReleased() {
    if (keys.includes(key)) {
      moveSE.stop();
    }
  }

  function mousePressed() {
    if (BGM.isPlaying()) {
      // .isPlaying() returns a boolean
      BGM.pause(); // .play() will resume from .pause() position
      background(255, 0, 0);
    } else {
      BGM.play();
      background(0, 255, 0);
    }
  }
  if (pointCounter == 10 && !played) {
    win = createSprite(400, 300, 100, 100, 'static')
    win.img = "./images/win.png";
    win.scale = 1;
    winSE.play();
    played = true;
  }
  if (healthCounter == 0 && !played) {
    lose = createSprite(400, 300, 100, 100, 'static')
    lose.img = "./images/lose.png";
    lose.scale = 1;
    loseSE.play();
    played = true;
  }


  if (myAnimation.isColliding(curryImage)) pointCounter = pointCounter + 2;
  if (myAnimation.isColliding(curryImage2)) pointCounter = pointCounter + 2;
  if (myAnimation.isColliding(curryImage3)) pointCounter = pointCounter + 2;
  if (myAnimation.isColliding(curryImage4)) pointCounter = pointCounter + 2;
  if (myAnimation.isColliding(curryImage5)) pointCounter = pointCounter + 2;

  if (myAnimation.isColliding(vegImage)) healthCounter = healthCounter - 1;
  if (myAnimation.isColliding(vegImage2)) healthCounter = healthCounter - 1;
  if (myAnimation.isColliding(vegImage3)) healthCounter = healthCounter - 1;

  wallImage2.debug = mouseIsPressed;
  curryImage.debug = mouseIsPressed;
  vegImage.debug = mouseIsPressed;
  myAnimation.setDebug(mouseIsPressed);

}