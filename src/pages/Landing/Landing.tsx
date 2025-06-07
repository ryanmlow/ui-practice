import { useState } from "react";
import accordionPreview from "@/assets/accordion.png";
import tabsPreview from "@/assets/tabs.png";
import progressBarPreview from "@/assets/progress-bars.png";
import diceRollerPreview from "@/assets/dice-roller.png";
import todoListPreview from "@/assets/todo-list.png";
import digitalClockPreview from "@/assets/digital-clock.png";
import jobBoardPreview from "@/assets/job-board.png";
import mortgageCalculatorPreview from "@/assets/mortgage-calculator.png";
import fileExplorerPreview from "@/assets/file-explorer.png";
import likeButtonPreview from "@/assets/like-button.png";
import modalPreview from "@/assets/modal.png";
import ticTacToePreview from "@/assets/tictactoe.png";
import TaskCard from "./TaskCard";
import Preview from "./Preview";
import { UI_TASKS } from "@/enums/enums";
import { routes } from "@/Routing/Routes";

const previewImgMap: Record<UI_TASKS, string> = {
  [UI_TASKS.TESTIMONIAL_CARD]:
    "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/render/image/public/projects-images/testimonial-card/gallery/Desktop.jpg",
  [UI_TASKS.ACCORDION]: accordionPreview,
  [UI_TASKS.TABS]: tabsPreview,
  [UI_TASKS.PROGRESS_BARS]: progressBarPreview,
  [UI_TASKS.DICE_ROLLER]: diceRollerPreview,
  [UI_TASKS.TODO_LIST]: todoListPreview,
  [UI_TASKS.DIGITAL_CLOCK]: digitalClockPreview,
  [UI_TASKS.JOB_BOARD]: jobBoardPreview,
  [UI_TASKS.MORTGAGE_CALCULATOR]: mortgageCalculatorPreview,
  [UI_TASKS.FILE_EXPLORER]: fileExplorerPreview,
  [UI_TASKS.LIKE_BUTTON]: likeButtonPreview,
  [UI_TASKS.MODAL_DIALOG]: modalPreview,
  [UI_TASKS.TIC_TAC_TOE]: ticTacToePreview,
  [UI_TASKS.TEST]: "",
};

const Landing = () => {
  const [activePreview, setActivePreview] = useState<string>();
  const updateActivePreview = (title: UI_TASKS) =>
    setActivePreview(previewImgMap[title]);

  return (
    <div className="flex flex-col justify-center lg:flex-row">
      <div className="xxl:grid-cols-3 grid w-full flex-1 grid-cols-1 gap-8 p-8 xl:grid-cols-2">
        {routes.map((card) => (
          <TaskCard
            key={card.id}
            card={card}
            updateActivePreview={updateActivePreview}
          />
        ))}
      </div>
      <Preview previewUrl={activePreview} />
    </div>
  );
};

export default Landing;
