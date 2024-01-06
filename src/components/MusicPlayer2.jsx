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
import { useEffect, useState } from 'react'; 
import useSound from 'use-sound';
const songs = [ASHES, DISCONNECT, DANCE];
const songTitles = ['Ashes to Ashes', 'disConnect', 'Moonlight Dance'];

function MusicPlayer2() {
    return (
        <audio src = {ASHES} preload = 'metadata'>

        </audio>
    )
}

export default MusicPlayer2;