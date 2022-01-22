Webcam.set({
    width: 350,
    height: 300,
    format_image: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log('m15 version:', m15.version);
classifier = m15.imageClassifier('', modelLoaded);

function modelLoaded() {
    console.log('model_loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is" + prediction_1;
    speak_data_2 = "The Second Prediction Is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}