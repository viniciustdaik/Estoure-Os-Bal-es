var bow , arrow,  background, redB, pinkB, greenB ,blueB, purpleB, yellowB, orangeB ,arrowGroup, edges;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, 
purple_balloonImage, orange_balloonImage, yellow_balloonImage;
var END = 0;
var PLAY = 1;
var gamestate = PLAY;
var score = 0;

function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  yellow_balloonImage = loadImage("yellow_balloon.png");
  orange_balloonImage = loadImage("orange_balloon.png");
  purple_balloonImage = loadImage("purple_balloon.png");
}

function setup() {
  createCanvas(400, 400);
  
  // criar o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  yellowB = new Group();
  orangeB = new Group();
  purpleB = new Group();
  arrowGroup= new Group();  

  edges = createEdgeSprites();
}

function draw() {
 background('cyan');
  // movendo o fundo
  

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  //movendo o arco
  bow.y = World.mouseY;
  if(bow.y <40){
    bow.y = 40;
  }
  if(bow.y >359){
    bow.y = 359;
  }
  // soltar a flecha quando a tecla de espaço for pressionada
  
 
  if(redB.isTouching(edges[1])){
    score = score-1;
    redB.destroyEach();
  }
  if(blueB.isTouching(edges[1])){
    score = score-1;
    blueB.destroyEach();
  }
  if(purpleB.isTouching(edges[1])){
    score = score-1;
    purpleB.destroyEach();
  }
  if(orangeB.isTouching(edges[1])){
    score = score-1;
    orangeB.destroyEach();
  }
  if(yellowB.isTouching(edges[1])){
    score = score-1;
    yellowB.destroyEach();
  }
  if(pinkB.isTouching(edges[1])){
    score = score-1;
    pinkB.destroyEach();
  }
  if(greenB.isTouching(edges[1])){
    score = score-1;
    greenB.destroyEach();
  }
  if(score==-3){
    gamestate=END;
  }
  if(gamestate==PLAY){
    var select_balloon = Math.round(random(1,7));
     if(keyDown("space")) {
    createArrow();  
  }
  scene.velocityX = -3 
  } 
  
 
  
  console.log("Estado De Jogo: "+gamestate);
  console.log("Aleatório: "+select_balloon);
  //criando inimigos contínuos
  
if (World.frameCount % 100 == 0&&gamestate==PLAY) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if(select_balloon == 4){
      orangeBalloon();
    } else if(select_balloon == 5){
      yellowBalloon();
    } else if(select_balloon == 6){
      purpleBalloon();
    }else if(select_balloon == 7){
      pinkBalloon();
    }else{
    }
  }
  if(gamestate==END){
    pinkB.destroyEach();
    orangeB.destroyEach();
    redB.destroyEach();
    yellowB.destroyEach();
    blueB.destroyEach();
    purpleB.destroyEach();
    greenB.destroyEach();
    scene.velocityX = 0;
  }
  
  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if (arrowGroup.isTouching(purpleB)) {
    purpleB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if (arrowGroup.isTouching(yellowB)) {
    yellowB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }
  if (arrowGroup.isTouching(orangeB)) {
    orangeB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  textSize(20);
  fill('gold');
  text("Pontuação: "+ score, 230,50);
  if(score==-3&&gamestate==END){
    fill('red')
    textSize(30);
    text("Fim De Jogo!", 110, 200);
  }
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(25, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  red.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(25, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
  blue.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(25, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  green.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(25, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
  pink.depth = bow.depth;
  bow.depth = bow.depth+1;
}


// Criando flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow.depth = bow.depth;
  bow.depth = bow.depth+1;
  arrowGroup.add(arrow);
}
function orangeBalloon() {
  var orange = createSprite(0,Math.round(random(25, 370)), 10, 10);
  orange.addImage(orange_balloonImage);
  orange.velocityX = 3;
  orange.lifetime = 150;
  orange.scale = 0.1;
  orange.depth = bow.depth;
  bow.depth = bow.depth+1;
  orangeB.add(orange);
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(25, 370)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = 3;
  yellow.lifetime = 150;
  yellow.scale = 0.1;
  yellow.depth = bow.depth;
  bow.depth = bow.depth+1;
  yellowB.add(yellow);
}

function purpleBalloon() {
  var purple = createSprite(0,Math.round(random(25, 370)), 10, 10);
  purple.addImage(purple_balloonImage);
  purple.velocityX = 3;
  purple.lifetime = 150;
  purple.scale = 0.1;
  purple.depth = bow.depth;
  bow.depth = bow.depth+1;
  purpleB.add(purple);
}
