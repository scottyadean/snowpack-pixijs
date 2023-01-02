import * as PIXI from "pixi.js";
import {randomSpawnPoint} from './utils';

export default class Zombie {
    
    constructor({ app, player, canvasWidth }) {
        
   
        this.app = app;
        this.player = player;
        this.zombie = new PIXI.Graphics();
        this.zombieRad = 16;
        this.speed = 2;
        let spanwn = randomSpawnPoint(canvasWidth);
        this.zombie.position.set(spanwn.x, spanwn.y);
        this.zombie.beginFill(0xff0000, 1);
        this.zombie.drawCircle(0, 0, this.zombieRad);
        this.zombie.endFill();
        this.app.stage.addChild(this.zombie);
    }

    
    update(){
        
        let zombiePosi = new Victor(this.zombie.position.x, this.zombie.position.y);
        let playerPosi = new Victor(
            this.player.getPlayer().position.x,
            this.player.getPlayer().position.y
        );

    if (zombiePosi.distance(playerPosi) < this.player.getWidth() / 2) {
        let newSpawn = randomSpawnPoint();
        this.zombie.position.set(newSpawn.x, newSpawn.y);
        return;
    }

        let diffPosi = playerPosi.subtract(zombiePosi);
        let vect = diffPosi.normalize().multiplyScalar(this.speed);
        this.zombie.position.set(this.zombie.position.x + vect.x, this.zombie.position.y + vect.y);
            
        }
    
}