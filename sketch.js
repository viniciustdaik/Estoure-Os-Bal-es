var bow , arrow,  background, redB, pinkB, greenB ,blueB, purpleB, yellowB, orangeB ,arrowGroup, edges;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, 
purple_balloonImage, orange_balloonImage, yellow_balloonImage;
var END = 0;
var PLAY = 1;
var gamestate = PLAY;
var score = 1;
var highscore = 1;

function preload(){  
  backgroundImage = loadImage("background0_long_width&height.png");
  
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
  createCanvas(windowWidth, windowHeight);//400, 400
  
  // criar o fundo
  scene = createSprite(width/2+100, height/2);// 0, 0, 400, 400
  scene.addImage("backgroundimg", backgroundImage);
  
  // criando arco para atirar a flecha
  bow = createSprite(windowWidth-20, height/2, 20, 50);//380,220
  bow.addImage("bowimg", bowImage); 
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
  

  if (scene.x < 670){
    scene.x = scene.width/2;
  }
  
  //movendo o arco
  bow.y = World.mouseY;
  if(bow.y <40){
    bow.y = 40;
  }
  if(bow.y > windowHeight-41){//> 359
    bow.y = windowHeight-41;//359
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
  console.log("Estado De Jogo: "+gamestate);
  console.log("Aleatório: "+select_balloon);
  if(gamestate==PLAY){
    var select_balloon = Math.round(random(1,7));
     if(keyDown("space")) {
      createArrow();  
    }
  scene.velocityX = -3 
   
  
 
  
  
  //criando inimigos contínuos
  
if (World.frameCount % 100 == 0) {
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
}
  if(gamestate==END){
    textSize(20);
    fill('cyan');
    stroke('green');
    text("Clique/Toque Para Jogar De Novo!", width/2-155, height/2);
    scene.visible = false;
    bow.visible = false;
    pinkB.destroyEach();
    orangeB.destroyEach();
    redB.destroyEach();
    yellowB.destroyEach();
    blueB.destroyEach();
    purpleB.destroyEach();
    arrowGroup.destroyEach();
    greenB.destroyEach();
    scene.velocityX = 0;
    if(mousePressedOver(scene)
    ||mousePressedOver(bow)
    ||touches.length > 0){
      touches = [];
      reset();
    }
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
  stroke('green');
  text("Vidas: "+ score, 30, 50);
  text("Maior Vidas Ganhadas: "+ score, 30, 75);
  if(score==-3&&gamestate==END){
    fill('red')
    textSize(30);
    text("Fim De Jogo!", 110, 200);
  }
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 650;
  red.scale = 0.1;
  redB.add(red);
  red.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 650;
  blue.scale = 0.1;
  blueB.add(blue);
  blue.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 650;
  green.scale = 0.1;
  greenB.add(green);
  green.depth = bow.depth;
  bow.depth = bow.depth+1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 650;
  pink.scale = 1
  pinkB.add(pink);
  pink.depth = bow.depth;
  bow.depth = bow.depth+1;
}


// Criando flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = windowWidth-40;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 650;
  arrow.scale = 0.3;
  arrow.depth = bow.depth;
  bow.depth = bow.depth+1;
  arrowGroup.add(arrow);
}
function orangeBalloon() {
  var orange = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  orange.addImage(orange_balloonImage);
  orange.velocityX = 3;
  orange.lifetime = 650;
  orange.scale = 0.1;
  orange.depth = bow.depth;
  bow.depth = bow.depth+1;
  orangeB.add(orange);
}

function yellowBalloon() {
  var yellow = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  yellow.addImage(yellow_balloonImage);
  yellow.velocityX = 3;
  yellow.lifetime = 650;
  yellow.scale = 0.1;
  yellow.depth = bow.depth;
  bow.depth = bow.depth+1;
  yellowB.add(yellow);
}

function purpleBalloon() {
  var purple = createSprite(0,Math.round(random(25, windowHeight-30)), 10, 10);
  purple.addImage(purple_balloonImage);
  purple.velocityX = 3;
  purple.lifetime = 650;
  purple.scale = 0.1;
  purple.depth = bow.depth;
  bow.depth = bow.depth+1;
  purpleB.add(purple);
}

function reset(){
  scene.visible = true;
  bow.visible = true;
  gamestate = PLAY;
  if(score > highscore){
    highscore = score;
  }
  score = 1;

}
