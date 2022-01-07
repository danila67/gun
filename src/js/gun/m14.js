import { weapon, Weapon } from "./weapon";
import { ctx } from "../cnv";
import { gunImage } from "../images";
import { player } from "../player";

export class M14 {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.x2 = y;
    this.y2 = x;
    this.index = index;
    this.who = 0;
    this.amount = 10;
    this.have = false;
  }

  draw() {
    if(this.have) {
      this.x = player.array[this.player].x;
      this.y = player.array[this.player].y + 60;
    }

    ctx.drawImage(gunImage[this.who],this.x, this.y, 70, 20);
  }

  give() {
    if (this.have) return;

    for (let i = 0; i < player.array.length; i++) {

      const p = player.array[i];

      if (this.x >= p.x && this.x <= p.x2 && this.y >= p.y && this.y <= p.y2 && p.gun === null) {
          this.player = p.index;
          p.gun = this.index;
          p.have = true;
          this.have = true;

          if(p.who === 'prisoners') this.who = 0;
          else this.who = 1;
      }
    }
  }

  shot() {
    if(this.who === 0){
      this.xWeapon = this.x + 60;
      this.yWeapon = this.y + 3;
    } else {
      this.xWeapon = this.x;
      this.yWeapon = this.y + 3;
    }

    if(this.amount > 0) {
      weapon.array[weapon.number] = new Weapon(this.xWeapon, this.yWeapon, 50, player.array[this.player].position);
    }
    weapon.number++;
  }
}

export const m14 = {
  array: [],
  number: 0,
  draw() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].draw();     
    }
  },

  give() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].give();     
    }
  }
}

m14.array[0] = new M14(500, 500, 0)
m14.array[1] = new M14(500, 400, 1)
m14.array[2] = new M14(500, 300, 2)
m14.array[3] = new M14(500, 200, 3)
