var girl;
var idleAnimation = [];
var walkAnimation = [];
var walkLeftAnimation = [];
// var runAnimation = [];

var mySound;
var girlObjects = [];
var i = 0;
var x = 0;
var startTime;
var count = 20;
var haruclass;
var curryclass;
var text3 = "THE CURRY GOT COLD OH GOD"
var curryIsDrawn = false
var isColliding = false;
var isColliding2 = false;
var rectangle1;
var hasPlayedBadSound = false;
var hasPlayedGoodSound = false;
var pointCounter = 0;

function preload() {
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png');
    img3 = loadImage('images/wood.jpg');
    myFont = loadFont('assets/ACES07_Regular.otf');
    mySound = loadSound('./sounds/Cursor1.mp3');
    badSound = loadSound('./sounds/Barrier Hit Select.wav')
    goodSound = loadSound('./sounds/Absorb2.mp3')
    backgroundMusic = loadSound('./sounds/Disco in the Velvet Room.mp3')
    idleAnimation = loadStrings("./assets/idle.txt");
    walkAnimation = loadStrings("./assets/walk.txt");
    walkLeftAnimation = loadStrings("./assets/walkL/walkL.txt")
    // runAnimation = loadStrings("./assets/run.txt");
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
    createCanvas(840, 540);
    setInterval(incrementIndex, 40);

    rec1 = new Rectangle(200, 400, 50, 100, 50);

    rec2 = new Rectangle(600, 400, 50, 100, 10);

    haruclass = new haru(idleAnimation);

    haruclass.animate();

    //curryItem = new curryItem(250, 280, 200);

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
    fill(0,0,0);
    text(count, 10, 300);
    textSize(32);
    text(`Points: ${pointCounter}`, 350,40)

    isColliding = haruclass.isRectanglesColliding(rec1);
    isColliding2 = haruclass.isRectanglesColliding(rec2);

    //console.log(isColliding)
    //badSound.play(isColliding)

    /* function badItem() {
     if (isColliding) {
      badSound.playMode('sustain');
     }
     badSound.play();
 }
 */
    var Curry1 = new curryItem(500, 400, 350, 260);


    textSize(32);
    text(isColliding, 300, 300);
    text(isColliding2, 500, 300);

    fill(0,232,25)
    rec1.draw();
    fill(235,50,50)
    rec2.draw();
    //curryItem.draw();
    fill(0,0,0);

    haruclass.draw(i);

    var elapsedTime = millis() - startTime;
    if (elapsedTime >= 1000) {
        count--;
        startTime = millis();
    }
    if (count < 0) {
        text(text3, 170, 250)
    }

    if (keyIsPressed) {
        // console.log(keyCode === RIGHT_ARROW)
        if (keyCode === LEFT_ARROW) haruclass.moveLeft();
        if (keyCode === RIGHT_ARROW) haruclass.moveRight();

    }

}

function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        mySound.play();

        haruclass.animate(walkLeftAnimation);



    } else if (keyCode === RIGHT_ARROW) {

        haruclass.animate(walkAnimation);


    }
    mySound.play();
}

function keyReleased() {
    haruclass.animate();
}

function mouseClicked() {
    backgroundMusic.play();
    setVolume(0.2)
}

function incrementIndex() {
    i += 1;

    if (i >= idleAnimation.length) {
        i = 0;
    }

    /* function isRectanglesColliding(rec1, rec2) {
        var topEdge1 = rec1.getY() + rec1.getH();
        var rightEdge1 = rec1.getX() + rec1.getW(); 
        var leftEdge1 = rec1.getX();
        var bottomEdge1 = rec1.getY();
        var topEdge2 = rec2.getY() + rec2.getH();
        var rightEdge2 = rec2.getX() + rec2.getW(); 
        var leftEdge2 = rec2.getX();
        var bottomEdge2 = rec2.getY();   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
            return true;
        }
        return false;
        */

    if (isColliding && !hasPlayedBadSound) {
        badSound.play();
        hasPlayedBadSound = true;
    }

    if (isColliding2 && !hasPlayedGoodSound) {
        goodSound.play();
        hasPlayedGoodSound = true;
    }

    if (isColliding2) pointCounter = pointCounter +1;
    if (isColliding) pointCounter = pointCounter -1;
}



/* function isCurryColliding(Curry2){
     var topEdge1 = this.yCoordinate;
     var rightEdge1 = this.xCoordinate; 
     var leftEdge1 = this.xCoordinate;
     var bottomEdge1 = this.yCoordinate;
     var topEdge2 = Curry2.getPY() + Curry2.getPH();
     var rightEdge2 = Curry2.getPX() + Curry2.getPW(); 
     var leftEdge2 = Curry2.getPX();
     var bottomEdge2 = Curry2.getPY();   
     
     if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
         return true; 
    }
    return false;
*/


