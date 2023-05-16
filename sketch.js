let img;
let Darumad;
let face = "Dana&Netta \n Best friend forever \n+ \n";
function preload() {
 Darumad = loadFont("ClashDisplay.ttf");
 img = loadImage('dana.jpeg');
} 
function setup() {
 createCanvas(500, 500);
}
function draw() {
 background(255,85,90,60);
 imageMode(CENTER);
 image(img, width/2, height/2,450, 400,);
 fill(0);
 textFont(Darumad);
 textSize(40);
 textAlign(CENTER, CENTER);
 text(face, mouseX, mouseY);
 }