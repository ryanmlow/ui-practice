import { useRef, useState } from "react";
import Star from "./Star";

interface StarRatingProps {
  maxStars: number;
  currentRating: number;
}
enum EventType {
  CLICK = "click",
  MOUSE_ENTER = "mouseenter",
  MOUSE_LEAVE = "mouseleave",
}

type StarFillMap = Record<number, boolean>;

const generateStarFillMap = (stars: number, filled: number) => {
  let fillTrack = filled;
  return Array.from({ length: stars }).reduce((acc: StarFillMap, _, idx) => {
    acc[idx] = fillTrack > 0;
    fillTrack--;
    return acc;
  }, {});
};

const StarRating = (props: StarRatingProps) => {
  const { maxStars, currentRating } = props;
  const [starFillMap, setStarFillMap] = useState(
    generateStarFillMap(maxStars, currentRating),
  );
  const starFillMapRef = useRef<StarFillMap>(starFillMap);

  const fillStars = (idx: number, updateRef: boolean = false) => {
    const currentMap = { ...starFillMap };
    for (let i = 0; i < maxStars; i++) {
      currentMap[i] = i <= idx;
    }
    setStarFillMap(currentMap);
    if (updateRef) {
      starFillMapRef.current = currentMap;
    }
  };

  const updateStarFillMap = (eventType: string, idx?: number) => {
    switch (eventType) {
      case EventType.CLICK:
        if (idx !== undefined) {
          fillStars(idx, true);
        }
        break;
      case EventType.MOUSE_ENTER:
        if (idx !== undefined) {
          fillStars(idx);
        }
        break;

      case EventType.MOUSE_LEAVE:
        setStarFillMap(starFillMapRef.current);
        break;
    }
  };

  return (
    <div className="flex h-screen flex-row items-center justify-center">
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          idx={index}
          filled={starFillMap[index]}
          highlightStars={updateStarFillMap}
        />
      ))}
    </div>
  );
};

export default StarRating;
