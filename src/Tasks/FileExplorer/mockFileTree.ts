import { FileObject } from "./FileExplorer";

export const fileTree: FileObject[] = [
  {
    id: 1,
    name: "README.md",
  },
  {
    id: 2,
    name: "Documents",
    children: [
      {
        id: 3,
        name: "Word.doc",
      },
      {
        id: 4,
        name: "Powerpoints",
        children: [
          { id: 5, name: "ppt1.ppt" },
          { id: 6, name: "ppt2.ppt" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Others",
    children: [
      { id: 8, name: "Main", children: [{ id: 9, name: "child1.doc" }] },
    ],
  },
];
