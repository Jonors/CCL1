import { Assets } from "../gameObjects/Obstacles.js";
import { global } from "./global.js";

const obstacleGeneration = {};

console.log(Assets.Obstacles);

obstacleGeneration.obstacleSelect = function () {
  //generate obstacles from the obstacle array in random interval
  let rdmnmbr = Math.floor(Math.random() * 6);
  let newObstacle = Assets.Obstacles[rdmnmbr];
  // let newObstacle = Assets.Obstacles[4];
  new newObstacle();
  console.log("new");
  //console.log(newObstacle);
  obstacleGeneration.spawnObstacles();
};

obstacleGeneration.spawnObstacles = function () {
  // function for the started game 
  var rdmnmbr = Math.floor(Math.random() * 2) + 1.5 ;
  if (global.gamestate == "started")
    var obs = setTimeout(obstacleGeneration.obstacleSelect,1000 * rdmnmbr);
};

export { obstacleGeneration };
