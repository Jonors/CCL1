import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";
import { Blade } from "./blade.js";

//this is the basegame object for the legs of the player character as he is split into two so the animations go through smoother
class Jona extends BaseGameObject {
  name = "Jona";
  xVelocity = 200;
  yVelocity = 0;
  JumpForce = 0;
  useGravityForces = true;
  ignoreAutoMovement = true;
  backGroundDiv = null;
  active = true;
  cd = 0;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 12,
    currentSpriteIndex: 0,
  };

  //reaction so the game ends when we collide with an obstacle
  reactToCollision = function (collidingObject) {
    if (collidingObject.name == "Obstacle") {
      global.gameover();
      console.log("aua");
    }
  };

  getBoxBounds = function () {
    let bounds = {
      left: this.x + 10,
      right: this.x + this.width - 15,
      top: this.y,
      bottom: this.y + this.height - 20,
    };
    return bounds;
  };

  update = function () {
    //Iniciates the background moving
    if (global.gamestate == "started") {
      this.y += this.yVelocity * global.deltaTime;

      let shiftBy = global.Jona.xVelocity * global.deltaTime;
      global.backgroundShift += shiftBy * -1;

      this.backGroundDiv.style.backgroundPositionX =
        global.backgroundShift + "px";
    }

    //Cooldown for slash
    if (global.blade.active == false) {
      this.cd += global.deltaTime;

      if (this.cd >= 0.6) {
        global.cooldown = "up";
        this.cd = 0;
      }
    }
  };

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.backGroundDiv = document.querySelector("#background");
    this.loadImagesFromSpritesheet("./images/lowerBody1-min.png", 13, 1);
    console.log("jona");
  }
}

export { Jona };
