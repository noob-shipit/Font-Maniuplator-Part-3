difference = 0;
rightWristX=0
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(400,400);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}


function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX =" + leftWristX + "rightWristX ="+ rightWristX + " difference =" + difference);
    }
}

function draw(){
    background("#6C91C2");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text('Peter', 50, 400);
}


