import { useEffect } from "react";

const Veridoc = () => {
  function onInitializeButtonClick() {

    var endpointAddress = 'https://services.verigram.ai:8443/veridoc/ru/veridoc/';
    var documentType = parseInt('1');
    var recognitionMode = parseInt('0');
    var isGlareCheckNeeded = false;
    var isTranslitCheckNeeded = false;
    var isMirrorMode = false;
    var isAutoDocTypeMode =false;
    var apiKey = process.env.BIO_KEY;

    veridoc.init(endpointAddress, apiKey, successCallback, errorCallback, gotPhotoCallback)
        .then(() => {
          veridoc.setDocType(documentType);
          veridoc.setRecognitionMode(recognitionMode);
          veridoc.setIsGlareCheckNeeded(isGlareCheckNeeded);
          veridoc.setIsTranslitCheckNeeded(isTranslitCheckNeeded);
          veridoc.setMirrorPreviewForWebCameras(isMirrorMode);
          veridoc.setIsAutoDocTypeMode(isAutoDocTypeMode);

          document.getElementById('startButton').disabled = false;
          document.getElementById('stopButton').disabled = false;
          document.getElementById('disposeButton').disabled = false;
        })
        .catch((e) => {
            document.getElementById("results").innerHTML = e;
        });
  }

  function onStartButtonClick() {
    var session_token = veridoc.start();
    console.log('sesion_token is: ' + session_token);
  }

function showResults(data) {
    var allResults = "";
    for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
            var propValue = data[prop].replace(/</g, "&lt;");
            
            if (prop.includes('picture') || prop.includes('personal_signature') ||
                    prop.includes('image')) {
                allResults += prop + ': ' + propValue.substring(0, 20) + '... </br>';
            } else {
                allResults += prop + ': ' + propValue + ' </br>';
            }
        }
    }
    
    document.getElementById("results").innerHTML = allResults;
}

function checkRecognitionWarnings() {
    var recognitionWarnings = veridoc.getRecognitionWarnings();
    if (recognitionWarnings.includes(RecognitionWarning.DOCUMENT_EXPIRED)) {
        console.log('This document expired!');
    }
    if (recognitionWarnings.includes(RecognitionWarning.INCONSISTENT_TRANSLITERATION)) {
        console.log('Transliteration check fail warning!');
    }
}

function successCallback(data) {
    showResults(data);
    checkRecognitionWarnings();
}

function errorCallback(data) {
    showResults(data);
}

function gotPhotoCallback() {}

  useEffect(() => {
    onInitializeButtonClick()
  },[])

  return (
    <div className='veridoc'>
      <button onClick={() => onStartButtonClick()} id="startButton" autocomplete="off">Start scanning</button>
      <div>
        <div id="id_veridoc"></div>
      </div>

      <h3>Results of scanning:</h3>
      <p id="results">No scanning results yet</p>
    </div>
  )
}

export default Veridoc