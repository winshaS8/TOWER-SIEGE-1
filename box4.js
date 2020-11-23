class box4 extends BaseClass
{
  constructor(x,y,width,height,options)
  {
    var options = 
    {
      isStatic:true
    }
      super(x,y,width,height);
      this.width = width;
      this.height = height;
    
    //  this.image = loadImage("sprites/enemy.png");
  }
  display(){
    push();       
    fill("purple");
   super.display();
    pop();
  }

}