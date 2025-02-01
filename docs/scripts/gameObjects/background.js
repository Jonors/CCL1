import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";

//a class for the backgoround shift more or less, as the image gets determined by the css value #background
class Background extends BaseGameObject {
  name = "paper";

  // update = function () {
  //   //Iniciates the backround moving
  //   if (global.gamestate == "started") {
  //     this.y += global.Jona.yVelocity * global.deltaTime;

  //     let shiftBy = global.Jona.xVelocity * global.deltaTime;
  //     global.backgroundShift += shiftBy * -1;

  //     this.backGroundDiv.style.backgroundPositionX =
  //       global.backgroundShift + "px";
  //   }
  // };

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.backGroundDiv = document.querySelector("#background");
    console.log("background");
  }
}

export { Background };
