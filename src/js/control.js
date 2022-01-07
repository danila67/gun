import { hero } from "./hero";
import { player } from "./player";
import { m14 } from "./gun/m14";
import { dom_id } from "./dom_id";

let shot = true;

document.addEventListener('keydown', function(event) {
  switch(event.code) {
    case 'KeyW':
      player.array[hero.index].up = true;
      break;
    case 'KeyS':
      player.array[hero.index].down = true;
      break;
    case 'KeyA':
      player.array[hero.index].left = true;
      break;
    case 'KeyD':
      player.array[hero.index].right = true;
      break;
  }

  if (event.code === 'KeyF' && shot) {
    m14.array[player.array[hero.index].gun].shot();
    shot = false;
  }
});

document.addEventListener('keyup', function(e) {
  switch(e.code) {
    case 'KeyW':
      player.array[hero.index].up = false;
      break;
    case 'KeyS':
      player.array[hero.index].down = false;
      break;
    case 'KeyA':
      player.array[hero.index].left = false;
      break;
    case 'KeyD':
      player.array[hero.index].right = false;
      break;
    case 'KeyQ':
      dom_id.menu.style.display = 'block';
      break;
  }

  if (event.code === 'KeyF') {
    shot = true;
  }
});
