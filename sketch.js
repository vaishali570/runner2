var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var allObstacles,obstacles;
var database,position,database;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  //diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  database=firebase.database();
  console.log(database);
  createCanvas(displayWidth,displayHeight);
// Moving background
path=createSprite(displayWidth/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(displayWidth/2,displayHeight-200,10,20);
boy.addAnimation("gameOver",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
//diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();


var boyPosition=database.ref("position")
boyPosition.on("value",readPosition)

}

function draw() {



  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    //createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    //else if (diamondsG.isTouching(boy)) {
     // diamondsG.destroyEach();
      //treasureCollection=treasureCollection+100;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(swordGroup.isTouching(boy)) {
        gameState=END;
        
        boy.changeAnimation("gameOver",endImg);
        boy.x=displayWidth/2;
        boy.y=displayHeight/2;
        boy.scale=0.6;
        
        cashG.destroyEach();
       // diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
       // diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);

if (boy.isTouching(swordGroup)){
  gameState=END;
  boy.changeAnimation("gameOver")

}

     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,displayWidth-150,30);
  }



function createCash() {
  
  
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, displayWidth-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 250;
  cashG.add(cash);
  }
}

//function createDiamonds() {
  //if (World.frameCount % 320 == 0) {
 // var diamonds = createSprite(Math.round(random(50,width-50),40, 10, 10));
  //diamonds.addImage(diamondsImg);
  //diamonds.scale=0.03;
  //diamonds.velocityY = 3;
  //diamonds.lifetime = 150;
  //diamondsG.add(diamonds);
//}
//}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, displayWidth-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 250;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, displayWidth-50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 250;
  swordGroup.add(sword);
  }
}

if (swordGroup.isTouching(boy)){
 gameState-2;
}




allObstacles[jwelleryG,cashG,diamonds,swordGroup]

play();{
  boy.getBoyInfo()
if (boy!==undefined){
  var index=0;
  var x=0
  var y;

  for (var plr in boy){
    index=index+1

    x=x+200;

    y=displayHeight-allObstacles[plr].distance;
    allObstacles[index-1].x=x;
    allObstacles[index-1].y=y;

    if (index===boy.index){
    camera.position.x=displayWidth/2;
    camera.position.y=allObstacles[index-1].y;
    }
  }
}
}

function readPosition(){
  position=data.val()
    console.log(position.x);
    boyPosition.x=position.x;
    boyPosition.y=position.y;
  
}

function writePosition(x,y){
  database.ref("position").set({
    'x':position.x+x,
    'y':position.y+y
  })
end();{
  console.log("gameEnded");
  gameState.update(2);
}

}

