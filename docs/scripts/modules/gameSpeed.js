import { Jona } from "../gameObjects/Jona.js";
import { global } from "./global.js";

const gameSpeed = {};


// functions for the invcrease of the game speed, 
gameSpeed.increaseGameSpeed = function () {
  let speed = (global.Jona.xVelocity *= 1.3);
  if (global.Jona.xVelocity >= global.MaxXVelocity) {
    global.Jona.xVelocity = global.MaxXVelocity;
  }
};
gameSpeed.speed = function () {
  var speedUp = null;
  var speedUp = setInterval(gameSpeed.increaseGameSpeed, 5000);
  if (global.gamestate == "gameover") {
    clearInterval(speedUp);
    return;
  }
};

//function for the increase of the Score 
gameSpeed.pointCount = function () {
  let points = (global.Score += 1);
  console.log(global.Score);
};
gameSpeed.score = function () {
  var pointsUp = setInterval(gameSpeed.pointCount,100);
  if (global.gamestate == "gameover") {
    console.log("Final score " + global.Score);
    clearInterval(pointsUp);
    return;
  }
};


export { gameSpeed };
