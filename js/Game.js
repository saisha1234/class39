class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){ 
    if(gameState ===0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value");
      if(playerCountRef.exists){
       playerCount=playerCountRef.val();
       player.getCount();
      }
        form = new Form();
      form.display();

  
    }

    car1=createSprite(100,200);
    car1.addImage(car1Img);
    car2=createSprite(300,200);
    car2.addImage(car2Img);
    car3=createSprite(500,200);
    car3.addImage(car3Img);
    car4=createSprite(700,200);
    car4.addImage(car4Img);
    cars=[car1,car2,car3,car4];
  }

  play(){
   form.hide();

   Player.getPlayerInfo();
  
   if(allPlayers!== undefined){
   image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
  var index=0; 
    var x=200;
  var y;

  for (var plr in allPlayers){
  index=index+1 
  x=x+200;
  y=displayHeight-allPlayers[plr].distance;
  cars[index-1].x=x;
  cars[index-1].y=y;

  if(index===player.index){
   camera .position.x = displayWidth/2;
   camera . position.y=y; 
   cars[index-1].shapeColor="red";
   fill("green");
  ellipse(x,y,60,60);
  }
  }

 
  }

  if(keyIsDown(UP_ARROW)&& player.index!== null ){
    player.distance=player.distance+10;
       player.update();
  }    

  console.log(player.distance);

  if(player.distance>4120){
  gameState=2;
  player.rank=player.rank+1
   player.updateRank(player.rank);
      textSize(18);
      fill("blue");
      text("your rank is : "+ player.rank,displayWidth/2,y-220);
  }

  
  drawSprites();

  }

  }
  

