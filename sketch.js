var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImage;
var rand;
var obstaculos, obstaculos1, obstaculos2, obstaculos3, obstaculos4, obstaculos5, obstaculos6;
var estadoJogo = Jogar;
var Jogar = 1;
var encerrar = 0;
var score;


function preload() {
  trex_running = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png");
  obstaculos1 = loadImage("obstacle1.png")
  obstaculos2 = loadImage("obstacle2.png");
  obstaculos3 = loadImage("obstacle3.png");
  obstaculos4 = loadImage("obstacle4.png");
  obstaculos5 = loadImage("obstacle5.png");
  obstaculos6 = loadImage("obstacle6.png");
  cloudImage = loadImage("cloud.png");

}

function setup() {

  createCanvas(600, 200)

  //crie um sprite de trex
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //crie sprite ground (solo)
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;
  ground.velocityX = -4;
  ground.depth = trex.depth - 1;


  //crie um solo invisível
  invisibleGround = createSprite(200, 190, 400, 10);
  invisibleGround.visible = false;




}

function draw() {
  //definir cor do plano de fundo

  background(180);
  if (estadoJogo === Jogar) {
    console.log(trex.x);
  }
  // pulando o trex ao pressionar a tecla de espaço
  /*if (keyDown("space") && trex.y >= 140) {
    trex.velocityY = -13;
  }
 
 trex.velocityY = trex.velocityY + 0.8*/

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  //impedir que o trex caia
  trex.collide(invisibleGround);

  //Gerar Nuvens
  gerarnuvens();
  obstaculo();
  drawSprites();

  if (estadoJogo === encerrar) {
    if (keyDown("space") && trex.y >= 140) {
      trex.velocityY = 0;
    }

    trex.velocityY = trex.velocityY + 0.8

    if (ground.x < 0) {
      ground.x = ground.width / 0;
    }
  }


}

//função para gerar as nuvens

function gerarnuvens() {
  if (frameCount % 60 === 0) {
    cloud = createSprite(600, 190, 30, 10);
    cloud.y = Math.round(random(10, 100));
    cloud.velocityX = -3;
    cloud.addImage("cloud", cloudImage);
    cloud.scale = 0.5;
    cloud.lifetime = 190;
    cloud.depth = trex.depth - 1;
  }
}

function obstaculo() {
  if (frameCount % 60 === 0) {
    obstaculos = createSprite(600, 170, 10, 30);
    obstaculos.velocityX = -4;
    var aleatorio = Math.round(random(1, 6));
    switch (aleatorio) {
      case 1: obstaculos.addImage(obstaculos1);
        break;
      case 2: obstaculos.addImage(obstaculos2);
        break;
      case 3: obstaculos.addImage(obstaculos3);
        break;
      case 4: obstaculos.addImage(obstaculos4);
        break;
      case 5: obstaculos.addImage(obstaculos5);
        break;
      case 6: obstaculos.addImage(obstaculos6);
        break;
      default: break;
    }
    obstaculos.scale = 0.5;
    obstaculos.lifetime = 190;
  }
}



