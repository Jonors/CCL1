import { global } from "./global.js";
import { Jona } from "../gameObjects/Jona.js";
import { Floor } from "../gameObjects/floor.js";
import { MoveTrigger } from "../gameObjects/moveTrigger.js";
import { obstacleGeneration } from "./ObstacleGeneration.js";
import { Assets } from "../gameObjects/Obstacles.js";
import { gameSpeed } from "./gameSpeed.js";
import { Background } from "../gameObjects/background.js";
import { JonaUpper } from "../gameObjects/JonaUpper.js";
import { Blade } from "../gameObjects/blade.js";
import { Tutorial } from "../gameObjects/Tutorial.js";

function gameLoop(totalRunningTime) {
  global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
  global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
  global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
  global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output
  for (var i = 0; i < global.allGameObjects.length; i++) {
    //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
    if (global.allGameObjects[i].active == true) {
      if (global.gamestate == "gameover") {
        // gameSpeed.score();
        // gameSpeed.speed();
        return;
      }
      global.allGameObjects[i].storePositionOfPreviousFrame();
      global.allGameObjects[i].update();
      global.allGameObjects[i].applyGravity();
      global.checkCollisionWithAnyOther(global.allGameObjects[i]);
      global.allGameObjects[i].draw();

      // if ((global.gamestate = "gameover")) {
      //   clearInterval(gameSpeed);
      //   clearInterval(obstacleGeneration);
      //   return;
      // }
    }
  }
  requestAnimationFrame(gameLoop); // This keeps the gameLoop running indefinitely
}

function setupGame() {
  global.gamestate = "ready";
  new Floor(0, 465, 3000, 20);
  //new Floor(170,385,100,1)
  //Setting a timeout due to loading isseues and the character being loaded behind the background image for some reason
  setTimeout(() => {
    global.Jona = new Jona(40, 282, 150, 140);
    global.JonaUpper = new JonaUpper(0, 0, 150, 140);
    //creating a Blade which can be Toggled
    global.blade = new Blade();
    global.blade.active = false;
    new Tutorial (1500, 50,500,400);
  }, 2000);
  //Left move trigger is used to deactivated the passing objects and count points
  global.leftMoveTrigger = new MoveTrigger(-200, 0, 1, 500);
  

  requestAnimationFrame(gameLoop);
//   console.log(global.allGameObjects);
//   console.log(global.gamestate);
}


//Eventlistener to toggled between gamestates 
document.addEventListener("keypress", Keestart);
function Keestart(event) {
  if (event.key == " " && global.gamestate == "startscreen") {
    document.getElementById("menu").style.display = "none";
    document.getElementById("Lost-screen").style.display = "none";
    document.getElementById("gameContainer").style.display = "";
    setupGame();
  }

  if (event.key == " " && global.gamestate == "ready") {
    global.gamestate = "started";
    obstacleGeneration.spawnObstacles();
    gameSpeed.speed();
    gameSpeed.score();
    console.log(global.gamestate);
  }

  if (global.gamestate == "gameover") {
    location.reload();
  }
}

/* this is a fix that makes your game still runable after you left the tab/browser for some time: */
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    global.deltaTime = performance.now();
  }
});
