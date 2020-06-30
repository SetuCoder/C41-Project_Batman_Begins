class Man{
    constructor(){
        var options={
            restitution: 1.0
        }

        this.man = loadImage('man.png');
        this.body = Bodies.rectangle(80,340,256,256);
        World.add(world, this.body);
    } 

    display(){ 
     var pos = this.body.position;
     image(this.man,80,340,256,256);
     var angle = this.body.angle;
     rectMode(CENTER);
     fill(255);
    }
}