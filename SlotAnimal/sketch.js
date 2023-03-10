//create a progrram that enables us to customize the amount of squares in a grid
let gif;

function preload (){
  gif = loadImage ('assets/bluecool.gif')
}

function setup() { //runs once
  createCanvas(windowWidth, windowWidth);
}

function draw() { //loopty loop
  fill(132, 23,213);
  strokeWeight(1);

  var num = 15; //number of sides in the array
  var sideLen = windowWidth / num; //side length variable

  translate (-150, -150);

  for (var y = 0; y < 2 * windowWidth; y = y + sideLen) {
    for (var x = 0; x < 2 * windowWidth; x = x + sideLen) {
      image(gif, x, y, windowWidth/num, windowWidth/num);
    }
  }
}

function windowResized (){
  resizeCanvas (windowWidth, windowHeight);

}
