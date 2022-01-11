import { hero, Hero, range, who_value } from "./hero";
import { m14, M14 } from "./gun/m14";

export const fun_dom = {
  get_id: {
    complete: document.getElementById("button_complete"),
  },
  check() {
    this.get_id.complete.addEventListener('click', (event) => {
      const text = document.getElementById('text').value;

      hero.array[0] = new Hero(text, range, 0, who_value)
      hero.array[1] = new Hero('bot001', 0, 1, 'police', 100, 100)
      hero.array[1].create()
      hero.array[0].play();


      m14.array[0] = new M14(500, 500, 0)
    });
  }
}