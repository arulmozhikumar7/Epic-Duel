export class HealthBar {
    constructor(scene, x, y, width, height, maxHealth) {
      this.scene = scene;
      this.maxHealth = maxHealth;
      this.currentHealth = maxHealth;
  
      this.bar = this.scene.add.graphics();
      this.setPosition(x, y);
      this.setSize(width, height);
      this.draw();
    }
  
    setPosition(x, y) {
      this.x = x;
      this.y = y;
    }
  
    setSize(width, height) {
      this.width = width;
      this.height = height;
    }
    draw() {
        this.bar.clear();
      
        // Draw the lost health (red) part
        const lostHealthWidth = (this.width - (this.currentHealth / this.maxHealth) * this.width);
        this.bar.fillStyle(0xff0000);
        this.bar.fillRect(this.x + this.width - lostHealthWidth, this.y, lostHealthWidth, this.height);
      
        // Draw the remaining health (green) part
        const healthWidth = (this.currentHealth / this.maxHealth) * this.width;
        this.bar.fillStyle(0x00ff00);
        this.bar.fillRect(this.x, this.y, healthWidth, this.height);
      }
      
    decrease(amount) {
      this.currentHealth -= amount;
      if (this.currentHealth < 0) {
        this.currentHealth = 0;
      }
      this.draw();
    }
  
    increase(amount) {
      this.currentHealth += amount;
      if (this.currentHealth > this.maxHealth) {
        this.currentHealth = this.maxHealth;
      }
      this.draw();
    }
  
    getHealth() {
      return this.currentHealth;
    }
  }
  