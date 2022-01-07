import { dom_id } from "./dom_id";
import { player, Player } from "./player";

export let range = document.getElementById('range').value;

export let who_value;

export const hero = {
  array: [],
  number: 0,
  index: 0,

  checkScin() {
    
    if (document.getElementById('r1').checked) {
      who_value = document.getElementById('r1').value;
    }

    if (document.getElementById('r2').checked) {
      who_value = document.getElementById('r2').value;
    }

    range = document.getElementById('range').value;
    const range1 = document.getElementById('range');

    if(who_value === 'prisoners') {
      dom_id.image.src = 'images/' +range +'.png';
      range1.max = 14;
    } else {
      dom_id.image.src = 'images/p' +range +'.png';
      range1.max = 0;
    }
  },

  check() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i].check();     
    }
  }
}

export class Hero {
  constructor(name, scin, index, who) {
    this.name = name;
    this.scin = scin;
    this.index = index;
    this.player = null;
    this.who = who;
  }

  play() {
      player.array[0] = new Player(this.scin, this.name, 0, this.who);
      hero.index = 0;
      dom_id.menu.style.display = 'none';
  }

  check() {
    this.buttonID.addEventListener('click', (event) => {
			this.play();   
		});
  }
}
