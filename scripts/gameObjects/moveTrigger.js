import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

//the move trigger and its reaction to certain objects, prettymuch just setting actives to false lol
class MoveTrigger extends BaseGameObject {
  active = true;

  update = function () {};

  draw = function () {
    //global.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  reactToCollision = function (collidingObject) {
    if (collidingObject.name == "Obstacle" && this == global.leftMoveTrigger) {
      collidingObject.active = false;
      global.Score +=20;
    }

    if (collidingObject.name == "tutorial" && this == global.leftMoveTrigger) {
      collidingObject.active = false;
      
    }
  };

  constructor(x, y, width, height) {
    super(x, y, width, height);
    //this.loadImages(["./images/apple.png"]);
  }
}

export { MoveTrigger };
