import { useState } from "react";

const useResizer = () => {
  const [dividerPosition, setDividerPosition] = useState(50);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newDividerPosition = Math.min(
        100,
        Math.max(0, dividerPosition + (deltaX / window.innerWidth) * 100),
      );
      setDividerPosition(newDividerPosition);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
  return { dividerPosition, handleMouseDown };
};

export default useResizer;
