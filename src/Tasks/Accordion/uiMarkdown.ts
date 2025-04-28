const accordionCodeMarkdown = `
import { useState } from "react";

interface AccordionProps {
  accordionConfig: { title: string; content: string }[];
}

const getInitialState = (config: AccordionProps["accordionConfig"]) => {
  const initialState: Record<string, boolean> = {};
  config.forEach((item) => {
    initialState[item.title] = false;
  });
  return initialState;
};

export default function Accordion(props: AccordionProps) {
  const { accordionConfig } = props;
  const [accordionState, setAccordionState] = useState(
    getInitialState(accordionConfig),
  );

  const toggleAccordion = (title: string) =>
    setAccordionState((prev) => ({ ...prev, [title]: !prev[title] }));

  return (
    <div>
      {accordionConfig.map((item) => (
        <div
          className="group border-4 border-cyan-100 overflow-auto bg-blue-200 cursor-pointer mb-4
            pl-4 rounded-lg text-left text-blue-950"
          key={item.title}
          onClick={() => toggleAccordion(item.title)}
          aria-expanded={accordionState[item.title]}
          aria-controls={\`content-\${item.title}\`}
        >
          <div className="my-4 flex items-center">
            <p className="font-bold">{item.title}</p>
            <span
              className={\`ml-auto mr-4 transform group-hover:bg-blue-950 rounded p-2
              \${accordionState[item.title] ? "-rotate-90" : "rotate-90"} transition
              duration-200 group-hover:text-white\`}
              aria-hidden={true}
            >
              {">"}
            </span>
          </div>
          {accordionState[item.title] && (
            <div id={\`content-\${item.title}\`} className="mb-4" role="region">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}`;

export default accordionCodeMarkdown;
