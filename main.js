Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("camera")
function snap() {
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML = `<img id="captured_image" src=${img}>`;
        }
    )
}
console.log("ml5.version: " + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MAaG2v0Yt/model.json", modelLoader);
function modelLoader() {
    console.log("Model loaded successfully.");
}
function speak(){
    speechAPI = window.speechSynthesis;
    textData = "The first prediction is " + prediction1 + ", and the second prediction is " + prediction2 + ".";
    utterThis = new SpeechSynthesisUtterance(textData);
    speechAPI.speak(utterThis);
}

function predict() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}
function gotResult (error, result){
        if (error) {
            console.log(error);
        } else {
            console.log(result);
            prediction1 = result[0].label
            prediction2 = result[1].label
            document.getElementById("gesture1").innerHTML = prediction1
            document.getElementById("gesture2").innerHTML = prediction2
            speak()
            if (prediction1 == "Thumbs Up") {
                document.getElementById("emoji1").innerHTML = "&#128077";
            }
            if (prediction1 == "Thumbs Down") {
                document.getElementById("emoji1").innerHTML = "&#128078";
            }
            if (prediction1 == "Peace") {
                document.getElementById("emoji1").innerHTML = "&#9996";
            }
            if (prediction1 == "Call Me") {
                document.getElementById("emoji1").innerHTML = "&#129305";
            }
            if (prediction1 == "Fingers Crossed") {
                document.getElementById("emoji1").innerHTML = "&#128532";
            }
            if (prediction1 == "Pointed Finger") {
                document.getElementById("emoji1").innerHTML = "&#9757";
            }
            if (prediction1 == "Rock On") {
                document.getElementById("emoji1").innerHTML = "&#129311";
            }
            if (prediction2 == "Thumbs Up") {
                document.getElementById("emoji2").innerHTML = "&#128077";
            }
            if (prediction2 == "Thumbs Down") {
                document.getElementById("emoji2").innerHTML = "&#128078";
            }
            if (prediction2 == "Peace") {
                document.getElementById("emoji2").innerHTML = "&#9996";
            }
            if (prediction2 == "Call Me") {
                document.getElementById("emoji2").innerHTML = "&#129305";
            }
            if (prediction2 == "Fingers Crossed") {
                document.getElementById("emoji2").innerHTML = "&#128532";
            }
            if (prediction2 == "Pointed Finger") {
                document.getElementById("emoji2").innerHTML = "&#9757";
            }
            if (prediction2 == "Rock On") {
                document.getElementById("emoji2").innerHTML = "&#129311";
            }
        }
}