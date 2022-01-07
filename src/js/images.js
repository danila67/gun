export const scin = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];

for (let i = 0; i < scin.length; i++) {
  scin[i].src = 'images/' +i +'.png';
}

export const scinPolice = [new Image()];

for (let i = 0; i < scinPolice.length; i++) {
  scinPolice[i].src = 'images/p' +i +'.png';
}

export const gunImage = [new Image(), new Image() /*new Image()*/];

for (let i = 0; i < gunImage.length; i++) {
  gunImage[i].src = 'images/g' +i +'.png';
}

export const backgrund = [new Image()/*, new Image(), new Image()*/];

for (let i = 0; i < backgrund.length; i++) {
  backgrund[i].src = 'images/b' +i +'.png';
}
