import { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);
  const [time, setTime] = useState(0);

  // 👉 added: trail state (no removal of your logic)
  const [trail, setTrail] = useState(
    Array.from({ length: 12 }, () => ({ x: 0, y: 0 }))
  );

  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on mobile
    if (window.innerWidth < 768) {
      setIsDesktop(false);
      return;
    }

    let currentX = 0;
    let currentY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      // Smooth follow (lag effect)
      currentX += (mouseRef.current.x - currentX) * 0.12;
      currentY += (mouseRef.current.y - currentY) * 0.12;

      setPosition({ x: currentX, y: currentY });

      // 🌞 smooth pulse timing
      setTime((t) => t + 0.05);

      // 👉 added: trail logic (does not replace your cursor)
      setTrail((prev) => {
        const next = [...prev];

        // head follows smoothed cursor
        next[0] = { x: currentX, y: currentY };

        // chain follow
        for (let i = 1; i < next.length; i++) {
          next[i] = {
            x: next[i].x + (next[i - 1].x - next[i].x) * 0.25,
            y: next[i].y + (next[i - 1].y - next[i].y) * 0.25,
          };
        }

        return next;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* 👉 original cursor (kept intact) */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(191,219,254,1) 0%, rgba(59,130,246,0.9) 40%, rgba(37,99,235,0.6) 70%, transparent 100%)",

            // 🌞 smooth breathing scale
            transform: `scale(${1 + Math.sin(time) * 0.15})`,

            // 🌞 dynamic glow
            boxShadow: `
              0 0 ${15 + Math.sin(time) * 10}px rgba(59,130,246,0.9),
              0 0 ${40 + Math.sin(time) * 20}px rgba(96,165,250,0.6),
              0 0 ${80 + Math.sin(time) * 30}px rgba(147,197,253,0.4)
            `,
          }}
        ></div>
      </div>

      {/* 👉 added: tail (sun-style applied per segment) */}
      {trail.map((p, i) => {
        const t = time - i * 0.06;
        const pulse = 1 + Math.sin(t) * 0.15;
        const fade = 1 - i / trail.length;

        return (
          <div
            key={i}
            className="fixed pointer-events-none z-[9998]"
            style={{
              transform: `translate(${p.x - 10}px, ${p.y - 10}px) scale(${pulse})`,
              opacity: fade,
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(191,219,254,1) 0%, rgba(59,130,246,0.9) 40%, rgba(37,99,235,0.6) 70%, transparent 100%)",

                boxShadow: `
                  0 0 ${15 * fade}px rgba(59,130,246,0.9),
                  0 0 ${40 * fade}px rgba(96,165,250,0.6),
                  0 0 ${80 * fade}px rgba(147,197,253,0.4)
                `,
              }}
            />
          </div>
        );
      })}
    </>
  );
};

export default Cursor;