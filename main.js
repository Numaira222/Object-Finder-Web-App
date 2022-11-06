objects = [];
status = "";
function setup(){
    canvas = createCanvas(380,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,380,280);
    
    if(status != ""){
    object_detector.detect(gotResults);
    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML = "Status: Object Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of Objects Detected are:"+ objects.length;
        fill("red");
        percent = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y);
        noFill();
        stroke("red");
        rect(objects[i].x ,objects[i].y ,objects[i].width, objects[i].height);

    }
}
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