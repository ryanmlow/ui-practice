import { useLocation } from "react-router-dom";
import { JSX } from "react";
import { uiMarkdownMap } from "./uiMarkdownMap";
import { testMarkdownMap } from "./testMarkdownMap";
import CodeWrapper from "@/components/CodeWrapper";
import SplitView from "@/layout/SplitView";

interface UiTaskProps {
  codeLabel: string;
  renderComponent: (props: never) => JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps?: Record<string, any>;
}

const removeStringSpaces = (str: string) => str.replace(/\s/g, "");

const UiTask = (props: UiTaskProps) => {
  const { codeLabel, renderComponent: RenderComponent, componentProps } = props;
  const trimmedLabel = removeStringSpaces(codeLabel);
  const urlParams = useLocation();
  const pagePaths = urlParams.pathname.split("/");
  const nestedPath = pagePaths[pagePaths.length - 1];
  const uiMarkdown = uiMarkdownMap.get(nestedPath) ?? "";
  const testMarkdown = testMarkdownMap.get(nestedPath) ?? "";
  return (
    <SplitView
      leftChild={
        <div className="mx-4">
          <CodeWrapper
            uiCodeMarkdown={uiMarkdown}
            uiCodeLabel={`${trimmedLabel}.tsx`}
            testMarkdown={testMarkdown}
            testMarkdownLabel={`${trimmedLabel}.test.tsx`}
          />
        </div>
      }
      rightChild={
        <div className="mx-4 h-full">
          {/* @ts-expect-error: RenderComponent has a generic type that cannot be inferred */}
          <RenderComponent {...componentProps} />
        </div>
      }
    />
  );
};

export default UiTask;
