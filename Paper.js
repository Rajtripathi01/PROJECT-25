class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
       }
        this.body=Bodies.circle(x,y,radius,options)
         this.radius=radius
         this.image=loadImage("paper.png")

         World.add(world,this.body)

    }   
 display(){
     push()
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle)
 ellipseMode(RADIUS);
 fill (255)


  
 imageMode(CENTER)

image(this.image,0,0,40,40)
pop()


}




    
}
















