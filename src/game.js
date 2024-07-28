import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  parent: 'game'
};

const game = new Phaser.Game(config);

function preload() {
 
  this.load.image('background', 'assets/sprites/background.png');
  
 
  this.load.spritesheet('player', './FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png', {
    frameWidth: 120, 
    frameHeight: 80 
  });
}

function create() {
  
  this.add.image(0, 0, 'background').setOrigin(0);
  
 
  this.player = this.add.sprite(400, 300, 'player');
  
 
  this.anims.create({
    key: 'idle',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), // Adjust frame range as needed
    frameRate: 10,
    repeat: -1 
  });
  
 
  this.player.play('idle');
}

function update() {
      
}
