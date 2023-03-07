class Rectangle
{
  
  constructor(x,y,w,h,c)
  {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // this.c should be array with 3 numeric rgb values
    this.c = c;
  }
  
  getX()
  {
    return this.x;
  }
  getY()
  {
    return this.y;
  }
  getW()
  {
    return this.w;
  }
  getH()
  {
    return this.h;
  }
  
  draw()
  {
    rect(this.x, this.y, this.w, this.h, this.c);
  }
}
