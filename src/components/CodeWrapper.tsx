import CodeBlock from "./CodeBlock";

interface CodeWrapperProps {
  uiCodeMarkdown: string;
  testMarkdown: string;
  uiCodeLabel?: string;
  testMarkdownLabel?: string;
}

const CodeNotFound = ({ notFoundText }: { notFoundText: string }) => (
  <div className="h-96 flex justify-center items-center">
    <p className="text-gray-300 font-bold mb-8">{notFoundText}</p>
  </div>
);

const CodeWrapper = (props: CodeWrapperProps) => {
  const { uiCodeMarkdown, testMarkdown, uiCodeLabel, testMarkdownLabel } =
    props;
  return (
    <div className="flex flex-col gap-4 justify-center items-center my-4">
      {uiCodeLabel && (
        <h3 className="font-bold text-lg">
          <code>{uiCodeLabel}</code>
        </h3>
      )}
      <div
        className="relative max-sm:w-72 lg:max-xl:w-96 w-3xl rounded-xl border border-gray-300
          bg-gray-500 p-2"
      >
        {uiCodeMarkdown ? (
          <CodeBlock codeMarkdown={uiCodeMarkdown} />
        ) : (
          <CodeNotFound notFoundText="No UI code available" />
        )}
      </div>
      {testMarkdownLabel && (
        <h3 className="font-bold text-lg">
          <code>{testMarkdownLabel}</code>
        </h3>
      )}
      <div
        className="relative max-sm:w-72 lg:max-xl:w-96 w-3xl rounded-xl border border-gray-300
          bg-gray-500 p-2"
      >
        {testMarkdown ? (
          <CodeBlock codeMarkdown={testMarkdown} />
        ) : (
          <CodeNotFound notFoundText="No test code available" />
        )}
      </div>
    </div>
  );
};

export default CodeWrapper;
