class Drops{
    constructor(x,y){
       var options = {
        friction : 0.1,
        restitution : 0.1,
    }
    this.drops = Bodies.circle(x,y,5,options);
    this.radius = 5;
    World.add(world,this.drops);
}

display(){
    var pos = this.drops.position
    fill("blue");
    ellipseMode(CENTER)
    ellipse(pos.x,pos.y,this.radius,this.radius);
    }

    UpdateY(){
   if(this.drops.position.y > height){
       Matter.Body.setPosition(this.drops,{x:random(0,500),y:random(0,500)});
   }
    }
};
