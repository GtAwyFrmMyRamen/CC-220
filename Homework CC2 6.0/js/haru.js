class haru
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.girlObjects = [];
        this.xCoordinate = 350;
        this.yCoordinate = 350;

    }

    draw(i)
    {
        image(this.girlObjects[i], this.xCoordinate, this.yCoordinate, 145, 150);
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

    isRectanglesColliding(rectInput) {

        // let vals = [this.xCoordinate, this.yCoordinate, 145, 150, rec2.getX(), rec2.getY(), rec2.getW(), rec2.getH()]

        let collisionHappened = collideRectRect(this.xCoordinate, this.yCoordinate, 145, 150, rectInput.getX(), rectInput.getY(), rectInput.getW(), rectInput.getH());

        return collisionHappened;
        /*
        var topEdge1 = this.y + this.h;
        var rightEdge1 = this.x = this.w; 
        var leftEdge1 = this.x;
        var bottomEdge1 = this.y;
        var topEdge2 = rec2.getY() + rec2.getH();
        var rightEdge2 = rec2.getX() + rec2.getW(); 
        var leftEdge2 = rec2.getX();
        var bottomEdge2 = rec2.getY();   
        
        if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
            return true;
        }
        return false;
     }
*/
    /* isCurryColliding(Curry1) {
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
    }
    */
}
}