var girl;
var idleAnimation = [];
var walkAnimation = [];
var girlWalkObjects = [];
var girlObjects = [];
var i = 0;
var j = 0;
var x = 0;
var startTime;
var count = 20;
var haruclass;
var myAnimation;
var currentFrameCount

var result;
var walkresult;
var walkresultleft;

var curryclass;
var text3 = "THE CURRY GOT COLD OH GOD"
var curryIsDrawn = false


function preload() {
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png');
    img3 = loadImage('images/wood.jpg');
    myFont = loadFont('assets/ACES07_Regular.otf');
    idleAnimation = loadStrings("./assets/idle.txt");
    walkAnimation = loadStrings("./assets/walk.txt");
}

var myArray = [];
var myArrayY = [];
var myArrayD = [];


function setup() {
    bg = loadImage('images/wood.jpg');
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png')
    createCanvas(640, 540);


    haruclass = new haru(idleAnimation);

    myAnimation = new haruu(idleAnimation, 100, 250, 150, 150)

    haruclass.animate();


    curryclass = new curry(250, 280, 200);
    curryclass2 = new curry(150, 180, 200);

   /* for(var j = 0; j < idleAnimation.length;j++)

{
    girl = loadImage(idleAnimation[j]);
    girlObjects[j] = girl;
}
*/
    startTime = millis();
    for (var i = 1; i <= 500; i++) {
        myArray.push(i);
    }
    for (var i = 1; i <= 600; i++) {
        myArrayY.push(i);
    }
    for (var i = 1; i <= 150; i++) {
        myArrayD.push(i);
    }
}

function draw() {
    background(bg);
    text(count, 10, 300);
    textSize(32);

//myAnimation.drawAnimation(i);

    curryclass.draw();
    //curryclass2.draw();
    
    myAnimation.setCurrentFrameCount(frameCount);
    haruclass.draw(i);
    //image(idleAnimation[i], girlObjects[i].getX(), girlObjects[i].getY());
    //image(girlObjects[i], 50, 290, 245, 250);
    var elapsedTime = millis() - startTime;
    if (elapsedTime >= 1000) {
        count--;
        startTime = millis();
    }
    if (count < 0) {
        text(text3, 115, 450)
    }
}
/*
if(keyPressed)
{
    if (key === ' ') {
        
    }
}
*/
