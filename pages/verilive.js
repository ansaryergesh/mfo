import axios from 'axios'
import { useEffect, useState } from "react";
import { dataURLtoFile } from "../defaults/dataUrlToFile";

const Verilive = () => {
  const base64string = 'data:image/jpeg;base64,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'
  const [livePhoto, setLivePhoto] = useState(null)
  const  config = {
    'recordVideo': false,
    'rotated': false,
    'lang': "kz",

    'render': {
        'oval': true,
        'faceContourInsteadOfOval': true,
        'ovalRingColor': {
            'default': '#F5F542',
            'actionSuccess': '#00F500',
            'actionFailure': '#F50000',
            'sessionSuccess': '#00F500',
            'sessionFailure': '#F50000',
        },
        'ovalWidth': 1.0,

        'overlay': true,
        'overlayColor': {
            'default' : '#2F4F4F',
        },
        'overlayTransparency': {
            'default': 0.55,
        },

        'arrow': true,
        'arrowColor': {
            'default': '#F0F0F0',
        },
        'arrowProgressColor': {
            'default': '#404040',
        },

        'hint': true,
        'hintTextColor': {
            "default": "#C8C9CC",
        },
        'hintFontType': "Arial",
        'hintUseProgressiveFontSize': true,
        'hintProgressiveFontSizeMultiplier': 1.0,
        'hintFontSize': 25,
        "hintCloudColor": {
            "default": "#2D312F",
        },
    },

    'hints': {
        'noHint': '',
        'noFace': 'Вас Не Видно',
        'badLight': "Выравните Освещение",
        'closer': 'Ближе',
        'away': 'Отдалитесь',
        'closerToCenter': 'Ближе к Центру Экрана',

        'targetLeft': 'Медленно Поворачивайте Голову Влево',
        'targetRight': 'Медленно Поворачивайте Голову Вправо',
        'targetCenter': 'Посмотрите Прямо',

        'sessionSuccess': 'Вы Прошли!',
        'sessionFailure': 'Вы Не Прошли!',
        'sessionError': 'Произошла какая-то ошибка. Попробуйте перезапустить',
    },

  };
  function successCallback(data) {
    // E.g. Show results to user
    document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
  }

  // Failure VeriLive json results
  function failCallback(data) {
    // E.g. Show to user, say to retry again
    document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
  }

  function errorCallback(data) {
    // E.g. Show to user, say to retry again
    const base64img = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    document.getElementById("results").innerHTML = JSON.stringify(data, undefined, 2).replace(/</g, "&lt;");
    setLivePhoto(dataURLtoFile(base64img))
  }

  function updateCallback(data) {
    // console.log(data);
  }

  function onStartButtonClick() {
    const token = verilive.start();
    console.log(verilive.name + ': Token - ' + token);
  }

  function checkButton() {
    var bodyFormData = new FormData();
    console.log(process.env.BIO_KEY)
    fetch(base64string)
      .then(blob=> {
        const file = new File([blob], 'photo.jpeg')
        bodyFormData.append('photo', file)
        bodyFormData.append('doc', file)
        const API_URL = 'https://services.verigram.ai:8443/veriface'
        
        fetch(API_URL, {
          method: 'POST',
          body: bodyFormData,
          headers: {
            apikey: process.env.BIO_KEY
          }
        })
          .then(res => res.json())
          .then(res=>{
            console.log(bodyFormData.get('doc'))
            console.log(res)
          })
          .catch(err=> {
            console.log(bodyFormData.get('doc'))
            console.log(err)
          })
        // axios({
        //   method: "post",
        //   url: API_URL,
        //   data: bodyFormData,
        //   headers: { "Content-Type": "multipart/form-data", apiKey: 'PeeKMaNIX9dNL2pB2433rs7zwrs28gGZ'},
        // })
        // .then(function (response) {
        //   //handle success
        //   console.log(response);
        // })
        // .catch(function (response) {
        //   //handle error
        //   console.log(response);
        // });
      })
       

    
  }

  function onStopButtonClick() {
    verilive.stop();
  }
  


  useEffect(() => {
    // verilive.init(url, apiKey, successCallback, failCallback, errorCallback, updateCallback, config)
  },[])
  return (
    <div>
      {`${livePhoto}`}
      <button className='vrbtn' id="start" onClick={() => onStartButtonClick()}>Start</button>
      <button className='vrbtn' id="stop" onClick={() => onStopButtonClick()}>Stop</button>
      <button className='check' onClick={() => checkButton()}>Check</button>
      {/* <div id="id_verilive"></div> */}

      <pre id="results"></pre>
    </div>
  )
}

export default Verilive;