'use client'
import React, {useEffect, useRef} from "react";

const MouseBlob: React.FC = () => {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blob = blobRef.current;

        if(!blob) return;
        const handleMouse = (e: MouseEvent)=>{
            const x = e.clientX;
            const y = e.clientY;

            blob.style.transform = `translate(${x - 250}px, ${y - 250}px) scale(1.0)`
        };

        window.addEventListener('mousemove', handleMouse);
        return ()=>{
            window.removeEventListener('mousemove', handleMouse);
        };
    }, []);
    return (
        <div
        ref={blobRef} 
            className="fixed z-0 
                       w-[700px] h-[700px] 
                       bg-purple-500/30 
                       rounded-full 
                       transition-transform duration-300 ease-out 
                       filter blur-3xl opacity-50 
                       pointer-events-none"
        ></div>
    )
}
export default MouseBlob;