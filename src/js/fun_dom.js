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
      hero.array[0].play();


      m14.array[0] = new M14(500, 500, 0)
      m14.array[1] = new M14(500, 400, 1)
      m14.array[2] = new M14(500, 300, 2)
      m14.array[3] = new M14(500, 200, 3)
    });
  }
}