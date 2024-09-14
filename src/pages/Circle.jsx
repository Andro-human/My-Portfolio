import { useEffect, useRef } from "react";

const Circle = () => {
  const coords = { x: 0, y: 0 };
  const circleRefs = useRef([]);
  const scrollOffsets = { x: 0, y: 0 };
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  useEffect(() => {
    // Assign colors and initial positions to each circle
    circleRefs.current.forEach((circle, index) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
      }
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX ;
      coords.y = e.clientY ;
      handleScroll()
    };

    const handleScroll = () => {
        scrollOffsets.x = window.scrollX;
        scrollOffsets.y = window.scrollY;
      };
  
      window.addEventListener("mousemove", handleMouseMove, { capture: true });
      window.addEventListener("scroll", handleScroll);

    function animateCircles() {
      let x = coords.x + scrollOffsets.x;
      let y = coords.y + scrollOffsets.y;

      
      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          circle.style.left = x - 12 + "px";
          circle.style.top = y - 12 + "px";
          circle.style.transform = `scale(${
            (circleRefs.current.length - index) / circleRefs.current.length
          })`;

          circle.x = x;
          circle.y = y;

          const nextCircle = circleRefs.current[index + 1] || circleRefs.current[0];
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;
        }
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => (circleRefs.current[index] = el)}
            className="circle"
            style={{
              position: "absolute",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              zIndex: "100",
              pointerEvents: "none"
            }}
          ></div>
        ))}
    </>
  );
};

export default Circle;
