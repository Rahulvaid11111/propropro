'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function VideoBackground({ 
  videoSrc = '/videos/background.mov',
  fallbackImage = '/images/video-fallback.jpg',
  overlay = true,
  overlayOpacity = 0.6 
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Only load video after component mounts (client-side)
    setShowVideo(true);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Fallback Image - Always visible until video loads */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={fallbackImage}
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={75}
        />
      </div>

      {/* Video - Only loads on client side */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setIsVideoLoaded(false)}
        >
          <source src={videoSrc} type="video/quicktime" />
          <source src={videoSrc.replace('.mov', '.mp4')} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0" 
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        ></div>
      )}
    </div>
  );
}
