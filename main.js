prediction_1=""
Webcam.set({
    width: 350, 
    height: 350,
    image_format:'png',
    png_quality: 90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureimage(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';

    });
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/oAjZn2j3x//model.json', modelloaded);
function modelloaded(){
    console.log("modelloaded")
}
function speak(){
    var synth=window.speechSynthesis
    speak_data1="The first prediction is "+prediction_1
    utterthis=new SpeechSynthesisUtterance(speak_data1+speak_data2)
    synth.speak(utterthis);
}
function check(){
    var img=document.getElementById("captured_image");
    classifier.classify(img, gotresult);
}
function gotresult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        var prediction_1=results[0].label;
        speak();
      if(results[0].label=="super"){
          document.getElementById("update_emoji").innerHTML="&#128076;";

      }
      if(results[0].label=="thumbs up"){
        document.getElementById("update_emoji").innerHTML="&#128077;";

    }
    if(results[0].label=="cheese"){
        document.getElementById("update_emoji").innerHTML="&#9996;";

    }
}
}
