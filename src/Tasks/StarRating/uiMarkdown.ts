const starRatingUiMd = `
######### StarRating.tsx #########
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

######### Star.tsx #########

interface StarProps {
  idx: number;
  filled: boolean;
  highlightStars: (eventType: string, idx: number) => void;
}

const Star = (props: StarProps) => {
  const { filled, highlightStars, idx } = props;
  return (
    <svg
      data-testid={\`star-\${idx}\`}
      xmlns="http://www.w3.org/2000/svg"
      className="h-32 w-32 cursor-pointer text-yellow-300"
      fill={filled ? "yellow" : "white"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      onMouseEnter={(e) => highlightStars(e.type, idx)}
      onMouseLeave={(e) => highlightStars(e.type, idx)}
      onClick={(e) => highlightStars(e.type, idx)}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
};

export default Star;
`;

export default starRatingUiMd;
