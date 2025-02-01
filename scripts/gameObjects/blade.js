import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

class Blade extends BaseGameObject {
  name = "Blade";
  x = global.Jona.x;
  y = global.Jona.y;
  width = 280;
  height = 90;
  active = true;
  useGravityForces = false;
  ignoreAutoMovement = true;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.053,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 8,
    currentSpriteIndex: 0,
  };
//offset values so that the blade can be postiioned infont of the playercharacter and moves with him
  offset = {
    left: 34,
    top: 5,
  };

  update = function () {
    this.x = global.Jona.x + this.offset.left;
    this.y = global.Jona.y + this.offset.top;

    if (this.active == false){
      this.switchcurrentSprites (0,0) ;
    }
  };

  //slash reaction to deactiveate cut enemies
  reactToCollision = function (collidingObject) {
    if (collidingObject.slashable === true) {
      collidingObject.active = false;
      global.Score += 20;
      console.log("schlitz");
    }
  };

  constructor(x, y, width, height) {
    super(x, y, width, height); 
    console.log(this.active);
    this.loadImagesFromSpritesheet("./images/slashSpritesheet1-min.png", 9, 1);
  }
}

const attack = {};

export { attack };
export { Blade };
