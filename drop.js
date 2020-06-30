class Drop{
    constructor(){
        var options={
            restitution: 1.0
        }

        this.drop = loadImage('raindrop.png');
        this.body = Bodies.rectangle(random(0,400), random(0,600), random(0,400), random(0,3), random(10,15));
        this.w = random(2,4);
        this.h = random(10,40);

        this.color = color;
        Matter.Body.setVelocity(this.body, {x:0, y:20});
        World.add(world, this.body);
    } 

    display(){ 
     var pos = this.body.position;
     image(this.drop,pos.x,pos.y,15,20);
     var angle = this.body.angle;

     if(pos.y>600){
         pos.y = 600-pos.y;
         Matter.Body.setVelocity(this.body,{x: 0, y: 20});
     }
     rectMode(CENTER);
     fill(255);
    }
}