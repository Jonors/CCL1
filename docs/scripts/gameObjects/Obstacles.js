import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
import { Jona } from "./Jona.js";


//an array in which classes are pushed (this is so Java Script)
const Assets = {};

Assets.Obstacles = [];

class Obstacle extends BaseGameObject {
  name = "Obstacle";
  active = true;
  slashable = false;
  x = global.Jona.x + 2000;


  getBoxBounds = function () {
    let bounds = {
      left: this.x + 25,
      right: this.x + this.width - 25,
      top: this.y,
      bottom: this.y + this.height,
    };
    return bounds;
  };


  // draw = function () {
  //   global.ctx.fillRect(this.x, this.y, this.width, this.height);
  // };

  reactToCollision = function (collidingObject) {};

  update = function () {
    let shiftBy = global.Jona.xVelocity * global.deltaTime;
    this.x -= shiftBy;
  };

  constructor(x, y, width, height) {
    super(x, y, width, height);
  }
}

class Obstacle1 extends Obstacle {
  width = 50;
  height = 80;
  y = 400;
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImages(["../images/smallobstacle1-min.png"]);
    //this.backGroundDiv = document.querySelector("#background");
  }
}

class Obstacle2 extends Obstacle {
  width = 50;
  height = 170;
  y = 320;
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImages(["../images/tallobstacle.png"]);
    //this.backGroundDiv = document.querySelector("#background");
  }
}

class Enemy1 extends Obstacle {
  width = 80;
  height = 160;
  y = 325;
  slashable = true;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 1,
    currentSpriteIndex: 0,
  };
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImagesFromSpritesheet("../images/Monstersmall1-min.png",2,1);
    
  }
}

class Enemy2 extends Obstacle {
  width = 60;
  height = 230;
  y = 245;
  slashable = true;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 1,
    currentSpriteIndex: 0,
  };
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImagesFromSpritesheet("../images/monstermid1-min.png",2,1);
  }
}
class Enemy3 extends Obstacle {
  width = 150;
  height = 350;
  slashable = true;
  y = 130;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 1,
    currentSpriteIndex: 0,
  };
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImagesFromSpritesheet("../images/monsterbig1-min.png",2,1);
  }
}
class Enemy4 extends Obstacle {
  width = 200;
  height = 40;
  y = 190;
  slashable = true;

  animationData = {
    animationSprites: [],
    timePerSprite: 0.1,
    currentSpriteElapsedTime: 0,
    firstSpriteIndex: 0,
    lastSpriteIndex: 1,
    currentSpriteIndex: 0,
  };
  //y = global.canvas.height - this.height;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.loadImagesFromSpritesheet("../images/monsterflying1-min.png",1,2);
  }
}

Assets.Obstacles.push(Obstacle1);
Assets.Obstacles.push(Obstacle2);
Assets.Obstacles.push(Enemy1);
Assets.Obstacles.push(Enemy2);
Assets.Obstacles.push(Enemy3);
Assets.Obstacles.push(Enemy4);

export { Assets };
