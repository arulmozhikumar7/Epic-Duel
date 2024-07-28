import Phaser from 'phaser';
import { HealthBar } from '../HealthBar';

export class Player1 extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    this.scene = scene;
    this.scene.physics.world.enable(this);
    this.scene.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setOrigin(0, 0);
    this.setScale(4);
    this.play('idle1');

    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.attackKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    this.isAttacking = false;
    this.isHurt = false; // New property to track hurt state
    this.attackTimer = 0;
    this.attackCooldown = 1000; // Cooldown period in milliseconds

    // Initialize health bar
    this.healthBar = new HealthBar(this.scene, 10, 10, 200, 20, 100); // Position, size, and max health

    // Add animation complete listener
    this.on('animationcomplete', this.handleAnimationComplete, this);
  }

  update(time, delta) {
    const isOnFloor = this.body.onFloor();

    // Attack logic with cooldown
    if (this.attackKey.isDown && !this.isAttacking && !this.isHurt && (time - this.attackTimer > this.attackCooldown)) {
      this.isAttacking = true;
      this.attackTimer = time;
      this.setVelocityX(0);
      this.play('attack1', true);

      if (this.isCloseTo(this.scene.player2)) {
        this.scene.player2.takeHit(10); 
      }
    }

    if (this.isAttacking && time - this.attackTimer > 500) {
      this.isAttacking = false;
    }

    if (!this.isHurt) {
      if (this.cursors.left.isDown && !this.isAttacking) {
        this.setVelocityX(-500);
        if (isOnFloor) {
          this.play('run1', true);
        }
        this.flipX = true;
      } else if (this.cursors.right.isDown && !this.isAttacking) {
        this.setVelocityX(500);
        if (isOnFloor) {
          this.play('run1', true);
        }
        this.flipX = false;
      } else if (!this.isAttacking) {
        this.setVelocityX(0);
        if (isOnFloor) {
          this.play('idle1', true);
        }
      }

      if (this.cursors.up.isDown && isOnFloor) {
        this.setVelocityY(-500);
        this.play('jump1', true);
      } else if (!isOnFloor && this.body.velocity.y > 0) {
        this.play('fall1', true);
      } else if (!isOnFloor && this.body.velocity.y < 0) {
        this.play('jump1', true);
      }
    }
  }

  takeHit(amount) {
    this.healthBar.decrease(amount);
    this.play('hurt1', true);
    this.isHurt = true; // Lock movement
   
    // Fallback to reset isHurt after a fixed duration (e.g., 1 second)
    this.scene.time.delayedCall(450, () => {
      this.isHurt = false;
    
    });
  }
  handleAnimationComplete(animation, frame) {
    if (animation.key === 'hurt1') {
      this.isHurt = false; // Unlock movement after hurt animation
      console.log('Player1 hurt animation complete');
    }
  }

  isCloseTo(otherPlayer) {
    // Check if the other player is within 100 pixels horizontally and 50 pixels vertically
    const distance = Phaser.Math.Distance.Between(this.x, this.y, otherPlayer.x, otherPlayer.y);
    const inReach = distance < 100 && Math.abs(this.y - otherPlayer.y) < 50;

    // Check if the other player is in front or back
    const inFrontOrBack = Math.abs(this.x - otherPlayer.x) < 100;

    return inReach && inFrontOrBack;
  }
}