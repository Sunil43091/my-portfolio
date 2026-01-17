import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef(null);
  const ballRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ball = ballRef.current;
    if (!dot || !ball) return;

    // Mouse position
    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    // Dot & Ball positions
    const dotPos = { ...mouse };
    const ballPos = { ...mouse };

    // Speed control (1–10)
    const speed = 1;
    const dotRatio = 0.2 * speed;
    const ballRatio = 0.1 * speed;

    // Center both elements
    gsap.set([dot, ball], {
      xPercent: -50,
      yPercent: -50,
    });

    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const update = () => {
      // Dot follows mouse
      dotPos.x += (mouse.x - dotPos.x) * dotRatio;
      dotPos.y += (mouse.y - dotPos.y) * dotRatio;

      gsap.set(dot, {
        x: dotPos.x,
        y: dotPos.y,
      });

      // Ball follows dot
      ballPos.x += (dotPos.x - ballPos.x) * ballRatio;
      ballPos.y += (dotPos.y - ballPos.y) * ballRatio;

      gsap.set(ball, {
        x: ballPos.x,
        y: ballPos.y,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    gsap.ticker.add(update);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <>
      <div id="dot" ref={dotRef} />
      <div id="ball" ref={ballRef} />
    </>
  );
}
