let colorPicker;

function setup() {
  // put setup code here
  createCanvas(1530, 750);
  r = random(255); 
  g = random(255);  
  b = random(255); 
      
  background(r, g, b); 
  ellipse(64,54, 80,80);
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(40,40);

  slider = createSlider(0, 150, 50);
  slider.position(500, 40);
  slider.style('width', '800px');
}


function draw() {
  if(mouseY>100 && mouseX>100){
  // put drawing code here
    if (mouseIsPressed) {
    noStroke();
    let value = slider.value();
    fill(colorPicker.color(), 50);
    ellipse(mouseX, mouseY, value, value);
    }
  }
}
