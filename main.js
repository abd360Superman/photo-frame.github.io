function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 230, 150, 220, 200);

    fill(255, 0, 0);
    stroke(255, 0, 0);

    circle(50, 50, 80);
    rect(90, 40, 450, 20);
    circle(540, 50, 80);
    rect(530, 90, 20, 300);
    circle(540, 390, 80);
    rect(500, 380, -450, 20);
    circle(50, 390, 80);
    rect(40, 90, 20, 300)
}