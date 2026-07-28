import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice] = useState(
    () => window.matchMedia && !window.matchMedia("(hover: hover)").matches
  );

  const mousePos = useRef({ x: -100, y: -100 });
  const trailingPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef(null);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      mousePos.current = { x, y };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 3}px, ${y - 3}px, 0)`;
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const handleHoverCheck = (e) => {
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer",
        )
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleHoverCheck, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    const animate = () => {
      trailingPos.current.x +=
        (mousePos.current.x - trailingPos.current.x) * 0.3;
      trailingPos.current.y +=
        (mousePos.current.y - trailingPos.current.y) * 0.3;

      if (ringRef.current) {
        // Minimized sleek ring sizes: 24px default, 32px hovered, 18px clicked
        const size = isHovered ? 32 : isClicked ? 18 : 24;
        const half = size / 2;
        ringRef.current.style.transform = `translate3d(${
          trailingPos.current.x - half
        }px, ${trailingPos.current.y - half}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleHoverCheck);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered, isClicked, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Primary Dot - Compact 6px dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-9999 rounded-full bg-primary opacity-0 transition-[width,height,opacity,background-color] duration-150 ease-out"
        style={{
          width: isHovered ? "8px" : "6px",
          height: isHovered ? "8px" : "6px",
          willChange: "transform",
        }}
      />

      {/* Trailing Ring - Minimized 24px outer ring */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-9999 rounded-full border border-primary/80 bg-primary/10 dark:bg-primary/20 backdrop-blur-[1px] opacity-0 transition-[width,height,opacity,background-color,border-color] duration-200 ease-out ${
          isHovered
            ? "border-primary bg-primary/25 shadow-sm shadow-primary/20"
            : isClicked
              ? "opacity-80"
              : ""
        }`}
        style={{
          width: isHovered ? "32px" : isClicked ? "18px" : "24px",
          height: isHovered ? "32px" : isClicked ? "18px" : "24px",
          willChange: "transform",
        }}
      />
    </>
  );
};

export default CustomCursor;
