import React, { useRef } from 'react'

export default function PlaySound({ source, children }: { source: string; children: React.ReactNode }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    function toggleSound() {
        if(audioRef.current) {
            audioRef.current.play();
        }
    };

    return(
        <div onMouseEnter={toggleSound}>
            <audio ref={audioRef} src={source}/>
            {children}
        </div>
    )
};