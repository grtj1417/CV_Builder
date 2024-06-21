import { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio
                ref={audioRef}
                src="BubbleGum.mp3"
                autoPlay
                controls
                loop
                style={{ display: 'none' }}
            />
            <button className='control-music' onClick={togglePlayPause}>
                {isPlaying && <img className='mute' src="./images/mute.png"></img>}
                {!isPlaying && <img className='music' src="./images/music.svg"></img>}
            </button>
        </div>
    );
};

export default AudioPlayer;
