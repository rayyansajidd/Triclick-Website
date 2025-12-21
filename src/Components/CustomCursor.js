import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.querySelector(".custom-cursor-dot");
    const circle = document.querySelector(".custom-cursor-circle");

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const speed = 0.12; // smooth delay

    const moveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    };

    window.addEventListener("mousemove", moveHandler);

    const animate = () => {
      circleX += (mouseX - circleX) * speed;
      circleY += (mouseY - circleY) * speed;

      circle.style.left = circleX + "px";
      circle.style.top = circleY + "px";

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveHandler);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor-dot"></div>
      <div className="custom-cursor-circle"></div>
    </>
  );
};

export default CustomCursor;
