import React from "react";
import { useEffect, useRef } from "react";
import styles from "../assets/BackgroundVideo.module.css"; // estilo separado para clareza

const valentinesDay = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.6; // volume entre 0.0 e 1.0
    }
  }, []);

  return (
    <div className={styles.backgroundContainer}>
      <video
        className={styles.backgroundVideo}
        autoPlay
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
