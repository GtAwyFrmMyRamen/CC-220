class haru
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.girlObjects = [];
        this.xCoordinate = 200;
        this.yCoordinate = 290;

    }

    draw(i)
    {
        image(this.girlObjects[i], this.xCoordinate, this.yCoordinate, 245, 250);
    }

    animate(animationList)
    {
        let animation = animationList ? animationList : this.idleAnimation;

        for (var j = 0; j < animation.length; j++)
        {
            girl = loadImage(animation[j]);
            this.girlObjects[j] = girl;
        }
    }

    moveLeft(){
        this.xCoordinate = this.xCoordinate - 2;
    }

    moveRight(){
        this.xCoordinate = this.xCoordinate + 2;
    }

}