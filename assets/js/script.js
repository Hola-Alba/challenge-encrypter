function cypher(){
    var sentence = document.getElementById("encryptedText").value.toLowerCase();

    var encryptedText = sentence.replace(/e/img, "enter");
    var encryptedText = encryptedText.replace(/i/img, "imes");
    var encryptedText = encryptedText.replace(/a/img, "ai");
    var encryptedText = encryptedText.replace(/o/img, "ober");
    var encryptedText = encryptedText.replace(/u/img, "ufat");

    document.getElementById("decryptedText").innerHTML = encryptedText;

    document.getElementById("btnCopy").style.display = "show";
    document.getElementById("btnCopy").style.display = "inherit";
}

function decipher(){
    var sentence = document.getElementById("encryptedText").value.toLowerCase();

    var encryptedText = sentence.replace(/enter/img, "e");
    var encryptedText = encryptedText.replace(/imes/img, "i");
    var encryptedText = encryptedText.replace(/ai/img, "a");
    var encryptedText = encryptedText.replace(/ober/img, "o");
    var encryptedText = encryptedText.replace(/ufat/img, "u");

    document.getElementById("decryptedText").innerHTML = encryptedText;
}

function copy(){
    var content = document.querySelector("#decryptedText");
    content.select();
    document.execCommand("copy");
    alert("Copied: " + content.value);
}