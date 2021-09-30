noseX1=0;
noseY1=0;
noseX=0;
noseY=0;
gogglesX=0;
gogglesY=0;
mustacheX=0;
mustacheY=0;
hatX=0;
hatY=0;


function preload() {
    goggles=loadImage('https://i.postimg.cc/65fXyWrP/GOGGLES.png');
    mustache=loadImage('https://i.postimg.cc/j2RM9bDW/MUSTACHE.png');
    hat=loadImage('https://i.postimg.cc/50Wnn47f/image-removebg-preview-51.png');
    nose=loadImage('https://i.postimg.cc/mrN2KK5s/Clown-Nose.png');
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
    noseX1 = results[0].pose.nose.x-15;
    noseY1 = results[0].pose.nose.y-10;
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    gogglesX=results[0].pose.rightEye.x-35;
    gogglesY=results[0].pose.rightEye.y-12;
    mustacheX=results[0].pose.nose.x-40;
    mustacheY=results[0].pose.nose.y+5;
    hatX = results[0].pose.leftEar.x-180;
    hatY = results[0].pose.leftEar.y-190;


  }
}

function draw() {
  image(video, 0, 0, 500, 400);
  fill(255,0,0);
  stroke(255,0,0);
  image(goggles,gogglesX,gogglesY,140,50);
  image(mustache,mustacheX,mustacheY,80,40);
  image(hat, hatX, hatY, 250, 250);
  image(nose, noseX1, noseY1, 30, 30);
}

function save_img(){    
  save('meAvatarified.png');
}

function backtohome(){
  window.location = "index.html";
}