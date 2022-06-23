img="";
status="";
objects=[];
function setup(){
    canvas= createCanvas(640,400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function preload(){
    img=loadImage('room.jpg');
}

function draw(){
    image(img,0,0,640,400);
    if(status!=""){
        for(i=0; i<objects.length; i++){
            document.getElementById("status").innerHTML="Status:Object Detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].lable+""+ percent+"%",objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
        }

        
    }


    fill("#FF000");
    text("Television",230,180);
    noFill("#FF000");
    stroke("#FF000");
    rect(220,165,150,90)

    fill("#FF000");
    text("Table",250,285);
    noFill();
    stroke("#FF000");
    rect(240,270,122,70);
}



function modelLoaded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}