import ASHES from '../assets/Ashes to Ashes (Mastered).mp3';
import DISCONNECT from '../assets/disConnect.mp3';
import DANCE from '../assets/Moonlight Dance (Mastered).mp3';
import AVATAR from '../assets/KD_Avatar_Circle.png';
import PLAY from '../assets/play.png';
import PAUSE from '../assets/pause.png';
import NEXT from '../assets/next.png';
import BACK from '../assets/back.png';
import MUSIC from '../assets/music.png';
import CLOSE from '../assets/close.png';
import { useEffect, useState, useRef } from 'react'; 
const songs = [ASHES, DISCONNECT, DANCE];
const songTitles = ['Ashes to Ashes', 'disConnect', 'Moonlight Dance'];

function MusicPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);

    const musicPlayer = useRef();

    const playPause = () => {
      setIsPlaying(!isPlaying);
    }

    const expandCollapse = () => {
      if (isCollapsed) {
        setIsCollapsed(false);
      } else {
        setIsCollapsed(true);
      }
    }

    

    return (
        <>
          {(isCollapsed?
            <div className = 'position-fixed btn music-player d-flex justify-content-center align-items-center' onClick = {expandCollapse}>
              <img className = 'music-logo' src = {MUSIC} />
            </div>
          :
          <div className = 'position-fixed d-flex flex-column justify-content-evenly align-items-center music-player open py-3'>
            <audio ref = {musicPlayer} src = {ASHES} preload = 'metadata'></audio>
            <img className = 'close position-absolute mouse-pointer' src = {CLOSE} onClick = {expandCollapse} />
            <h2 className = 'stylized'>Music Player</h2>
            <img src = {AVATAR} alt = 'avatar' className = 'avatar' />
            <h3 className = 'stylized'>{songTitle}</h3>

            <div>
                <div className= 'd-flex justify-content-center'>
                    <p>
                        0:0
                    </p>
                    <p>
                        0:0
                    </p>
                </div>
                    <input
                      type="range"
                  />
            </div>
            
            
            <div className = 'music-controls d-flex align-items-center justify-content-evenly w-100 px-4'>
                <img src = {BACK} alt = 'back button' className = 'control-btn mouse-pointer'/>
                <img src = {( isPlaying ? PAUSE : PLAY)} alt = 'play/pause' className = 'control-btn mouse-pointer' onClick = {playPause}/>
                <img src = {NEXT} alt = 'next button' className = 'control-btn mouse-pointer'/>
            </div>
         </div>
          )} 
        </>
    )
}

export default MusicPlayer;