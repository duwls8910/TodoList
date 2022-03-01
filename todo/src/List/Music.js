import { useState, useEffect } from "react";
//import Sound from 'react-sound'; 
import song from '../task.mp3';

function Music (){
    //let url = 'https://www.youtube.com/watch?v=lgJOYdYBTnM&ab_channel=%EC%9B%94%EA%B0%84%EC%9C%A4%EC%A2%85%EC%8B%A0';
    //let song = "내일 할 일 (with 성시경).mp3";

    //const [audio] = useState(new Audio(song))
    let audio = new Audio("../task.mp3")

    const [playing, setPlaying] = useState(false); //오디오 컨트롤할 수 있는 상태

    //const song = require('./task.mp3');
    //const sound = () => <audio src={song} autoPlay/>
    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  


    return(
        <section>
          <div>
            <button onClick={toggle}>{playing? "Pause" : "Play"}</button>
            <button onClick={audio.play()} > Test button </button>
          </div>
        </section>
        );
    }
    
    

export default Music;