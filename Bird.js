class Bird extends BaseClass{
  constructor(x,y,width,height){
  //this.body = Bodies.rectangle
  super(x,y,width,height);
  this.width = width;
  this.height = height;

  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}