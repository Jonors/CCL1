import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

//a class for the upper part of the character, for smoother animating 
class JonaUpper extends BaseGameObject {
  offset = {
    left: 0,
    top: 0,
  };

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 12,
    currentSpriteIndex: 0,
  };

  update = function () {
    this.x = global.Jona.x + this.offset.left;
    this.y = global.Jona.y + this.offset.top;
  };

  constructor(x, y, width, height) {
    super(x, y, width, height);
    //this.loadImages(["../images/IMG_2098.jpeg"]);
    //this.loadImagesFromSpritesheet("./images/this.loadImagesFromSpritesheet", 9, 1);
    this.loadImagesFromSpritesheet("./images/upperBody1-min.png", 13, 1);
    // this.style.zIndex = 100;
    console.log("jona");
  }
}

export {JonaUpper }