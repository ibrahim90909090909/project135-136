video="";
status="";
function preload(){
video=createVideo('video.mp4');
video.hide();
}
function setup(){
canvas=createCanvas(480,320);
canvas.position(400,100);
}
function draw(){
image(video,0,0,480,350);
}
function start(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
console.log('Model Loaded!');
status=true;
video.loop();
video.speed(1);
video.volume(0);
}