const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var thunder, thunderbolt1, thunderbolt2, thunderbolt3, thunderbolt4;
var drops = [];
var maxDrops = 100;
var rand;
var thunderCreatedFrame = 0;

function preload(){
    thunderbolt1 = loadImage("images/thunderbolt/1.png"); 
    thunderbolt2 = loadImage("images/thunderbolt/2.png"); 
    thunderbolt3 = loadImage("images/thunderbolt/3.png"); 
    thunderbolt4 = loadImage("images/thunderbolt/4.png"); 
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(500,800);
    umbrella = new Umbrella(250,500);
    if(frameCount%150===0){
        for(var i = 0; i < maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }

}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,30), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunderbolt1);
            break;
            case 2: thunder.addImage(thunderbolt2);
            break;
            case 3: thunder.addImage(thunderbolt3);
            break;
            case 4: thunder.addImage(thunderbolt4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if (thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
    for(var i = 0; i < maxDrops ; i++){
        drops[i].display();
        drops[i].UpdateY();
    }
    drawSprites();
}