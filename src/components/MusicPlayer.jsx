import songlist from '../utils/audio';
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
    const [songIndex, setSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(songlist[0]);

    const musicPlayer = useRef();
    const progressBar = useRef();
    const hasPageBeenRendered = useRef(false);
    const pageRendered2 = useRef(false);

    useEffect(() => {
      if (hasPageBeenRendered.current) {
        musicPlayer.current.play();
        musicPlayer.current.volume = 0.4;
        setIsPlaying(true);
      }
      hasPageBeenRendered.current = true;
    }, [currentSong]);

    useEffect(() => {
        if (currentTime === duration && duration !== 0) {
          goForward();
        }
      pageRendered2.current = true;
    }, [currentTime]);

    const calculateTime = (secs) => {
      const minutes = Math.floor(secs / 60);
      const seconds = Math.floor(secs % 60);
      const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${minutes}:${returnedSeconds}` 
    }

    const playPause = () => {
      const prevValue = isPlaying;
      setIsPlaying(!prevValue);
      if (!prevValue) {
        musicPlayer.current.play();
        musicPlayer.current.volume = 0.6;
      } else {
        musicPlayer.current.volume = 0.6;
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

    const setTimes = () => {
      setDuration(Math.floor(musicPlayer.current.duration));
      setCurrentTime(Math.floor(musicPlayer.current.currentTime));
    }

    const changeTime = () => {
      setCurrentTime(Math.floor(musicPlayer.current.currentTime));
      progressBar.current.value = currentTime/duration * 100;
    }

    const moveInSong = () => {
      musicPlayer.current.currentTime = progressBar.current.value / 100 * duration;
    }

    const changeSong = ((i) => {
      setSongIndex(i);
      setCurrentSong(songlist[i]);
    });
    
    const goBack = () => {
      if (songIndex === 0) {
        changeSong(songlist.length - 1);
      } else {
        changeSong(songIndex - 1);
      }
    };

    const goForward = () => {
      if (songIndex === songlist.length - 1) {
        changeSong(0);
      } else {
        changeSong(songIndex + 1)
      }
    };

    return (
        <>
          <audio ref = {musicPlayer} src = {currentSong.url} onLoadedMetadata = {setTimes} onTimeUpdate={changeTime}></audio>
          
          {(isCollapsed?
            <div className = 'position-fixed btn music-player d-flex justify-content-center align-items-center' onClick = {expandCollapse}>
              <img className = 'music-logo' src = {MUSIC} />
            </div>
          :
          <div className = 'position-fixed d-flex flex-column justify-content-evenly align-items-center music-player open py-3'>
            <img className = 'close position-absolute mouse-pointer' src = {CLOSE} onClick = {expandCollapse} />
            <h2 className = 'stylized'>Music Player</h2>
            <img src = {AVATAR} alt = 'avatar' className = 'avatar' />
            <h3 className = 'stylized'>{currentSong.title}</h3>

            <div>
                <div className= 'd-flex justify-content-center'>
                    <p>
                        {calculateTime(currentTime)}/
                    </p>
                    <p>
                        {duration && calculateTime(duration)}
                    </p>
                </div>
                    <input
                      type="range"
                      ref = {progressBar}
                      defaultValue = '0'
                      className = 'duration'
                      onChange = {moveInSong}
                  />
            </div>
            
            
            <div className = 'music-controls d-flex align-items-center justify-content-evenly w-100 px-4'>
                <img src = {BACK} alt = 'back button' className = 'control-btn mouse-pointer' onClick = {goBack}/>
                <img src = {( isPlaying ? PAUSE : PLAY)} alt = 'play/pause' className = 'control-btn mouse-pointer' onClick = {playPause}/>
                <img src = {NEXT} alt = 'next button' className = 'control-btn mouse-pointer' onClick = {goForward}/>
            </div>
         </div>
          )} 
        </>
    )
}

export default MusicPlayer;