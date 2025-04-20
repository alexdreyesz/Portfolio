import React, { useRef } from 'react'

export default function PlaySound({ source, children }: { source: string; children: React.ReactNode }) {
    const audioRef = useRef(null);

    function toggleSound() {
        audioRef.current.play();
    };

    return(
        <div onMouseEnter={toggleSound}>
            <audio ref={audioRef} src={source}/>
            {children}
        </div>
    )
};