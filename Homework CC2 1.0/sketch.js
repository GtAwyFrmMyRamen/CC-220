function setup()
            {
                createCanvas(500, 600)
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
                square(230, 190, 25,)
                square(200, 290, 25,)
                square(180, 240, 25,)
                square(175, 340, 25,)

                //steam
                noFill();
stroke(255, 102, 0);
stroke(0, 0, 0);
bezier(255, 20, 10, 210, 290, 90, 200, 180);
bezier(295, 20, 80, 220, 370, 90, 240, 180);
bezier(345, 20, 150, 220, 470, 90, 280, 180);

                // Signature
                textSize(32);
                text('カレー', 200, 500);
                fill(40, 102, 153);
            }
            