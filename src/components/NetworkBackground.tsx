import React, { useEffect, useRef } from 'react';

export const NetworkBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate abstract talent network nodes
    const nodeCount = Math.min(Math.floor(width / 35), 45);
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      pulseSpeed: number;
      pulsePhase: number;
      isHighlighted?: boolean;
    }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.15,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
        isHighlighted: Math.random() > 0.85
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines occasionally
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw connections
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        if (nodeA.x < 0) nodeA.x = width;
        if (nodeA.x > width) nodeA.x = 0;
        if (nodeA.y < 0) nodeA.y = height;
        if (nodeA.y > height) nodeA.y = 0;

        nodeA.pulsePhase += nodeA.pulseSpeed;

        // Check connection to other nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.strokeStyle = nodeA.isHighlighted || nodeB.isHighlighted 
              ? `rgba(16, 185, 129, ${alpha * 1.5})` 
              : `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }

        // Connection to mouse
        const mdx = nodeA.x - mouseX;
        const mdy = nodeA.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 180) {
          const mAlpha = (1 - mdist / 180) * 0.4;
          ctx.strokeStyle = `rgba(16, 185, 129, ${mAlpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw node
        const currentAlpha = nodeA.baseAlpha + Math.sin(nodeA.pulsePhase) * 0.15;
        ctx.fillStyle = nodeA.isHighlighted 
          ? `rgba(16, 185, 129, ${Math.max(0.3, currentAlpha * 1.8)})` 
          : `rgba(226, 232, 240, ${Math.max(0.1, currentAlpha)})`;
        ctx.beginPath();
        ctx.arc(nodeA.x, nodeA.y, nodeA.isHighlighted ? nodeA.radius * 1.4 : nodeA.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle glow for highlighted nodes
        if (nodeA.isHighlighted) {
          ctx.fillStyle = 'rgba(16, 185, 129, 0.08)';
          ctx.beginPath();
          ctx.arc(nodeA.x, nodeA.y, nodeA.radius * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-40" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        aria-hidden="true"
      />
    </>
  );
};
