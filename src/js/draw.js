import { hero } from "./hero";
import { ctx } from "./cnv";
import { fun_dom } from "./fun_dom";
import { localStorageReturn } from "./local";
import { m14 } from "./gun/m14";
import { player } from "./player";
import { weapon } from "./gun/weapon";
import { backgrund } from "./images";

fun_dom.check();
hero.check();

let fps = 0;

function draw() {
  ctx.clearRect(0, 0, 1300, 600);
  localStorageReturn();
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 1000, 600);
  ctx.drawImage(backgrund[0], 0, 0, 500, 500);


  ctx.beginPath()
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 50, 50)
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.fillText(fps, 15, 30, 100)
  //ctx.strokeText(fps, 100, 100, 10)

  player.draw();
  weapon.draw();
  m14.draw();

  hero.checkScin();
  m14.give();
}

const times = [];


function refreshLoop() {
  draw()
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    
    refreshLoop();
  });
}

refreshLoop();
