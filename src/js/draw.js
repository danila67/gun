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

function draw() {
  ctx.clearRect(0, 0, 1300, 600);
  localStorageReturn();
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 1000, 600);
  ctx.drawImage(backgrund[0], 0, 0, 500, 500);
  
  player.draw();
  weapon.draw();
  m14.draw();

  hero.checkScin();
  m14.give();
}

setInterval(draw,25);
