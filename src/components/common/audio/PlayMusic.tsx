import { useRef, useState, useEffect } from "react"
import { songs } from "../../../constants/index"
import Slider from "./slider/Slider"
import playIcon from "../../../assets/icons/music/play.png"
import pauseIcon from "../../../assets/icons/music/pause.png"
import nextSong from "../../../assets/icons/music/next-song.png"

export default function PlayMusic() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [toggleIcon, setToggleIcon] = useState(pauseIcon);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [hovered, setHovered] = useState<number | null>(null);
    const [index, setIndex] = useState<number>(0);
    const [volume, setVolume] = useState(0.5); 
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function togglePlay() {
        if(isPlaying == false) {
            setIsPlaying(true);
            setToggleIcon(playIcon);
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            setIsPlaying(false);
            setToggleIcon(pauseIcon);
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }

    function playNextSong() {
        let current = 0;

        if(index < (songs.length - 1)) {
            current = index + 1;
        } else {
            current = 0;
        }

        setIndex(current);

        setIsPlaying(true);
        setToggleIcon(playIcon);

        if(audioRef.current) {
            audioRef.current.pause();
            audioRef.current.play();
        }
    }

    function playPreviousSong() {
        let current = 0;

        if(index > 0) {
            current = index - 1;
        } else {
            current = (songs.length - 1);
        }

        setIndex(current);

        setIsPlaying(true);
        setToggleIcon(playIcon);
    }

    const volumeRef = useRef(volume);

    useEffect(() => {
    volumeRef.current = volume;
    }, [volume]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.volume = volumeRef.current;
            audioRef.current.play().catch((err) => {
                if (err.name !== "NotAllowedError") {
                    console.error("Unexpected audio play error:", err);
                }
            });
        }
    }, [index]);

    useEffect(() => {
        if (audioRef.current) {
          audioRef.current.volume = volume;
        }
    }, [volume]);

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
        <div 
        onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            setHovered(1);
        }}

        onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => setHovered(null), 300);
        }}
        >
            <audio key={index} ref={audioRef} src={songs[index].songUrl} loop={true}/>
            <button className="button flex justify-center items-center align-middle gap-2" onClick={togglePlay}><img className="h-4" src={toggleIcon}/>Play</button>

            {hovered === 1 && (
                <div className="absolute left-35 top-8 h-70 w-110 border-1 border-gray-800 mt-1 px-2 py-1 rounded-lg backdrop-blur-md bg-white/0 text-white text-sm z-10" 
                onMouseEnter={() => {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setHovered(1);
                }}
                    onMouseLeave={() => {
                    timeoutRef.current = setTimeout(() => setHovered(null), 300);
                }}
                >
                    
                    <div className="h-[70%] relative bottom-1 flex content-center items-center g-amber-300">
                        
                        <div className="h-33 w-33 ml-9 rounded-2xl bg-amber-50 overflow-hidden">
                            <img src={songs[index].imgUrl} className="h-fill w-auto rounded-2xl object-cover"/>
                        </div>
                        
                        <div className="flex-col pl-6 justify-center text-left content-center">
                            <p className="text-2xl pb-3">{songs[index].name}</p>
                            <p className="text-sm">{songs[index].game}</p>
                        </div>

                    </div>

                    <div className="h-[30%] w-auto relative bottom-3 flex-col justify-center items-center content-center text-center g-amber-300">
                        <div className="w-full flex justify-evenly pb-6 pt-1 gap-21">
                            <button><img onClick={playPreviousSong} src={nextSong} className="button h-8 rotate-180 invert"/></button>
                            <button><img onClick={togglePlay} src={toggleIcon} className="relative right-[1px] button h-7 invert"/></button>
                            <button><img onClick={playNextSong} src={nextSong} className="button h-8 invert"/></button>
                        </div>

                        <div className="relative bottom-1">
                        <Slider audioRef={audioRef} volume={volume} setVolume={setVolume} />

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}