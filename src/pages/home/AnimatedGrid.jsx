// components/AnimatedGrid.jsx
import { useEffect, useRef } from 'react';

const AnimatedGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawGrid = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cellSize = 50;
      const lineWidth = 0.5;
      
      ctx.clearRect(0, 0, width, height);
      
      // Draw horizontal lines
      ctx.beginPath();
      for (let y = 0; y <= height; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      
      // Draw vertical lines
      for (let x = 0; x <= width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
      ctx.lineWidth = lineWidth;
      ctx.stroke();

      // Draw moving lines
      const time = Date.now() * 0.0005;
      
      // Horizontal moving line
      ctx.beginPath();
      const movingY = (Math.sin(time) * 0.5 + 0.5) * height;
      ctx.moveTo(0, movingY);
      ctx.lineTo(width, movingY);
      ctx.strokeStyle = 'rgba(150, 150, 150, 0.3)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Vertical moving line
      ctx.beginPath();
      const movingX = (Math.cos(time * 0.7) * 0.5 + 0.5) * width;
      ctx.moveTo(movingX, 0);
      ctx.lineTo(movingX, height);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    drawGrid();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default AnimatedGrid;