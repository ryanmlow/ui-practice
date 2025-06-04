import { Link } from "react-router-dom";
import { PATHS, UI_TASKS } from "../../enums/enums";
import { RouteType } from "../../Routing/Routes";

const TaskCard = ({
  card,
  updateActivePreview,
}: {
  card: RouteType;
  updateActivePreview: (title: UI_TASKS) => void;
}) => {
  return (
    <Link
      to={`/${PATHS.UI_TASK}/${card.path}`}
      key={card.id}
      className="flex min-h-80 flex-col items-center justify-center rounded-lg border-4 border-indigo-300 bg-amber-50 px-5 py-10 text-center text-blue-900 transition duration-200 hover:-translate-y-2 hover:border-white hover:bg-gray-600 hover:text-white"
      onMouseOver={() => updateActivePreview(card.title)}
    >
      <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
      <p className="mb-4">{card.description}</p>
      {card.source && (
        <p className="text-sm font-bold italic">Source: {card.source}</p>
      )}
    </Link>
  );
};

export default TaskCard;
