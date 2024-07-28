import Phaser from 'phaser';
import { Player1 } from '../entities/Player1';
import { Player2 } from '../entities/Player2';

export class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.timer = 60; // 60 seconds timer
      }

  preload() {
    this.load.image('background', 'bg.png');
    
    // Player 1 sprites
    this.load.spritesheet('player1Idle', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player1Run', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player1Jump', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player1Attack', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack2NoMovement.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player1Fall', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player1Hurt', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Hit.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    // Player 2 sprites
    this.load.spritesheet('player2Idle', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Idle.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player2Run', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Run.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player2Jump', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Jump.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player2Attack', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Attack2NoMovement.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player2Fall', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Fall.png', {
      frameWidth: 120,
      frameHeight: 80
    });

    this.load.spritesheet('player2Hurt', './FreeKnight_v1/Colour2/Outline/120x80_PNGSheets/_Hit.png', {
      frameWidth: 120,
      frameHeight: 80
    });
  }

  create() {
    this.add.image(0, 0, 'background').setOrigin(0);

    // Create animations for Player 1
    this.anims.create({
      key: 'idle1',
      frames: this.anims.generateFrameNumbers('player1Idle', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'run1',
      frames: this.anims.generateFrameNumbers('player1Run', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'attack1',
      frames: this.anims.generateFrameNumbers('player1Attack', { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'fall1',
      frames: this.anims.generateFrameNumbers('player1Fall', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'jump1',
      frames: this.anims.generateFrameNumbers('player1Jump', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'hurt1',
      frames: this.anims.generateFrameNumbers('player1Hurt', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    // Create animations for Player 2
    this.anims.create({
      key: 'idle2',
      frames: this.anims.generateFrameNumbers('player2Idle', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'run2',
      frames: this.anims.generateFrameNumbers('player2Run', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'attack2',
      frames: this.anims.generateFrameNumbers('player2Attack', { start: 0, end: 5 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'fall2',
      frames: this.anims.generateFrameNumbers('player2Fall', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'jump2',
      frames: this.anims.generateFrameNumbers('player2Jump', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'hurt2',
      frames: this.anims.generateFrameNumbers('player2Hurt', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.player1 = new Player1(this, 100, 400, 'player1Idle');
    this.player2 = new Player2(this, 200, 400, 'player2Idle');
    this.player1Label = this.add.text(this.player1.healthBar.x, this.player1.healthBar.y , 'Atti', { fontSize: '30px', fill: '#fff' , align: 'center', stroke: '#000', strokeThickness: 2}).setOrigin(-0.7, -0.16);
    this.player2Label = this.add.text(this.player2.healthBar.x, this.player2.healthBar.y , 'Matti', { fontSize: '30px', fill: '#fff', align: 'center', stroke: '#000', strokeThickness: 2 }).setOrigin(-0.7, -0.16);
    
    this.timerText = this.add.text(880, 20, `Time: ${this.timer}`, { fontSize: '64px', fill: '#fff', align: 'center', stroke: '#000', strokeThickness: 2 }).setOrigin(0.5, 0);


    this.add.existing(this.player1);
    this.add.existing(this.player2);

    // Start a countdown timer
    this.time.addEvent({
      delay: 1000,
      callback: this.updateTimer,
      callbackScope: this,
      loop: true
    });
  }

  update(time, delta) {

    this.player1Label.setPosition(this.player1.healthBar.x + this.player1.healthBar.width / 2, this.player1.healthBar.y - 10);
this.player2Label.setPosition(this.player2.healthBar.x + this.player2.healthBar.width / 2, this.player2.healthBar.y - 10);

    this.player1.update(time, delta);
    this.player2.update(time, delta);

    if (this.player1.healthBar.getHealth() <= 0 || this.player2.healthBar.getHealth() <= 0 || this.timer <= 0) {
      this.endGame();
    }
  }

  updateTimer() {
    if (this.timer > 0) {
      this.timer--;
      this.timerText.setText(`Time: ${this.timer}`);

    
    }
  }

  endGame() {
    this.scene.pause();
    let resultText;
    if (this.player1.healthBar.getHealth() > this.player2.healthBar.getHealth()) {
      resultText = 'Player 1 Wins!';
    } else if (this.player1.healthBar.getHealth() < this.player2.healthBar.getHealth()) {
      resultText = 'Player 2 Wins!';
    } else {
      resultText = 'It\'s a Draw!';
    }

    // Display the result
    this.add.text(500, 500, resultText, { fontSize: '64px', fill: '#fff' }).setOrigin(0.5);

    // Add a restart button
    this.add.text(500, 400, 'Press Ctrl + R to Restart', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

    
  }
}