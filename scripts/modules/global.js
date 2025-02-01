import { gameSpeed } from "./gameSpeed.js";

const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.playerObject = {};
global.backgroundShift = 0;
global.backgroundMaxShift = 0;
global.gravityForce = 9.81;
global.pixelToMeter = 140;
global.leftMoveTrigger;
global.rightMoveTrigger;
global.MaxXVelocity = 2120;
global.Score = 100;
global.gamestate = "startscreen";
global.blade;
global.cooldown = "up";
global.Jona ={};

//get boxbounds for collision
global.getCanvasBounds = function () {
  let bounds = {
    left: 0,
    right: this.canvas.width,
    top: 0,
    bottom: this.canvas.height,
  };
  return bounds;
};
//collisioncheck 
global.checkCollisionWithAnyOther = function (givenObject) {
  for (let i = givenObject.index; i < global.allGameObjects.length; i++) {
    let otherObject = global.allGameObjects[i];
    if (otherObject.active == true) {
      let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
      if (collisionHappened) {
        givenObject.reactToCollision(otherObject);
        otherObject.reactToCollision(givenObject);
      }
    }
  }
};

//game over function which gets triggered on collsion with obstacles
global.gameover = function () {
  global.gamestate = "gameover";
  console.log(global.gamestate);
  document.getElementById("gameContainer").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("Lost-screen").style.display = "";
  document.getElementById("score").innerHTML = "Your Score was: " + global.Score;
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameSpeed.score();
  gameSpeed.speed();
  //global.allGameObjects.active = false;
  //console.log("died by ");
  cancelAnimationFrame(global.animationcancel);
};


global.detectBoxCollision = function (gameObject1, gameObject2) {
  let box1 = gameObject1.getBoxBounds();
  let box2 = gameObject2.getBoxBounds();
  if (gameObject1 != gameObject2) {
    if (
      box1.top <= box2.bottom &&
      box1.left <= box2.right &&
      box1.bottom >= box2.top &&
      box1.right >= box2.left
    ) {
      return true;
    }
  }
  return false;
};


export { global };
