import { useState } from "react";

interface CodeBlockProps {
  codeMarkdown: string;
}

const CodeBlock = (props: CodeBlockProps) => {
  const { codeMarkdown } = props;

  const [copied, setCopied] = useState(false);

  const handleCopy = (copyText: string) => {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <>
      <pre className="m-0 overflow-x-auto p-4 text-left text-xs lg:text-sm">
        {codeMarkdown}
      </pre>
      <button
        onClick={() => handleCopy(codeMarkdown)}
        disabled={copied}
        className="group absolute top-2 right-2 cursor-pointer rounded-lg bg-gray-800 px-2 py-1
          text-white enabled:hover:bg-gray-300 disabled:cursor-not-allowed
          disabled:opacity-75"
      >
        <p className="text-white group-hover:text-black group-disabled:text-white text-xs lg:text-lg">
          {copied ? "Copied!" : "Copy"}
        </p>
      </button>
    </>
  );
};

export default CodeBlock;
