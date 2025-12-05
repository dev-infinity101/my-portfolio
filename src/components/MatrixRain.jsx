import { useEffect, useRef } from 'react';

const MatrixRain = ({ onComplete }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters - Katakana + Latin + Numbers
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%"\'#&_(),.;:?!\\|{}<>[]^~';
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    let animationId;
    let opacity = 1;
    const fadeStartTime = Date.now() + 8000; // Start fading out after 8 seconds
    const duration = 2000; // Total duration 10 seconds

    const draw = () => {
      // Translucent background to show trail
      ctx.fillStyle = 'rgba(11, 11, 11, 0.05)'; // Using the dark background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00FF88'; // Neon Green
      ctx.font = `${fontSize}px "Geist Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Sending the drop back to the top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Handle fade out
      const now = Date.now();
      if (now > fadeStartTime) {
        // Calculate opacity based on remaining time
        const remaining = duration - (now - (fadeStartTime - 8000)); // rough estimate
        // Better: calculate based on 10s total
        // Actually let's just control opacity of the canvas container
      }
      
      animationId = requestAnimationFrame(draw);
    };

    draw();

    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, duration);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none bg-black"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default MatrixRain;
