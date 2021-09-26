
noseX=0;
noseY=0;
gogglesX=0;
gogglesY=0;
mustacheX=0;
mustacheY=0;


function preload() {
    goggles=loadImage('https://i.postimg.cc/65fXyWrP/GOGGLES.png');
    mustache=loadImage('https://i.postimg.cc/j2RM9bDW/MUSTACHE.png');
}

function setup() {
  canvas = createCanvas(500, 400);
  canvas.position(400,800);
  video = createCapture(VIDEO);
  video.size(500, 400);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    gogglesX=results[0].pose.rightEye.x-35;
    gogglesY=results[0].pose.rightEye.y-12;
    mustacheX=results[0].pose.nose.x-40;
    mustacheY=results[0].pose.nose.y+5;



  }
}

function draw() {
  image(video, 0, 0, 500, 400);
  fill(255,0,0);
  stroke(255,0,0);
  image(goggles,gogglesX,gogglesY,140,50);
  image(mustache,mustacheX,mustacheY,80,40);

}

function save_img(){    
  save('meAvatarified.png');
}

function backtohome(){
  window.location = "index.html";
}