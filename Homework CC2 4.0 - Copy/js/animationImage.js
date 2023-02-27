class haruu
{

    constructor(fileNames, x, y, w, h)
    {
        this.fileNames = fileNames;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.girlObjects = [];
        this.loadAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        setInterval(this.incrementIndex, 50);
    }

    getX()
    {
        return this.x;
    }

    setX(x)
    {
        this.x = x;
    }

setCurrentFrameCount(currentFrameCount)
{
    this.currentFrameCount = currentFrameCount;
}

    loadAnimation()
    {
        for(var i = 0; i < this.fileNames.length; i++)
        {
            this.girlObjects[i] = loadImage(this.fileNames[i]);
        }
    }

    drawAnimation(i)
    {
        this.incrementIndex();
        //console.log(i);
        this.girlObjects(this.girlObjects[this.i], this.x, this.y, this.w, this.h);
    }

    incrementIndex() {

        if(this.currentFrameCount % 5 == 0)
        console.log(i);
        this.i++;
        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }
}