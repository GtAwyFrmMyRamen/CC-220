class animationImage {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.imageObjects = [];
        this.currentAnimation;
        this.createAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction = "";
    }

    setDebug(toggle) {
        this.currentAnimation.debug = toggle;
    }

    getX() {
        return this.x;
    }

    setX(x) {
        this.x = x;
    }

    setCurrentFrameCount(currentFrameCount) {

        this.currentFrameCount = currentFrameCount;
    }

    createAnimation() {
        this.currentAnimation = createSprite(300, 250, 300, 470);
        this.currentAnimation.rotationLock = true;
        this.currentAnimation.friction = 10;
        this.currentAnimation.drag = 0;
        this.currentAnimation.vel.y = 0;
    }

    loadAnimation(animationType, fileNames) {
        this.currentAnimation.addAnimation(animationType, fileNames[0], ...fileNames);

    }


    drawAnimation(animationType) {

        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = .4;
        this.currentAnimation.changeAnimation(animationType);
        if (animationType == 'walk' && this.direction == 'forward') {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = 2;

        }
        else if (animationType == 'walk' && this.direction == 'reverse') {

            this.currentAnimation.mirror.x = true;
            this.currentAnimation.direction = 180;
            this.currentAnimation.speed = 2;

        }
        else if (animationType == 'walk' && this.direction == 'down') {
            this.currentAnimation.direction = 90;
            this.currentAnimation.speed = 2;

        }
        else if (animationType == 'walk' && this.direction == 'up') {
            this.currentAnimation.direction = -90;
            this.currentAnimation.speed = 2;

        }

        else if (animationType == 'walk' && this.direction == 'attack') {
            this.currentAnimation.speed = 0;
        }
        else {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        }
    }


    incrementIndex() {

        if (this.currentFrameCount % 5 == 0) {
            this.i++;
        }

        if (this.i >= this.fileNames.length) {
            this.i = 0;
        }
    }

    updatePosition(direction) {
        this.direction = direction;
        if (direction == "forward") {
            this.x += 1;
        }
        else if (direction == "reverse") {
            this.x -= 1;
        }
        else if (direction == "up") {
            this.y += 1;
        }
        else if (direction == "down") {
            this.y -= 1;
        }
        else if (direction == "attack") {
            this.x += 0;
            this.y += 0;
        }
    }

    isColliding(myImage) {
        return this.currentAnimation.collide(myImage);
    }
}