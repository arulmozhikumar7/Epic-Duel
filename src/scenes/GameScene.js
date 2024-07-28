import Phaser from 'phaser';
import { Player1 } from '../entities/Player1';
import { Player2 } from '../entities/Player2';

export class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('background', 'sprites/background.png');
    
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

    this.player1 = new Player1(this, 100, 400, 'player1Idle');
    this.player2 = new Player2(this, 200, 400, 'player2Idle');

    this.add.existing(this.player1);
    this.add.existing(this.player2);
  }

  update() {
    this.player1.update();
    this.player2.update();
  }
}
