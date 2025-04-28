const tabsUiMarkdown = `
import { useState } from "react";

interface TabsProps {
  tabs: string[];
}

const Tabs = (props: TabsProps) => {
  const { tabs } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabChange = (newTab: string) => setActiveTab(newTab);

  return (
    <div>
      <div className="flex flex-row justify-center">
        {tabs.map((tab) => (
          <div className="w-4/12 cursor-pointer" key={tab}>
            <button
              onClick={() => handleTabChange(tab)}
              className={\`m-2 cursor-pointer border-orange-300 \${activeTab === tab ? "border-b-4" : ""} p-2 text-white hover:rounded-lg hover:bg-orange-300\`}
            >
              {tab}
            </button>
          </div>
        ))}
      </div>

      <div className="mx-8 mt-8 text-left">
        {activeTab === tabs[0] && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {activeTab === tabs[1] && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {activeTab === tabs[2] && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
};
`;
export default tabsUiMarkdown;
