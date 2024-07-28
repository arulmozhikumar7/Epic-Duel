import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: [GameScene],
  parent: 'game'
};

const game = new Phaser.Game(config);

