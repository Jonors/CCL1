import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";
//Its a floor, not much to say, hes here so that the player doesnt fall off the screen
class Floor extends BaseGameObject {
  name = "Floor";
  xVelocity = 0;
  blockGravityForces = true;
  ignoreAutoMovement = true;
  active = true;
  
  draw = function () {
    //global.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  update = function() {
    //this.x += global.Jona.xVelocity * global.deltaTime;
    /*if (this.xVelocity == 0) {
        global.playerObject.switchCurrentSprites(this.animationData.firstSpriteIndex, this.animationData.firstSpriteIndex);*/
    
}
  
  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

export { Floor };
