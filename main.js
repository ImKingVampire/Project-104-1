Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


Webcam.attach( '#camera' );

camera = document.getElementById("camera");
      
 
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
  // Initialize the Image Classifier method with MobileNet
//classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/JACkTMciY/model.json',modelLoaded);
classifier = ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/lAtebM2Ja/model.json',modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }