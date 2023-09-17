Webcam.set({
    width:350,
    height:360,
    image_format:"png",
    png_quality:99
});

Webcam.attach("#dbutt1");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("dbutt2").innerHTML = '<img id = "ibutt" src="' +data_uri +'">';
    })
}

console.log("ml5 version",ml5.version);

cbutt = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aYzuC931q/model.json',modelloaded);

function modelloaded(){
    console.log("model loaded succesfully!!!!!!!!!!!!!!!!!!!!!!!");
}