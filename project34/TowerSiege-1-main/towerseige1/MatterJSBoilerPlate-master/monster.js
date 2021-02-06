class Monster{
    constructor(x,y,width,height){
    var options={
    density:1,
    frictionAir:0.3
    }
    this.image = loadImage("images/Monster-01.png")
    this.width=width
    this.height=height
    this.body=Bodies.rectangle(x,y,width,height,options)
    World.add(world, this.body)
    
    }
    
    display() {
        var pos=this.body.position;
      
      image(this.image,pos.x, pos.y, this.width, this.height);
    
    }
    
    }