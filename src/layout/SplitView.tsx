import { JSX } from "react";
import useResizer from "@/hooks/useResizer";

const SplitView = ({
  leftChild,
  rightChild,
}: {
  leftChild: JSX.Element | string;
  rightChild: JSX.Element;
}) => {
  const { dividerPosition, handleMouseDown } = useResizer();
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className="bg-gray-600 py-4"
        style={{ flexBasis: `${dividerPosition}%` }}
      >
        {leftChild}
      </div>
      <div
        className="w-2 cursor-col-resize bg-gray-500 transition duration-200 hover:bg-gray-100"
        onMouseDown={handleMouseDown}
      />
      <div
        className="bg-gray-700 py-4"
        style={{
          flexBasis: `${100 - dividerPosition}%`,
        }}
      >
        {rightChild}
      </div>
    </div>
  );
};

export default SplitView;
