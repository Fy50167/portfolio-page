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
import { useEffect, useState, memo } from 'react'; 
import useSound from 'use-sound';
const songs = [ASHES, DISCONNECT, DANCE];
const songTitles = ['Ashes to Ashes', 'disConnect', 'Moonlight Dance'];

function MusicPlayer() {

    const [song, setSong] = useState(songs[0]);
    const [songTitle, setSongTitle] = useState(songTitles[0]);
    const [index, setIndex] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const changeSong = ((i) => {
      setIndex(i);
      setSong(songs[i]);
      setSongTitle(songTitles[i]);
      pause();
      setIsPlaying(false);
    });


    const [play, { pause, duration, sound }] = useSound(song, { volume: 0.5 });
    console.log(songTitle);
    
    const forwardSong = () => {
      if (index + 1 == songs.length) {
        changeSong(0);
      } else {
        changeSong(index + 1);
      }
    };

    const backwardSong = () => {
      if (index==0) {
        changeSong(songs.length - 1);
      } else {
        changeSong(index - 1);
      }
    };

    const [time, setTime] = useState({
      min: "",
      sec: ""
    });

    const [currTime, setCurrTime] = useState({
      min: "",
      sec: ""
    });

    const [seconds, setSeconds] = useState();

    useEffect(() => {
      if (duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTime({
          min: min,
          sec: secRemain
        });
      }
    }, [duration]);

    
    useEffect(() => {
      const interval = setInterval(() => {
        if (sound) {
          setSeconds(sound.seek([]));
          const min = Math.floor(sound.seek([]) / 60);
          const sec = Math.floor(sound.seek([]) % 60);
          setCurrTime({
            min,
            sec
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound]);

    
    const changeButton = () => {
        if (isPlaying) {
          pause(); 
          setIsPlaying(false);
        } else {
          play();
          setIsPlaying(true);
        }
      };
    
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
            <img className = 'close position-absolute mouse-pointer' src = {CLOSE} onClick = {expandCollapse} />
            <h2 className = 'stylized'>Music Player</h2>
            <img src = {AVATAR} alt = 'avatar' className = 'avatar' />
            <h3 className = 'stylized'>{songTitle}</h3>

            <div>
                <div className= 'd-flex justify-content-center'>
                    <p>
                        {currTime.min}:{currTime.sec}/
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>
                    <input
                      type="range"
                      min="0"
                      max={duration / 1000}
                      default="0"
                      value={seconds}
                      className="duration mouse-pointer"
                      onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />
            </div>
            
            
            <div className = 'music-controls d-flex align-items-center justify-content-evenly w-100 px-4'>
                <img src = {BACK} alt = 'back button' className = 'control-btn mouse-pointer' onClick = {backwardSong}/>
                <img src = {( isPlaying ? PAUSE : PLAY)} alt = 'play/pause' className = 'control-btn mouse-pointer' onClick = {changeButton}/>
                <img src = {NEXT} alt = 'next button' className = 'control-btn mouse-pointer' onClick = {forwardSong}/>
            </div>
         </div>
          )} 
        </>
    )
}

export default memo(MusicPlayer);