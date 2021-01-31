var miner;
var stoneImage, goldImage, diamondImage, ironImage, woodImage,coalImage,redstoneImage,lapisImage,bgImage, mouseClicks = [];
var spritesGroup;



function preload() {
  stoneImage = loadAnimation("Images/Stone 2d.jpg");
  goldImage = loadAnimation("Images/gold.png");
  diamondImage = loadAnimation("Images/Diamond.png");
  ironImage = loadAnimation("Images/iron ore.png");
  coalImage = loadAnimation("Images/Coal.png");
  woodImage = loadAnimation("Images/Wood.jpg");
  redstoneImage = loadAnimation("Images/Redstone.png");
  lapisImage = loadAnimation("Images/Lapis.png");
  bgImage=loadImage("Images/BG.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight - 50);
  

  spritesGroup = new Group();

  miner = createSprite(width/2, height/2, 50, 50);
  miner.shapeColor = "lime";

  createStones();
  removeOverlappingSprites();

  

  // mouseEventsForSprites();
}

function draw() {
  background(bgImage);  

  moveTheMiner();

  drawSprites();
  
  // mining();
}

var mouseOutFunction = (block) => {
  console.log("here ");
  block.mouseClicks = 0;
};

var mousePressedFunction = (block) => {
  var type = block.getAnimationLabel();
  var clickNeeded = clicks(type);
  console.log(type + " " + clickNeeded);
  block.mouseClicks++;
  console.log(block.mouseClicks);
  
  if (clickNeeded === block.mouseClicks ) {
   
    console.log("mined");
    block.destroy();
    
  }
  
};

// function mouseEventsForSprites() {
//   for(var i = 0; i < spritesGroup.length; i++) {
//     var block = spritesGroup.get(i);
    
//   }
// }

function removeOverlappingSprites () {
  for(var i = 0; i < spritesGroup.length; i++) {
    var sprite = spritesGroup.get(i);
    for(var j = i+1; j < spritesGroup.length; j++ ) {
      var otherSprite = spritesGroup.get(j);
      if(sprite.isTouching(otherSprite)) {
        otherSprite.destroy();
      }
    }
  }
}

function createStones() {
  var numOfStones = Math.round(random(35, 40));
  for(var i = 0; i < numOfStones; i++) {
    var stone = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    stone.addAnimation("stone", stoneImage);
    stone.scale = 0.2;
    // stone.mouseActive = true;
    stone.mouseClicks = 0;
    stone.onMouseOut = () => {mouseOutFunction(stone);}
    stone.onMousePressed = () => {mousePressedFunction(stone);}
    spritesGroup.add(stone)
  }

  for(var i = 0; i < numOfStones/2; i++) {
    var gold = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    gold.addAnimation("gold", goldImage);
    gold.scale = 0.2;
    // gold.mouseActive = true;
    gold.mouseClicks = 0;
    gold.onMouseOut = () => {mouseOutFunction(gold);}
    gold.onMousePressed = () => {mousePressedFunction(gold);}
    spritesGroup.add(gold);
  }

  for(var i = 0; i < numOfStones/5; i++) {
    var diamond = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    diamond.addAnimation("diamond", diamondImage);
    diamond.scale = 0.2;
    // diamond.mouseActive = true;
    diamond.mouseClicks = 0;
    diamond.onMouseOut = () => {mouseOutFunction(diamond);}
    diamond.onMousePressed = () => {mousePressedFunction(diamond);}
    spritesGroup.add(diamond);
  }
  for(var i = 0; i < numOfStones - 10; i++) {
    var iron = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    iron.addAnimation("iron", ironImage);
    iron.scale = 0.2;
    // iron.mouseActive = true;
    iron.mouseClicks = 0;
    iron.onMouseOut = () => {mouseOutFunction(iron);}
    iron.onMousePressed = () => {mousePressedFunction(iron);}
    spritesGroup.add(iron);
  }
  for(var i = 0; i < numOfStones + 15; i++) {
    var coal = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    coal.addAnimation("coal", coalImage);
    coal.scale = 0.2;
    // coal.mouseActive = true;
    coal.mouseClicks = 0;
    coal.onMouseOut = () => {mouseOutFunction(coal);}
    coal.onMousePressed = () => {mousePressedFunction(coal);}
    spritesGroup.add(coal);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var wood = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    wood.addAnimation("wood", woodImage);
    wood.scale = 0.2;
    // wood.mouseActive = true;
    wood.mouseClicks = 0;
    wood.onMouseOut = () => {mouseOutFunction(wood);}
    wood.onMousePressed = () => {mousePressedFunction(wood);}
    spritesGroup.add(wood);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var lapis = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    lapis.addAnimation("lapis", lapisImage);
    lapis.scale = 0.2;
    // lapis.mouseActive = true;
    lapis.mouseClicks = 0;
    lapis.onMouseOut = () => {mouseOutFunction(lapis);}
    lapis.onMousePressed = () => {mousePressedFunction(lapis);}
    spritesGroup.add(lapis);
  }
  for(var i = 0; i < numOfStones - 5; i++) {
    var Redstone = createSprite(random(50, windowWidth - 100), random(50, windowWidth - 100), 30,30);
    Redstone.addAnimation("redStone", redstoneImage);
    Redstone.scale = 0.2;
    // Redstone.mouseActive = true;
    Redstone.mouseClicks = 0;
    Redstone.onMouseOut = () => {mouseOutFunction(Redstone);}
    Redstone.onMousePressed = () => { mousePressedFunction(Redstone);}
    spritesGroup.add(Redstone);
  }

}

function moveTheMiner() {
  if(keyDown("w")) {
    miner.y = miner.y - 5;
  }
  if(keyDown("a")) {
    miner.x = miner.x - 5;
  }
  if(keyDown("s")) {
    miner.y = miner.y + 5;
  }
  if(keyDown("d")) {
    miner.x = miner.x + 5;
  }
}

// function mouseClicked() {
//   console.log("Mouse is pressed");
//   mining();
// }

function mining(){  
  for (var i = 0; i < spritesGroup.length; i++){
    var block = spritesGroup.get(i);
    console.log("Index : " + i + " " + mousePressedOver(block));
    // if(block.mouseIsOver && mousePressedOver(block)) {
    //   // block.mouseIsPressed = false;
    //   block.mouseUpdate();
    //   // console.log(block.mouseIsPressed);
    //   var type =  block.getAnimationLabel();
    //   console.log("mouse pressed over " + type);
    //   mouseClicks[i]++;
    //   console.log("Index  : " + i + " is clicked " + mouseClicks[i] + " times");
      
    // }
  }

  
    // mouseClicks[i]=0
    
//  var type =  block.getAnimationLabel();
//  var clickNeeded = clicks(type);
//  console.log("clickNeeded"+ clickNeeded)

//  if(mousePressedOver(block)) {
//   console.log("mouse pressed over a " + type)
//  }
//  if(miner.isTouching(block)){
//    if(mousePressedOver(block)){
//      mouseClicks[i]++
//    }
//    console.log(mouseClicks[i]+" "+ i)
//    if(actualMouseClicks === clickNeeded){
//      console.log("mined")
//    }
//  }
//  else
//  actualMouseClicks = 0

  
}

function clicks(typeofStoneHit)
{
 switch(typeofStoneHit){
   case "stone" : return 2;
   case "wood" : return 2;
   case "coal" : return 3;
   case "iron" : return 3;
   case "lapis" : return 3;
   case "redStone" : return 3;
   case "gold" : return 4;
   case "diamond" : return 5;

 }
}