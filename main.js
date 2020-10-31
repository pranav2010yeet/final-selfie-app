var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
  
console.log("hi")

    document.getElementById("textbox").innerHTML="";
    recognition.start()

}
recognition.onresult=function run(event){

console.log(event)
var content=event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content)

if(content=="take my selfie "){

    speak()
    
}


}

function speak(){
 
    var synth=window.speechSynthesis;
    
    speakdata="Taking selfie in 5 seconds"

    var saythis=new SpeechSynthesisUtterance(speakdata);
    
    synth.speak(saythis)
    
    Webcam.attach( '#camera' );

    setTimeout(function(){
    snapshot();
    save()
    },5000)
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  
  function snapshot(){
      
    Webcam.snap(function(selfie){

document.getElementById("selfie").innerHTML=`<img id="capturedimage" src=${selfie} >`



    })

  }
  function save(){
      link=document.getElementById("link")
      image=document.getElementById("captureimage").src

      link.href=image
      link.click()
  }