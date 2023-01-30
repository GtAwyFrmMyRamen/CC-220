let start = 0;

let opacity = 255;
let text2 = "Press Spacebar to scatter the beef!"

let myArray = [];
let myArrayY = [];
let myArrayD = [];

var DD = 0
var bx1 = 230
var by1 = 190
var bx2 = 200
var by2 = 290
var bx3 = 180
var by3 = 240
var bx4 = 175
var by4 = 340

function setup()
            {
                createCanvas(500, 600);
                for (let i = 1; i <= 500; i++) {
                    myArray.push(i);
                }
                for (let i = 1; i <= 600; i++) {
                    myArrayY.push(i);
                }
                for (let i = 1; i <= 150; i++) {
                    myArrayD.push(i);
                }
            }

            function draw()
            {
                background(242, 109, 109);
                //plate
                fill(255, 250, 209);
                ellipse(250,280,350,260)
                ellipse(250,280,320,230)

                //curry
                fill(115, 73, 34);
                arc(240, 280, 210, 200, 190, 150, PI + QUARTER_PI, CHORD);   

                //steam
                noFill();
                let b1 = 255;
                let v1 = 20 + sin(start) * 20;
                let b2 = 10;
                let v2 = 210 + sin(start + 1) * 20;
                let b3 = 290;
                let v3 = 90 + sin(start + 2) * 20;
                let b4 = 200;
                let v4 = 180 + sin(start + 3) * 20;
              
                bezier(b1, v1, b2, v2, b3, v3, b4, v4);
                
                noFill();
                let n1 = 295;
                let m1 = 20 + sin(start) * 20;
                let n2 = 80;
                let m2 = 220 + sin(start + 3) * 20;
                let n3 = 370;
                let m3 = 90 + sin(start + 4) * 20;
                let n4 = 240;
                let m4 = 180 + sin(start + 5) * 20;
              
                bezier(n1, m1, n2, m2, n3, m3, n4, m4);

                noFill();
                let k1 = 345;
                let l1 = 20 + sin(start) * 20;
                let k2 = 150;
                let l2 = 220 + sin(start + 5) * 20;
                let k3 = 470;
                let l3 = 90 + sin(start + 6) * 20;
                let k4 = 300;
                let l4 = 180 + sin(start + 7) * 20;
              
                bezier(k1, l1, k2, l2, k3, l3, k4, l4);

                start += 0.05;

                //rice
                for (var i = 94; i < 130; i++) {
                    for (var j = 0; j < 37; j++) {
                        var x = i * 3
                        var y = 200 + j * 3 + 25
                        var d = 3
                        var w = 2

                        fill(255, 255, 255);

                        ellipse(x, y, d, w)
                    }
                }
                for (var i2 = 84; i2 < 125; i2++) {
                    for (var j2 = 0; j2 < 37; j2++) {
                        var x2 = i2 * 3
                        var y2 = 181 + j2 * 3 + 25
                        var d2 = 3
                        var w2 = 2

                        fill(255, 255, 255);

                        ellipse(x2, y2, d2, w2)
                    }
                }
                for (var i3 = 84; i3 < 125; i3++) {
                    for (var j3 = 0; j3 < 37; j3++) {
                        var x3 = i3 * 3
                        var y3 = 222 + j3 * 3 + 25
                        var d3 = 3
                        var w3 = 2

                        fill(255, 255, 255);

                        ellipse(x3, y3, d3, w3)
                    }
                }

                //carrots
                fill(255, 106, 0);
                circle(230, 230, 20);
                circle(210, 280, 20);
                circle(200, 230, 20);
                circle(240, 360, 20);
                circle(170, 320, 20);
            

                //potat
                fill(201, 141, 99)
                ellipse(250, 246, 25, 35);
                ellipse(220, 346, 25, 35);
                ellipse(160, 256, 35, 25);

                //beef
                fill(77, 57, 43)
                square(bx1, by1, 25,)
                square(bx2, by2, 25,)
                square(bx3, by3, 25,)
                square(bx4, by4, 25,)

                // Signature
                noFill();
                stroke(0, 0, 0);
                textSize(32);
                text('カレー', 0, 30);
                text('Ian McGowan', 300, 590)


  if(keyIsPressed)
  {
    if (key === ' ') {
        let randomIndex = floor(random(myArrayD.length));
        let randomNumberD = myArrayD[randomIndex];
        DD = randomNumberD
    }
    if (key === ' ') {
        let randomIndex = floor(random(myArray.length));
        let randomNumber = myArray[randomIndex];
        let randomNumber2 = myArray[randomIndex + DD];
        let randomNumber3 = myArray[randomIndex + DD];
        let randomNumber4 = myArray[randomIndex + DD];
        bx1 = randomNumber;
        bx2 = randomNumber2;
        bx3 = randomNumber3;
        bx4 = randomNumber4;
    }
    if (key === ' ') {
        let randomIndex = floor(random(myArrayY.length));
        let randomNumber = myArrayY[randomIndex];
        let randomNumber2 = myArrayY[randomIndex + DD];
        let randomNumber3 = myArrayY[randomIndex + DD];
        let randomNumber4 = myArrayY[randomIndex + DD];
        by1 = randomNumber;
        by2 = randomNumber2;
        by3 = randomNumber3;
        by4 = randomNumber4;
    }
  }
     //text 2 idk im treading water at this point
     fill(0, opacity);
     stroke(0, opacity);
     text(text2, 0, 500);
     opacity -= 0.5;

     stroke(0, 0, 0);

}