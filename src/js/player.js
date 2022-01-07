import { ctx } from "./cnv";
import { scin, scinPolice } from "./images";

const speed = 10;

export class Player {
  constructor(scin, name, index, who) {
    this.scin = scin;
    this.name = name;
    this.index = index;
    this.who = who;
    this.up = false; 
    this.down = false;
    this.left = false;
    this.right = false;
    this.gun = null;

    if(this.who === 'prisoners') {
      this.x = 0;
      this.y = 0;
    } else {
      this.x = 900;
      this.y = 0;
    }
  }

  check() {
    if(this.who === 'prisoners') this.position = 'right';
    else this.position = 'left';

    if(this.up) this.y -= speed;

    if(this.down) this.y += speed;

    if(this.left) this.x -= speed;

    if(this.right) this.x += speed;
  }

  draw() {
    this.x2 = this.x + 100;
    this.y2 = this.y + 100;
    
    ctx.font = "25px serif";
	  ctx.fillStyle = "black";
    ctx.fillText(this.name, this.x + 20, this.y + 10);
    if(this.who === 'prisoners') ctx.drawImage(scin[this.scin], this.x, this.y,100,100);
    else ctx.drawImage(scinPolice[this.scin], this.x, this.y,100,100);
  }
}

export const player = {
  array: [],
  number: 0,
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw(); 
      this.array[i].check();     
    }
  }
}

