import { useState, useEffect } from "react";

function Music (){
    // let url = 'https://www.youtube.com/watch?v=UdVjs8bH8Jo';
    
    // const [audio, setAudio] = useState(new Audio(url))
    // const [playing, isPlaying] = useState(false);

    // const toggle  = () => isPlaying(!playing);

    // useEffect(() => {
    //     playing ? audio.play() : audio.pause;
    //     },
    // [playing]
    // );

    // useEffect(() => {
    //     audio.addEventListener('ended', () => isPlaying(false));
    //     return () => {
    //       audio.removeEventListener('ended', () => isPlaying(false));
    //     };
    //   }, []);

    // return(
    //     <section>
    //       <div>
    //         <button onClick={toggle}>{playing? "Pause" : "Play"}</button>
    //       </div>
    //     </section>
    //     );
}


export default Music;