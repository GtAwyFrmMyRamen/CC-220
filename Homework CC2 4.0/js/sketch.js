var girl;
var idleAnimation = [];
var girlObjects = [];
var i = 0;
var x = 0;
var startTime;
var count = 20;
var haruclass;
var curryclass;
var text3 = "THE CURRY GOT COLD OH GOD"
var curryIsDrawn = false


function preload() {
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png');
    img3 = loadImage('images/wood.jpg');
    myFont = loadFont('assets/ACES07_Regular.otf');
    idleAnimation = loadStrings("../assets/idle.txt");
}

var myArray = [];
var myArrayY = [];
var myArrayD = [];


class girlL {
    constructor(name) {
        this.name = name;
    }
}

function setup() {
    bg = loadImage('images/wood.jpg');
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png')
    createCanvas(640, 540);
    setInterval(incrementIndex, 40);

    haruclass = new haru(idleAnimation);

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

    curryclass.draw();
    //curryclass2.draw();
    
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

if(keyPressed)
{
    if (key === ' ') {
        
    }
}

function incrementIndex() {
    i += 1;

    if (i >= idleAnimation.length) {
        i = 0;
    }
}
