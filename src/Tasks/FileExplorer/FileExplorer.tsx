import { useState } from "react";

export interface FileObject {
  id: number;
  name: string;
  children?: FileObject[];
}

const RenderFile = ({
  folder,
  indentLevel = 1,
}: {
  folder: FileObject;
  indentLevel?: number;
}) => {
  const [showChild, setShowChild] = useState(false);
  return (
    <div className="text-left">
      <p
        className={`${folder.children && "cursor-pointer"} py-2 hover:rounded-2xl hover:bg-cyan-700`}
        style={{ paddingLeft: `${indentLevel * 1}rem` }}
        onClick={() => setShowChild((prev) => !prev)}
      >
        {folder.name}
        {folder.children && (
          <span
            data-testid={`dropdown-${folder.name}`}
            className={`ml-2 inline-block transform font-bold transition duration-200 ${
              showChild ? "-rotate-90" : "rotate-90"
            }`}
          >
            {">"}
          </span>
        )}
      </p>
      {showChild &&
        folder.children?.map((child) => (
          <RenderFile
            folder={child}
            indentLevel={indentLevel + 1}
            key={child.id}
          />
        ))}
    </div>
  );
};

const FileExplorer = ({ fileTree }: { fileTree: FileObject[] }) => {
  return (
    <div className="rounded-2xl bg-cyan-500 p-4">
      {fileTree.map((data) => (
        <RenderFile folder={data} key={data.id} />
      ))}
    </div>
  );
};

export default FileExplorer;
