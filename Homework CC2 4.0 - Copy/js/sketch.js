var girl;
var girlObjects = [];
var girlWalkObjects = [];
var girlWalkLeftObjects = [];


var idleAnimation = [];
var walkanimation = [];
var walkleftanimation = [];
var i = 0;
var x = 0;
var startTime;
var count = 20;

var result;
var walkresult;

var counter = 0;

var myInterval;

var index = 0;

var text3 = "THE CURRY GOT COLD OH GOD"
var curryIsDrawn = false


function preload() {
    img3 = loadImage('images/wood.jpg');
    myFont = loadFont('assets/ACES07_Regular.otf');
    result = loadStrings("./assets/idle.txt");
    walkresult = loadStrings("./assets/walk.txt")
}

var myArray = [];
var myArrayY = [];
var myArrayD = [];


function setup() {
    bg = loadImage('images/wood.jpg');

    createCanvas(640, 540);

    for (var i = 0; i < result.length; i++) 
    {
      girlObjects.push(new imageclass('assets/' + result[i], 0, 0));
      idleAnimation[i] = girlObjects[i].getImage();
    }

    currentObjects = girlObjects;

   // setInterval(incrementIndex, 40);
   myInterval = setInterval(incrementIndex, 50);

   // haruclass = new haru(idleAnimation);

   // haruclass.animate();

    curryclass = new curry(250, 280, 200);

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

    if (keyIsPressed) 
    {

      clearInterval(myInterval);

      myInterval = null;
  

      index++;
      if (index > 3) 
      {
        incrementIndex();
        index = 0;
      }
  

      if (key == "d") 
      {
        

        currentAnimation = walkanimation;
        currentObjects = girlWalkObjects;
  

        if (counter >= currentAnimation.length) 
        {
          counter = 0;
        }
  

        currentObjects[counter].setX(currentObjects[counter].getX() + 2);
  

        for (var i = 0; i < girlWalkLeftObjects.length; i++)
        {
          girlWalkLeftObjects[i].setX(currentObjects[0].getX());
        }
          
  

        girlWalkObjects = currentObjects;
  

      } 
      else if (key == "a") 
      {
  
        currentAnimation = leftwalkanimation;
        currentObjects = girlWalkLeftObjects;
  
        if (counter >= currentAnimation.length) 
        {
          counter = 0;
        }
        currentObjects[counter].setX(currentObjects[counter].getX() - 2);
  
        for (var i = 0; i < girlWalkObjects.length; i++)
        {
          girlWalkObjects[i].setX(currentObjects[0].getX());
        }
          
  
        girlWalkLeftObjects = currentObjects;
      }
  
      for (var i = 0; i < girlObjects.length; i++)
        girlObjects[i].setX(currentObjects[0].getX());
  
    } 
    else 
    {
      if (myInterval == null) 
      {
        myInterval = setInterval(incrementIndex, 50);
      }
      currentObjects = girlObjects;
      currentAnimation = idleAnimation;
    }

    image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

    curryclass.draw();
    //curryclass2.draw();
    
   // haruclass.draw(i);
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

function incrementIndex() 
{
  counter += 1;
  if (counter >= currentObjects.length) 
  {
    counter = 0;
  }
}