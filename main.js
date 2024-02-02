function setup() {
    canvas = createCanvas(800, 550);
    canvas.position(700, 140)

    video = createCapture(VIDEO);
    video.size(600, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded!");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}