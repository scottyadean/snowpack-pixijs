import * as PIXI from "pixi.js";
export default class Player {
  constructor({ app }) {
    this.app = app;
    this.width = 32;
    this.player = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.player.anchor.set(0.5);
    this.player.position.set(app.screen.width / 2, app.screen.height / 2);
    this.player.width = this.player.height = this.width;
    this.player.tint = 0xea985d;
    this.app.stage.addChild(this.player);
  }

  update() {
    const cursorPosition = this.app.renderer.plugins.interaction.mouse.global;
    const angle =
      Math.atan2(
        cursorPosition.y - this.player.position.y,
        cursorPosition.x - this.player.position.x
      ) +
      Math.PI / 2;

    this.player.rotation = angle;
  }

  getWidth() {
    return this.width;
  }

  getPlayer() {
    return this.player;
  }
}
