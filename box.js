class box{

    constructor(x,y,width,height,){
    
    var options={
        friction:0.3,
    isStatic:false,
    density:0.3,
    restitution:0
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    }
    
    display(){
    
    var pos=this.body.position
    push();
    rectMode(CENTER)
    fill("pink")
    
    rect(pos.x,pos.y,this.width,this.height)
    pop();
    
    
    
    }
    }