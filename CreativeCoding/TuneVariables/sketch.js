//create a progrram that enables us to customize the amount of squares in a grid

function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
}

function draw() { //loopty loop
  fill(32,245,70);
  strokeWeight(1);

  var num = 15; //number of sides in the array
  var sideLen = windowWidth / num; //side length variable

  for (var y = 0; y < windowWidth; y = y + sideLen) {
    for (var x = 0; x < windowWidth; x = x + sideLen) {
      quad(x, y,
          x + sideLen, y,
          x + sideLen, y + sideLen,
          x, y + sideLen);
    }
  }
}
