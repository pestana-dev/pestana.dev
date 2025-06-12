import React from "react";
import { useEffect, useRef, useState } from "react";
import styles from "../assets/BackgroundVideo.module.css"; // estilo separado para clareza

const valentinesDay = () => {
const videoRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStartVideo = () => {
    if (videoRef.current && !started) {
      videoRef.current.muted = false;
      videoRef.current.volume = 0.6;
      videoRef.current.play().catch((err) => {
        console.error('Erro ao tentar reproduzir vídeo:', err);
      });
      setStarted(true);
    }
  };

  useEffect(() => {
    // Dispara play no primeiro clique ou toque
    window.addEventListener('click', handleStartVideo);
    window.addEventListener('touchstart', handleStartVideo);

    return () => {
      window.removeEventListener('click', handleStartVideo);
      window.removeEventListener('touchstart', handleStartVideo);
    };
  }, [started]);



  return (
    <div className={styles.backgroundContainer}>
      <video
        className={styles.backgroundVideo}
        loop
        playsInline
        ref={videoRef}
      >
        <source
          src="/videos/background-video-valentines-day.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      <div className={styles.content}>
        <h1>Obrigada por aparecer na minha vida, Gustavo.</h1>
        <h2>Feliz primeiro dia dos namorados 💕</h2>
        <p>
          Que tenhamos mais dias como o de hoje, e que possamos celebrar nossas
          conquistas como o de poder te chamar de meu amor.
        </p>
      </div>
    </div>
  );
};

export default valentinesDay;
