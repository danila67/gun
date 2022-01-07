const raw = localStorage.getItem("gunshot_player"),
person = JSON.parse(raw);

localStorage.clear();
if (localStorage.getItem("gunshot_player")) {

} 

export function localStorageReturn() {

  let storage = {
    
  }
	localStorage.setItem("gunshot_player", JSON.stringify(storage));
}
