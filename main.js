noseX=0;
noseY=0;
difference=0;
rWristX=0;
lWristX=0;
function setup()
{
  video = createCapture(VIDEO);
  video.size(550, 500);
  canvas=createCanvas(750,750);
  canvas.position(760,150);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);  
} 
function modelLoaded(){
  console.log('Posenet is initialized');
}
function draw(){
  background("#00ffff")
  document.getElementById("sq_side").innerHTML = "Width and Height of a square will be = " + difference + "px";
  stroke('#a103fc')
  square(noseX,noseY,difference);

}
function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX + "noseY = " + noseY);
    lWristX = results[0].pose.leftWrist.x;
    rWristX = results[0].pose.rightWrist.x;
    difference=floor(lWristX - rWristX);
    console.log("leftWristX = " + lWristX + "rightWristX = " + rWristX + "difference = " + difference);

  }
}