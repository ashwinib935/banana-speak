var btn_translate = document.querySelector("#btn-translate");
var txt_input = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var message = document.querySelector("#message");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

btn_translate.addEventListener("click", clickEventHandler);


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("Error occured:", error);
    alert("Something wrong with server! Please try again after sometime");
}

function clickEventHandler() {
    var inputText = txt_input.value;
    if (inputText) {
        message.style.display = "none";
        fetch(getTranslationURL(inputText))
            .then(response => response.json())
            .then(json => {
                var translatedText = json.contents.translated;
                outputDiv.innerText = translatedText;
            }).catch(errorHandler);
    } else {
        message.style.display = "block";
        message.innerText = "Please write something to translate."
    }


}