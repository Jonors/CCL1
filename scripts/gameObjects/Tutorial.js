import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";


// prettymuch just here so that the instructions can float through at the beginning
class Tutorial extends BaseGameObject {
  name = "tutorial";
  active = true;
  //y = global.canvas.height - this.height;

  update = function () {
    let shiftBy = global.Jona.xVelocity * global.deltaTime;
    this.x -= shiftBy;
  };

//   draw = function () {
//     global.ctx.fillRect(this.x, this.y, this.width, this.height);
//   };

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImages(["../images/tutorial.png"]);
    console.log("tutorial")
    //this.backGroundDiv = document.querySelector("#background");
  }
}

export { Tutorial };
