var DD = 0
var bx1 = 230
var by1 = 190
var bx2 = 200
var by2 = 290
var bx3 = 180
var by3 = 240
var bx4 = 175
var by4 = 340

class imageclass{

    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {
        return this.y;
    }
}

