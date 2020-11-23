class box1 extends BaseClass
{
  constructor(x,y,width,height,options)
  {
    var options = 
    {
     // isStatic:true
    }
      super(x,y,width,height);
      this.width = width;
      this.height = height;
    
    //  this.image = loadImage("sprites/enemy.png");
  }
  display(){
    push();       
    fill("pink");
   super.display();
    pop();
  }

}