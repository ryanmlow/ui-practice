import { Link } from "react-router-dom";
import { routes } from "./Routing/Routes";
import { useState } from "react";
import accordionPreview from "./assets/accordion.png";
import tabsPreview from "./assets/tabs.png";
import progressBarPreview from "./assets/progress-bars.png";

const previewImgMap = [
  {
    titleRef: "Testimonial Card",
    link: "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/render/image/public/projects-images/testimonial-card/gallery/Desktop.jpg",
  },
  {
    titleRef: "Accordion",
    link: accordionPreview,
  },
  {
    titleRef: "Tabs",
    link: tabsPreview,
  },
  {
    titleRef: "Progress Bars",
    link: progressBarPreview,
  },
];

const Preview = ({ previewUrl }: { previewUrl: string | undefined }) => {
  return (
    <div className="hidden h-0 rounded-l-2xl bg-gray-500 lg:visible lg:sticky lg:top-0 lg:right-0 lg:flex lg:h-screen lg:flex-1 lg:flex-col lg:items-center lg:justify-center lg:p-4">
      <h1 className="mb-4">Preview</h1>
      {previewUrl ? (
        <div>
          <img className="rounded-2xl lg:min-w-xl" src={previewUrl} />
        </div>
      ) : (
        <div className="flex h-6/12 w-10/12 items-center justify-center rounded-2xl bg-gray-50">
          <p className="mb-8 text-center text-2xl font-bold text-gray-500">
            Hover over a card to see the preview
          </p>
        </div>
      )}
    </div>
  );
};

const Landing = () => {
  const [activePreview, setActivePreview] = useState<string | undefined>();

  const getImgPreviewUrl = (taskTitle: string) => {
    const imgPreview = previewImgMap.find(
      (img) => img.titleRef === taskTitle,
    )?.link;
    console.log(imgPreview);
    setActivePreview(imgPreview);
  };

  return (
    <div className="flex flex-col justify-center lg:flex-row">
      <div className="xxl:grid-cols-3 grid w-full flex-1 grid-cols-1 gap-8 p-8 xl:grid-cols-2">
        {routes.map((card) => (
          <Link
            to={`ui-task/${card.path}`}
            key={card.id}
            className="flex min-h-80 flex-col items-center justify-center rounded-lg border-4 border-indigo-300 bg-amber-50 px-5 py-10 text-center text-blue-900 transition duration-200 hover:-translate-y-2 hover:border-white hover:bg-gray-600 hover:text-white"
            onMouseOver={() => getImgPreviewUrl(card.title)}
          >
            <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
            <p>{card.description}</p>
          </Link>
        ))}
      </div>
      <Preview previewUrl={activePreview} />
    </div>
  );
};

export default Landing;
