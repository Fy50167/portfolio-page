import { songlist } from '../utils/audio';
import AVATAR from '../assets/KD_Avatar_Circle.png';
import PLAY from '../assets/play.png';
import PAUSE from '../assets/pause.png';
import NEXT from '../assets/next.png';
import BACK from '../assets/back.png';
import MUSIC from '../assets/music.png';
import CLOSE from '../assets/close.png';
import { useEffect, useState, useRef } from 'react'; 

function MusicPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [songs, setSongs] = useState(songlist);
    const [currentSong, setCurrentSong] = useState(songlist[0]);

    const musicPlayer = useRef();
    const progressBar = useRef();

    useEffect(() => {
      setCurrentTime(musicPlayer.current.currentTime);
    }, [musicPlayer.current.currentTime]);

    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = secs < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes} : ${returnedSeconds}` 
    }

    const playPause = () => {
      const prevValue = isPlaying
      setIsPlaying(!prevValue);
      if (!prevValue) {
        musicPlayer.current.play();
      } else {
        musicPlayer.current.pause();
      }
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
            <audio ref = {musicPlayer} src = {currentSong.url} onLoadedmetadata = {() => setDuration(Math.floor(musicPlayer.current.duration))} onTimeUpdate={() => setCurrentTime(Math.floor(musicPplayer.current.currentTime))}></audio>
            <img className = 'close position-absolute mouse-pointer' src = {CLOSE} onClick = {expandCollapse} />
            <h2 className = 'stylized'>Music Player</h2>
            <img src = {AVATAR} alt = 'avatar' className = 'avatar' />
            <h3 className = 'stylized'></h3>

            <div>
                <div className= 'd-flex justify-content-center'>
                    <p>
                        0:0
                    </p>
                    <p>
                        {(duration) && calculateTime(duration)}
                    </p>
                </div>
                    <input
                      type="range"
                      ref = {progressBar}
                      defaultValue = '0'
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