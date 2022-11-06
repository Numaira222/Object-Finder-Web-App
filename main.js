objects = [];
status = "";
function setup(){
    canvas = createCanvas(280,180);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,280,180);
    
}


function start(){
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("input_box").value;
}
function modelLoaded(){
    console.log("Model loaded");
    status = true;
}
function gotResults(error, results){
    if(error){
       console.error("error"); 
    }
    else{
        console.log(results);
        objects = results;
    }
    }