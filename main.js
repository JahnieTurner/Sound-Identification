function start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/26yIVBzUb/model.json', modelLoaded)
}

function modelLoaded() {
    console.log("model is loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)

        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        document.getElementById("label").style.color = "rgb(" + r + "," + g + "," + b + ")"
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")"
        label = results[0].label
        document.getElementById("label").innerHTML = "I can hear a " + label
        confidence = (results[0].confidence * 100).toFixed(2)
        document.getElementById("confidence").innerHTML = "Accurecy-" + confidence + "%"

        img1 = document.getElementById("alien1")
        img2 = document.getElementById("alien2")
        img3 = document.getElementById("alien3")
        img4 = document.getElementById("alien4")

        if (label == "Clap") {
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (label == "Snap") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        } else if (label == "Jessie") {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        } else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }
}