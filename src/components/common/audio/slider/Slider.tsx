import React, { useEffect, useRef } from "react";
import "./Slider.css";

interface SliderMusicProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const SliderMusic: React.FC<SliderMusicProps> = ({ audioRef, volume, setVolume }) => {
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (sliderRef.current) {
      const percent =
        ((volume - Number(sliderRef.current.min)) /
          (Number(sliderRef.current.max) - Number(sliderRef.current.min))) *
        100;
      sliderRef.current.style.setProperty("--progress", `${percent}%`);
    }

    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    <input
      ref={sliderRef}
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={(e) => setVolume(parseFloat(e.target.value))}
      className="slider-music"
    />
  );
};

export default SliderMusic;
