import { ctx } from "../cnv";

export class Weapon {
  constructor(x, y, speed, position) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.xRight = this.x + 10000;
    this.xLeft = this.x - 10000;
    this.position = position;
  }

  check() {
    switch(this.position) {
      case 'left':
        if(this.x > this.xLeft) this.x -= this.speed;
        break;
      case 'right':
        if(this.x < this.xRight) this.x += this.speed;
        break;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, this.y, 10, 4);
  }
}

export const weapon = {
  array: [],
  number: 0,
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw(); 
      this.array[i].check();     
    }
  }
}
