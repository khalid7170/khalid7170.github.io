window.onload = function() {
    alert("Hello, world!");
    
    // Event listener for the 'Bigger' button
    document.getElementById("biggerBtn").onclick = function() {
        enlargeText();
    };

    // Event listener for the 'Moo' button
    document.getElementById("mooBtn").onclick = function() {
        mooText();
    };
}

function enlargeText() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function styleText() {
    alert("Hello, world!");
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    var textArea = document.getElementById("textInput");
    var sentences = textArea.value.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim()) {
            sentences[i] = sentences[i].trim().toUpperCase() + "-Moo";
        }
    }
    textArea.value = sentences.join(". ").trim();
}
