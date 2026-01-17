var fightbutton, fightbutton_image;
var bosshealth = 500;
var restartbutton,restartbutton_image;
var healing, healing_image;
var obstacle;
var gamestate = "wait";
var invisible_floor;
var floor;
var hp = 100;
var score = 0;
var player, player_image,player_lost;
var boss, boss_images, bosstired_image, bossdefeated_image,bosstart_images;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var playbutton,playbutton_image;
var creditbutton, creditbutton_image;
var backbutton, backbutton_image;
var settingbutton, settingbutton_image;
var debugbutton, debugbutton_image;
var turndebugoff,turndebugoff_image;



function preload(){
player_image = loadImage("player.png",);
player_lost = loadImage("playerlost.png");
boss_images = loadAnimation("boss1.png","boss2.png");
bosstired_image = loadImage("bosstired.png");
bosstart_images = loadAnimation("bosstart1.png","bosstart2.png");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadImage("obstacle4.png");
obstacle5 = loadImage("obstacle5.png");
restartbutton_image = loadImage("restartbutton.png");
healing_image = loadImage("healing.png");
bg = loadImage("bg.png");
fightbutton_image = loadImage("fightbutton.png");
bossdefeated_image = loadImage("bossdefeated.png");
playbutton_image = loadImage("playbutton.png");
creditbutton_image = loadImage("credits.png");
backbutton_image = loadImage("backbutton.png");
settingbutton_image = loadImage("settingbutton.png");
debugbutton_image = loadImage("debugbutton.png");
turndebugoff_image = loadImage("turndebugoffbutton.png");


}


function setup(){
createCanvas(1600,720);
player = createSprite(800,500);
player.addImage("normal",player_image);
player.addImage("lost",player_lost);
player.scale = 0.5;
invisible_floor = createSprite(800,730,1600,10);
invisible_floor.visible = false;
floor = createSprite(800,700,1600,40);
floor.shapeColor = "orange";
restartbutton = createSprite(600,600);
restartbutton.addImage("restart",restartbutton_image);
restartbutton.scale = 0.5;
restartbutton.visible = false;


debugbutton = createSprite(500,480);
 debugbutton.addImage("debug",debugbutton_image);
  debugbutton.scale = 0.5
  debugbutton.visible = false;



settingbutton = createSprite(810, 480);
settingbutton.addImage("setting",settingbutton_image);
settingbutton.scale = 0.5;
settingbutton.visible = false;

turndebugoff = createSprite(500, 550);
turndebugoff.addImage("turndebugoff",turndebugoff_image);
turndebugoff.scale = 0.5;
turndebugoff.visible = false;

fightbutton = createSprite(600,500);
fightbutton.addImage("fight",fightbutton_image);
fightbutton.scale = 0.5;
fightbutton.visible = false;

playbutton = createSprite(800,400);
playbutton.addImage("play",playbutton_image);
playbutton.scale = 0.5; 
playbutton.visible = false;

backbutton = createSprite(600,650);
backbutton.addImage("back",backbutton_image);
backbutton.scale = 0.5;
backbutton.visible = false;

creditbutton = createSprite(800, 550);
creditbutton.addImage("credit",creditbutton_image);
creditbutton.scale = 0.5;
creditbutton.visible = false;

boss = createSprite(850,200);
boss.addAnimation("lockedin",boss_images);
boss.scale = 1.5;
boss.addImage("tired",bosstired_image);
boss.addImage("defeated",bossdefeated_image);
boss.addAnimation("waiting",bosstart_images);
obstacles = new Group();
healing = new Group();



}








function draw(){
background(bg);

bossHP();
boss.depth = player.depth - 1;
if(mousePressedOver(debugbutton) && debugbutton.visible == true){
        obstacles.forEach(o => o.debug = true)

     boss.debug = true;
     player.debug = true;
     playbutton.debug = true;
     creditbutton.debug = true;
     backbutton.debug = true;
     settingbutton.debug = true;
     debugbutton.debug = true;
     restartbutton.debug = true;
     fightbutton.debug = true;
     debugbutton.debug = true;
        turndebugoff.debug = true;


    }

    if(mousePressedOver(turndebugoff) && turndebugoff.visible == true){
        obstacles.forEach(o => o.debug = false)

        boss.debug = false;
        player.debug = false;
        playbutton.debug = false;
        creditbutton.debug = false;
        backbutton.debug = false;
        settingbutton.debug = false;
        debugbutton.debug = false;
        restartbutton.debug = false;
        fightbutton.debug = false;
        debugbutton.debug = false;
        turndebugoff.debug = false;
    }


// settings state
if(gamestate == "settings"){
    boss.visible = false;
    debugbutton.visible = true;
    turndebugoff.visible = true;
    if(mouseIsOver(turndebugoff)){
        turndebugoff.scale = 0.6;
    }
    else{
        turndebugoff.scale = 0.5;
    }

     if(mouseIsOver(debugbutton)){
        debugbutton.scale = 0.6;
    } else{
        debugbutton.scale = 0.5;
    }
    
    textSize(40);
    fill("purple");
    text("settings",750,100);
    playbutton.visible = false;
    creditbutton.visible = false;
    settingbutton.visible = false;
    textSize(30);
    fill("green");
    text("what do you want to adjust?",600,400);
    text("more options coming soon!",600,450);
    backbutton.visible = true;

    if(mousePressedOver(backbutton)){
        gamestate = "wait";
        backbutton.visible = false;
        boss.visible = true;
    }
    if(mouseIsOver(backbutton)){
        backbutton.scale = 0.6;
    }
        else{
            backbutton.scale = 0.5;
            
        }
    


    }







// credit state
if(gamestate == "credit"){
    textSize(30);
    fill("blue");
    text("game created by: yousef, aka yousafz.123",600,400);
    text("art created by: yousef, aka yousafz.123,yep me again",600,450);
    text("thank you for playing my game!!!",600,500);
    text("and thanks to p5.js for making this possible",600,550);
    creditbutton.visible = false;
    playbutton.visible = false;
    boss.visible = false;
    backbutton.visible = true;
    settingbutton.visible = false;
    debugbutton.visible = false;
    turndebugoff.visible = false;
    if(mouseIsOver(backbutton)){
        backbutton.scale = 0.6;
    }
    else{
        backbutton.scale = 0.5;
    }
    if(mousePressedOver(backbutton)){
        gamestate = "wait";
        backbutton.visible = false;
        boss.visible = true;
    }
    
}







// wait state
if(gamestate == "wait"){
    restartbutton.visible = false;
    settingbutton.visible = true;
        debugbutton.visible = false;
        turndebugoff.visible = false;
    boss.changeImage("lockedin",boss_images);
    textSize(40);
    fill("purple");
    text("the void boss fight game",600,650);
    score = 0;
    hp = 100;
    bosshealth = 500;
    boss.changeAnimation("waiting",bosstart_images);
    boss.scale = 1
    boss.y = 150
    player.changeImage("normal",player_image);

textSize(30);
fill("orange");
text("wait for perfect moment to strike and survive if you even can", 450,350);
player.visible = false;
playbutton.visible = true;
creditbutton.visible = true;
if(mouseIsOver(creditbutton)){
    creditbutton.scale = 0.6;
} else{
    creditbutton.scale = 0.5;
}
if(mousePressedOver(creditbutton)){
    gamestate = "credit";
    creditbutton.visible = false;
}

if(mouseIsOver(playbutton)){
    playbutton.scale = 0.6;
} else{
    playbutton.scale = 0.5;

}
if(mousePressedOver(playbutton)){
    gamestate = "play";
    playbutton.visible = false;
    player.visible = true;
    player.x = 800;
    player.y = 500;

}

if(mousePressedOver(settingbutton)){
    gamestate = "settings";
    settingbutton.visible = false;


}


if(mouseIsOver(settingbutton)){
    settingbutton.scale = 0.6;
} else {
    settingbutton.scale = 0.5;

}

}


if(gamestate == "play"){
boss.changeAnimation("lockedin",boss_images);
    textSize(25);
    fill("white");
    text("press space to jump and use arrow keys to move left or right", 400,600);

    score+= 1;
    player.velocityY += 0.8;
    creditbutton.visible = false;

    // if boss loses all health
    if(bosshealth == 0 || bosshealth < 0){
        gamestate = "victory";
    }
settingbutton.visible = false;

if(score > 500 && score < 650){
    textSize(30);
    fill("red");
    text("boss: alright kid your actually pretty good...",600,500);
}
if(score > 1000 && score < 1150){
    textSize(30);
    fill("red");
    text("boss: you think you can defeat me that easily?",600,500);
}







 if(score > 1500 && score < 1650){
    textSize(30);
    fill("red");
    text("boss: alright your getting in my nerves now...",600,500);

    // spawn your funcions here 
    


 }
if(score === 500){
    gamestate = "fight";
}
 if(score === 1000){
    gamestate = "fight";
 }
 if(score === 2000){
    gamestate = "fight";
 }
 if(score === 3000){
    gamestate = "fight";
 }

 if(score === 4000){
    gamestate = "fight";
 }

 if(score === 5000){
    gamestate = "fight";
 }

    if(score === 6000){
    gamestate = "fight";
 }
    if(score === 7000){
    gamestate = "fight";
 }
    if(score === 8000){
    gamestate = "fight";
 }
    if(score === 9000){
    gamestate = "fight";
 }



if(hp == 0){
    gamestate = "lost";
    player.changeImage("lost",player_lost);
}



 if(score > 2300 && score < 2450){
    textSize(30);
    fill("red");
    text("boss: I will defeat you once and for all!",600,500);
 }

if(score > 4500 && score < 4560){
    textSize(30);
    fill("red");
    text("i feel tired.....",600,500);
}


if(score > 9700  && score < 9850){
    textSize(30);
    fill("red");
    text("boss: nooo! how could a mere human defeat me...",600,500);
}

 if(score > 2300){
    spawn_obstacle5();
 }
    if(score > 1000){
        spawn_obstacle4();
    }



 if(score > 1650){
    spawn_obstacle3();
 } 
 
if(keyDown("RIGHT_ARROW") && player.x < 1550){
    player.x += 15;
}
if(keyDown("LEFT_ARROW") && player.x > 50){
    player.x -= 15;
}

if(keyDown("SPACE") && player.y >= 600){
    player.velocityY = -20;
}

spawn_obstacle1();
spawn_obstacle2();
if(score > 675){
    spawn_healing_item();
}
maxHP();

}



player.setCollider("rectangle",0,0,200,175);




// player colliding with floor
player.collide(invisible_floor);


textSize(20);
fill("red");
text("player HP: " + hp, 50,50);
text("Score: " + score, 1400,50);

player.overlap(obstacles, function(player,obstacle1_attack){
    hp -= 5;
    obstacle1_attack.remove();

})
player.overlap(healing, function(player,healing_item){
    
    hp += 10;
    healing_item.remove();
});

// lost state

if(gamestate == "lost"){
    obstacles.destroyEach();
    healing.destroyEach();
    player.x = 800 
    player.y = 500;
    textSize(50);
    fill("black");
    text("you lost the game!!!, restart?",600,400);
    restartbutton.visible = true;
    if(mousePressedOver(restartbutton)){
        gamestate = "play";
        hp = 100;
        bosshealth = 500;
        score = 0;
        player.x = 800;
        player.y = 500;
        player.changeImage("normal",player_image);
        restartbutton.visible = false;
        
    }
    if(mouseIsOver(restartbutton)){
    restartbutton.scale = 0.6;
}
    else{
    restartbutton.scale = 0.5;
    }


    if(mouseIsOver(backbutton)){
        backbutton.scale = 0.6;
    }   else{
        backbutton.scale = 0.5;

    }


    backbutton.visible = true;
    if(mousePressedOver(backbutton)){
        gamestate = "wait"
        backbutton.visible = false;
        boss.visible = true;
    }
    if(backbutton.visible = true &&  gamestate == "lost"){
        backbutton.x = 1000;
        backbutton.y = 600;
    }
    maxHP();
}   




// fight state

if(gamestate == "fight"){
    fightboss();
    obstacles.destroyEach();
    healing.destroyEach();
    
    boss.changeImage("tired");
    player.x = 800 
    player.y = 500;

    if(mouseIsOver(fightbutton)){
    fightbutton.scale = 0.6;
} else{
    fightbutton.scale = 0.5;
}

}









// victory state

if(gamestate == "victory"){
    textSize(50);
    fill("black");
    text("you defeated the boss!!!",600,400);
    player.x = 800 
    player.y = 500;
    restartbutton.visible = true;
    boss.changeImage("defeated");
    if(mousePressedOver(restartbutton)){
        gamestate = "play";
        hp = 100;
        bosshealth = 500;
        player.x = 800;
        player.y = 500;

        score = 0;
        restartbutton.visible = false;
    }
    if(mouseIsOver(restartbutton)){
    restartbutton.scale = 0.6;
} else{
    restartbutton.scale = 0.5;
}

backbutton.visible = true;
if(mousePressedOver(backbutton)){ 
    gamestate = "wait";
    backbutton.visible = false;
    boss.visible = true;
    boss.changeAnimation("normal",boss_images);

}
if(backbutton.visible = true &&  gamestate == "victory"){
    backbutton.x = 1000;
    backbutton.y = 600;
}
if(mouseIsOver(backbutton)){
    backbutton.scale = 0.6;
} else{
    backbutton.scale = 0.5;
}

}




















drawSprites();

















}








function spawn_obstacle1(){
remainder = frameCount % 15;
if(remainder == 0){
    var obstacle1_attack = createSprite(random(50,1550), -50);
    obstacle1_attack.velocityY = 15;
    obstacle1_attack.addImage("obstacle1",obstacle1);
    obstacle1_attack.scale = 0.3;
    obstacle1_attack.lifetime = 200;
    obstacles.add(obstacle1_attack);
    
    obstacle1_attack.setCollider("rectangle",0,0,50,50);
}

}





function spawn_obstacle2(){
    remainder = frameCount % 100;
    if(remainder == 0){
        var obstacle2_attack = createSprite(1700,600);
        obstacle2_attack.velocityX = -random(10,20);
        obstacle2_attack.addImage("obstacle2",obstacle2);
        obstacle2_attack.scale = 0.7;
        obstacle2_attack.lifetime = 200;
        obstacles.add(obstacle2_attack);
        
        obstacle2_attack.setCollider("rectangle",0,0,150,150);

    }






}


function spawn_obstacle3(){
    remainder = frameCount % 150;
    if(remainder == 0){
        var obstacle3_attack = createSprite(random(50,1550), 50);
        obstacle3_attack.velocityY = 10;
        obstacle3_attack.addImage("obstacle3",obstacle3);
        obstacle3_attack.scale = 2;
        obstacle3_attack.lifetime = 200;
        obstacles.add(obstacle3_attack); 
        
        obstacle3_attack.setCollider("rectangle",0,0,100,400);
       }
}


function spawn_obstacle4(){
    remainder = frameCount % 65;
    if(remainder == 0){
        var obstacle4_attack = createSprite(random(50,1550),800);
        obstacle4_attack.velocityY = -12;
        obstacle4_attack.addImage("obstacle4",obstacle4);
        obstacle4_attack.scale = 0.2
        obstacle4_attack.lifetime = 200;
        obstacles.add(obstacle4_attack);
        

    }
}

function spawn_obstacle5(){
    remainder = frameCount % 75;
    if(remainder == 0){
        var obstacle5_attack = createSprite(-100,600);
        obstacle5_attack.velocityX = random(10,20);
        obstacle5_attack.addImage("obstacle5",obstacle5);
        obstacle5_attack.scale = 0.7
        obstacle5_attack.lifetime = 200;
        obstacles.add(obstacle5_attack);
        
        obstacle5_attack.setCollider("rectangle",0,0,200,150);
    }

}


function spawn_healing_item(){
    remainder = frameCount % 450;
    if(remainder == 0){
        var healing_item = createSprite(random(50,1550), -50);
        healing_item.velocityY = 10;
        healing_item.addImage("healing",healing_image);
        healing_item.scale = 0.3;
        healing_item.lifetime = 200;
        healing.add(healing_item);
        healing_item.setCollider("rectangle",0,0,50,50);
        
    }
}

function maxHP(){
    if(hp > 100){
        hp = 100;
    }
    if(hp < 0){
        hp = 0;
    }
}



function bossHP(){
    rect(500,20,500,20);
    fill("red");
    rect(500,20,bosshealth,20);
    
    

}

function fightboss(){
    textSize(30);
    fill("purple");
    text("fight the boss here!",600,400);
    fightbutton.visible = true;
    if(mousePressedOver(fightbutton)){
        bosshealth -= 50;
        fightbutton.visible = false;
        gamestate = "play";


    }
    
}