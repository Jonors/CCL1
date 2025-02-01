import { global } from "./global.js";
import { Jona } from "../gameObjects/Jona.js";
import { Floor } from "../gameObjects/floor.js";
import { obstacleGeneration } from "./ObstacleGeneration.js";
import { attack } from "../gameObjects/blade.js";
import { Blade } from "../gameObjects/blade.js";

document.addEventListener("keypress", jump);

function jump(event) {
  if (event.key == " " && global.gamestate == "started") {
    console.log("jump");
    global.Jona.setJumpForce(10);
  }
}

document.addEventListener("keypress", attackPress);
//slash function, so that the player can cut enemies but in timed intervals connected to cd which is determined in Jona.js
function attackPress(event) {
  if (
    event.key === "Enter" &&
    global.gamestate === "started" &&
    global.cooldown === "up"
  ) {
    global.JonaUpper.active=false
    global.cooldown = "down";
    global.blade.active =true;
    console.log(global.cooldown);
    setTimeout(() => {
      global.Jona.cd = 0;
      global.blade.active = false;
      global.JonaUpper.active = true;
    }, 500); 

  }
}


