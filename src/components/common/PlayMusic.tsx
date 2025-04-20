import { useEffect, useRef, useState} from "react"
import playIcon from "../../assets/icons/play.png"
import pauseIcon from "../../assets/icons/pause.png"
import music from "../../assets/music/Moonlighter-Tired-Rynoka.mp3" 

export default function PlayMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(pauseIcon);
    const audioRef = useRef<HTMLAudioElement>(null);

    function togglePlay() {
        if(isPlaying == false) {
            setIsPlaying(true);
            setToggleIcon(playIcon);
            audioRef.current.play();
        } else {
            setIsPlaying(false);
            setToggleIcon(pauseIcon);
            audioRef.current.pause();
        }
    }

    /*
    useEffect(() => {
        const handleUserInteraction = () => {
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => {
                        setIsPlaying(true);
                        setToggleIcon(playIcon);
                    })
                    .catch((err) => {
                        console.error("Still blocked:", err);
                    });
            }
    
            // Remove listener after first interaction
            window.removeEventListener("click", handleUserInteraction);
        };
    
        window.addEventListener("click", handleUserInteraction);
    
        return () => window.removeEventListener("click", handleUserInteraction);
    }, []);
    */

    return (
        <div>
            <audio ref={audioRef} src={music} loop={true}/>
            <button className="button flex justify-center items-center align-middle gap-2" onClick={togglePlay}><img className="h-4" src={toggleIcon}/>Play</button>
        </div>
    )
}