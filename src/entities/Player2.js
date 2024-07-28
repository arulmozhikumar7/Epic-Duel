import Phaser from 'phaser';

export class Player2 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setCollideWorldBounds(true);
    this.play('idle2');
    this.setOrigin(0, 0);
    this.setScale(1);

    this.cursors = scene.input.keyboard.createCursorKeys();
    this.attackKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
  }

  update() {
    const isOnFloor = this.body.onFloor();

    if (this.attackKey.isDown) {
      this.setVelocityX(0);
      this.play('attack2', true);
      return;
    }

    if (this.cursors.left.isDown) {
      this.setVelocityX(-200);
      if (isOnFloor) {
        this.play('run2', true);
      }
      this.flipX = true;
    } else if (this.cursors.right.isDown) {
      this.setVelocityX(200);
      if (isOnFloor) {
        this.play('run2', true);
      }
      this.flipX = false;
    } else {
      this.setVelocityX(0);
      if (isOnFloor) {
        this.play('idle2', true);
      }
    }

    if (this.cursors.up.isDown && isOnFloor) {
      this.setVelocityY(-500);
      this.play('jump2', true);
    } else if (!isOnFloor && this.body.velocity.y > 0) {
      this.play('fall2', true);
    } else if (!isOnFloor && this.body.velocity.y < 0) {
      this.play('jump2', true);
    }
  }
}
