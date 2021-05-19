import {useEffect} from "react"

const VideoRecord = () => {

  useEffect(() => {
    let div = document.getElementsByClassName('videorecord')
    let start = document.getElementsByClassName('start')
    let stop = document.getElementsByClassName('stop')

    navigator
      .mediaDevices
      .getUserMedia({video: true})
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
         document.querySelector('.start').addEventListener('click', function () {
          mediaRecorder.start();
        });
        let audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", function (event) {
          audioChunks.push(event.data);
        });

  
        document.querySelector('.stop').addEventListener('click', function () {
          mediaRecorder.stop();
        });

        mediaRecorder.addEventListener("stop", function () {
          const audioBlob = new Blob(audioChunks, {type: "video/webm"});

          let fd = new FormData();
          fd.append('voice', audioBlob);
          sendVoice(fd);
          audioChunks = [];
        });
      });

    async function sendVoice(form) {
      let promise = await fetch(URL, {
        method: 'POST',
        body: form
      });
      if (promise.ok) {
        let response = await promise.json();
        console.log(response.data);
        audio.src = response.data;
        audio.controls = true;
        audio.autoplay = true;
        document
          .querySelector('#messages')
          .appendChild(audio);
      }
    }
  }, [])
  return (
    <div className='otherPages videorecord'>
      <button className='start'>Старт</button>
      <button className='stop'>Стоп</button>

      <div id='messages'>asdasd</div>
    </div>
  )
}

export default VideoRecord