const likeButtonUiMarkdown = `
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

enum LikeStatus {
  DEFAULT = "default",
  LIKED = "liked",
}

enum ButtonAction {
  LIKE = "like",
  UNLIKE = "unlike",
}

export const API_URL =
  "https://questions.greatfrontend.com/api/questions/like-button";

const LikeButton = () => {
  const [likeStatus, setLikeStatus] = useState(LikeStatus.DEFAULT);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    const desiredStatus =
      likeStatus === LikeStatus.DEFAULT ? LikeStatus.LIKED : LikeStatus.DEFAULT;
    const desiredAction =
      likeStatus === LikeStatus.DEFAULT
        ? ButtonAction.LIKE
        : ButtonAction.UNLIKE;

    const apiBody = JSON.stringify({
      action: desiredAction,
    });

    try {
      setLoading(true);
      const response = await fetch(API_URL, { method: "POST", body: apiBody });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.message);
      }
      setLikeStatus(desiredStatus);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={\`group m-auto flex cursor-pointer items-center justify-center rounded-4xl border-2 px-4 py-2 \${likeStatus === LikeStatus.DEFAULT && "hover:border-red-500"}\`}
      style={
        likeStatus === LikeStatus.LIKED
          ? { backgroundColor: "red", color: "white", borderColor: "red" }
          : {}
      }
      onClick={handleClick}
    >
      {loading ? (
        <div
          className={\`h-6 w-6 animate-spin rounded-full border-4 border-t-transparent \${
            likeStatus === LikeStatus.LIKED ? "border-white" : "border-gray-400"
          }\`}
        />
      ) : (
        <FaRegHeart
          className={
            likeStatus === LikeStatus.DEFAULT ? "group-hover:text-red-500" : ""
          }
        />
      )}
      <p
        className={\`ml-2 font-bold \${likeStatus === LikeStatus.DEFAULT && "group-hover:text-red-500"}\`}
      >
        Like
      </p>
    </button>
  );
};

export default LikeButton;

`;

export default likeButtonUiMarkdown;
