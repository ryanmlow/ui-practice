import { UI_TASKS } from "@/enums/enums";
import Accordion from "@/Tasks/Accordion/Accordion";
import accordionConfig from "@/Tasks/Accordion/accordionConfig";
import accordionTestMarkdown from "@/Tasks/Accordion/testMarkdown";
import accordionCodeMarkdown from "@/Tasks/Accordion/uiMarkdown";
import DiceRoller from "@/Tasks/DiceRoller/DiceRoller";
import diceRollerTestMarkdown from "@/Tasks/DiceRoller/testMarkdown";
import diceRollerUiMarkdown from "@/Tasks/DiceRoller/uiMarkdown";
import DigitalClock from "@/Tasks/DigitalClock/DigitalClock";
import digitalClockTestMarkdown from "@/Tasks/DigitalClock/testMarkdown";
import digitalClockUiMarkdown from "@/Tasks/DigitalClock/uiMarkdown";
import FileExplorer from "@/Tasks/FileExplorer/FileExplorer";
import { fileTree } from "@/Tasks/FileExplorer/mockFileTree";
import fileExplorerTestMd from "@/Tasks/FileExplorer/testMarkdown";
import fileExplorerUiMd from "@/Tasks/FileExplorer/uiMarkdown";
import JobBoard from "@/Tasks/JobBoard/JobBoard";
import jobBoardTestMarkdown from "@/Tasks/JobBoard/testMarkdown";
import jobBoardUiMarkdown from "@/Tasks/JobBoard/uiMarkdown";
import LikeButton from "@/Tasks/LikeButton/LikeButton";
import likeButtonTestMarkdown from "@/Tasks/LikeButton/testMarkdown";
import likeButtonUiMarkdown from "@/Tasks/LikeButton/uiMarkdown";
import Modal from "@/Tasks/Modal/Modal";
import modalConfig from "@/Tasks/Modal/modalConfig";
import modalTestMarkdown from "@/Tasks/Modal/testMarkdown";
import modalUiMarkdown from "@/Tasks/Modal/uiMarkdown";
import Mortgage from "@/Tasks/Mortgage/Mortgage";
import mortgageTestMarkdown from "@/Tasks/Mortgage/testMarkdown";
import mortgageUiMarkdown from "@/Tasks/Mortgage/uiMarkdown";
import ProgressBar from "@/Tasks/ProgressBar/ProgressBar";
import ProgressBarTestMarkdown from "@/Tasks/ProgressBar/testMarkdown";
import ProgressBarUiMarkdown from "@/Tasks/ProgressBar/uiMarkdown";
import Tabs from "@/Tasks/Tabs/Tabs";
import tabsCodeMarkdown from "@/Tasks/Tabs/uiMarkdown";
import tabsTestMarkdown from "@/Tasks/Tabs/testMardown";
import Test from "@/Tasks/Test/Test";
import TestimonialCard, {
  testimonialText,
} from "@/Tasks/TestimonialCard/TestimonialCard";
import testimonialCardTestCodeMd from "@/Tasks/TestimonialCard/testMarkdown";
import testimonialCardCodeMd from "@/Tasks/TestimonialCard/uiMarkdown";
import todoListTestMarkdown from "@/Tasks/TodoList/testMarkdown";
import TodoList from "@/Tasks/TodoList/TodoList";
import todoUiMarkdown from "@/Tasks/TodoList/uiMarkdown";
import { JSX } from "react";

export type RouteType = {
  id: number;
  title: UI_TASKS;
  description: string;
  name: string;
  path: string;
  component: (props: never) => JSX.Element;
  props?: Record<string, unknown>;
  codeMd?: string;
  testMd?: string;
  source?: string;
};

export const routes: RouteType[] = [
  {
    id: 1,
    title: UI_TASKS.TESTIMONIAL_CARD,
    description:
      "A card featuring a user testimonial, including a profile image, name, username, and the testimonial body.",
    name: "Testimonial Card",
    path: "testimonial-card",
    component: TestimonialCard,
    props: {
      name: "Sarah Dole",
      handle: "@sarahdole",
      testimonial: testimonialText,
    },
    codeMd: testimonialCardCodeMd,
    testMd: testimonialCardTestCodeMd,
    source: "GreatFrontEnd",
  },
  {
    id: 2,
    title: UI_TASKS.ACCORDION,
    description:
      "An Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.",
    name: "Accordion",
    path: "accordion",
    component: Accordion,
    props: { accordionConfig },
    codeMd: accordionCodeMarkdown,
    testMd: accordionTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 3,
    title: UI_TASKS.TABS,
    description:
      "A tabs component that displays one panel of content at a time depending on the active tab element.",
    name: "Tabs",
    path: "tabs",
    component: Tabs,
    props: { tabs: ["HTML", "CSS", "Javascript"] },
    codeMd: tabsCodeMarkdown,
    testMd: tabsTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 4,
    title: UI_TASKS.PROGRESS_BARS,
    description:
      "An app where clicking the 'Add' button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.",
    name: "Progress Bars",
    path: "progress-bars",
    component: ProgressBar,
    codeMd: ProgressBarUiMarkdown,
    testMd: ProgressBarTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 5,
    title: UI_TASKS.DICE_ROLLER,
    description:
      "A dice roller app that simulates the results of rolling a specified number of 6-sided dice.",
    name: "Dice Roller",
    path: "dice-roller",
    component: DiceRoller,
    codeMd: diceRollerUiMarkdown,
    testMd: diceRollerTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 6,
    title: UI_TASKS.TODO_LIST,
    description:
      "A simple todo list that allows users to add, remove, and mark tasks as completed.",
    name: "Todo list",
    path: "todo-list",
    component: TodoList,
    codeMd: todoUiMarkdown,
    testMd: todoListTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 7,
    title: UI_TASKS.DIGITAL_CLOCK,
    description: "A digital clock that shows the current time",
    name: "Digital Clock",
    path: "digital-clock",
    component: DigitalClock,
    codeMd: digitalClockUiMarkdown,
    testMd: digitalClockTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 8,
    title: UI_TASKS.JOB_BOARD,
    description:
      "A job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.",
    name: "Job Board",
    path: "job-board",
    component: JobBoard,
    codeMd: jobBoardUiMarkdown,
    testMd: jobBoardTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 9,
    title: UI_TASKS.MORTGAGE_CALCULATOR,
    description:
      "A simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.",
    name: "Mortgage Calculator",
    path: "mortgage-calculator",
    component: Mortgage,
    codeMd: mortgageUiMarkdown,
    testMd: mortgageTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 10,
    title: UI_TASKS.FILE_EXPLORER,
    description:
      "A component that displays folders and files in a hierarchical tree format.",
    name: "File Explorer",
    path: "file-explorer",
    component: FileExplorer,
    props: { fileTree },
    codeMd: fileExplorerUiMd,
    testMd: fileExplorerTestMd,
    source: "GreatFrontEnd",
  },
  {
    id: 11,
    title: UI_TASKS.LIKE_BUTTON,
    description:
      "A Like button which appearance changes based on various states: Default, liked, hover, loading",
    name: "Like Button",
    path: "like-button",
    component: LikeButton,
    codeMd: likeButtonUiMarkdown,
    testMd: likeButtonTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 12,
    title: UI_TASKS.MODAL_DIALOG,
    description:
      "A reusable modal dialog component that can be opened and closed with customizable title and contents",
    name: "Modal Dialog",
    path: "modal-dialog",
    component: Modal,
    props: modalConfig,
    codeMd: modalUiMarkdown,
    testMd: modalTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 13,
    title: UI_TASKS.TEST,
    description: "",
    name: "Test",
    path: "test",
    component: Test,
  },
];
