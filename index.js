import * as PIXI from "pixi.js";
//import Matter from "matter-js";

import Player from "./player";
import Zombie from "./zombie";

const canvasSize = 512;
const canvas = document.getElementById("mycanvas");
const app = new PIXI.Application({
  view: canvas,
  width: canvasSize,
  height: canvasSize,
  backgroundColor: 0x5c812f,
});

let player = new Player({ app });
let zombie = new Zombie({ app, player, canvasSize });

app.ticker.add((delta) => {
  console.log(delta);
  player.update();
  zombie.update();
});
