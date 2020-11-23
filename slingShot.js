class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);       
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
            push();
            strokeWeight(6);
            stroke("rgb(48,22,8)");
            line(pointA.x-30,pointA.y,pointB.x+30,pointB.y-6);
            line(pointA.x-30,pointA.y,pointB.x-10,pointB.y-6);
            //image(this.sling3,pointA.x-30,pointA.y,15,15);
            pop();
        
        
    }
    
}