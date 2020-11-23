class Log extends BaseClass
{
  constructor(x,y,width,height,angle)
  {
    var options =
    {
      "isStatic":true
    }
       super(x,y,width,height,angle,options);
     //  this.image = loadImage("sprites/wood2.png");
       Matter.Body.setAngle(this.body,angle);
  }
}