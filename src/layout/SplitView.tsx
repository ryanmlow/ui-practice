import { JSX } from "react";

const SplitView = ({
  leftChild,
  rightChild,
}: {
  leftChild: JSX.Element | string;
  rightChild: JSX.Element;
}) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1/2 bg-gray-600 py-4">{leftChild}</div>
      <div className="flex-1/2 bg-gray-700 py-4">{rightChild}</div>
    </div>
  );
};

export default SplitView;
