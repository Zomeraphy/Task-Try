function setup() {
  createCanvas (600,600);
  colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
  var i = mouseX + mouseY;
  var j = mouseX - mouseY;

    stroke(0, 80 - (mouseY / 12), 20, 30);
    fill ((i / 10 * 3), 80 - (mouseY / 12), 70, 60 - (mouseY / 12));
    circle (mouseX, mouseY, 50 + cos(j / 100 * PI) * 20);
}