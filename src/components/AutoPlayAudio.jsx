import { useEffect, useRef } from 'react';
import cowboy from '../assets/Cowboy.mp3';

function AutoPlayAudio({ src, volume = 0.08 }) {
  const audioRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const url = src || cowboy;
    const audio = new Audio(url);
    audio.volume = volume;
    audioRef.current = audio;

    const stop = () => {
      if (!audioRef.current) return;
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      audioRef.current.play().catch(() => {
        startedRef.current = false;
      });
    };

    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
      const resumeOnce = () => {
        start();
        document.removeEventListener('click', resumeOnce);
        document.removeEventListener('keydown', resumeOnce);
        document.removeEventListener('touchstart', resumeOnce);
        document.removeEventListener('pointerdown', resumeOnce);
      };
      document.addEventListener('click', resumeOnce, { once: true });
      document.addEventListener('keydown', resumeOnce, { once: true });
      document.addEventListener('touchstart', resumeOnce, { once: true });
      document.addEventListener('pointerdown', resumeOnce, { once: true });
    });

    return () => {
      stop();
    };
  }, [src, volume]);

  return null;
}

export default AutoPlayAudio;
