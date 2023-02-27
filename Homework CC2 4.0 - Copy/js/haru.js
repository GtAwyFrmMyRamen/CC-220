class haru
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.girlObjects = [];
    }

    draw(i)
    {
        image(this.girlObjects[i], 50, 290, 245, 250);
    }

    animate(animationList)
    {
        for (var j = 0; j < this.idleAnimation.length; j++)
        {
            girl = loadImage(this.idleAnimation[j]);
            this.girlObjects[j] = girl;
        }
    }
}