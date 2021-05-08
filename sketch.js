const Engine =Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;
const Body =Matter.Body;
const Render = Matter.Render;

var maxDrops=100;
var drops=[];
var createDrop
var umbrella;
var thunder;
var thunder1,thunder2,thunder3,thunder4;
var thunderCreatedFrame;

function preload(){    
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
}

function setup(){
  createCanvas(500,700); 

  engine =Engine.create();
  world = engine.world;


  if (frameCount%150===0){
    for (var i=0;i<maxDrops;i++){
      drops.push(new Drop(random(0,500),random(0,500)));
    }
  }
  
  umbrella = new Umbrella(250,510);

}

function draw(){
   background(0); 
   Engine.update(engine);
   
  for (var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  var num = Math.round(random(1,4));
  if (frameCount % 80 === 0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,370),random(10,30),10,10);
    switch(num){
      case 1 : thunder.addImage(thunder1);
        break;
      case 2 : thunder.addImage(thunder2);
        break;
      case 3 : thunder.addImage(thunder3);
        break;
      case 4 : thunder.addImage(thunder4);
        break;
      default : break;
    }
    thunder.scale = random(0.3,0.6);
  }
  if(thunderCreatedFrame + 10 == frameCount && thunder){
    thunder.destroy();
  }

  umbrella.display();
  drawSprites();
}   

