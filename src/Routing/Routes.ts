import { UI_TASKS } from "@/enums/enums";
import {
  Accordion,
  accordionConfig,
  accordionUiMarkdown,
  accordionTestMarkdown,
} from "@/Tasks/Accordion";
import {
  DiceRoller,
  diceRollerUiMarkdown,
  diceRollerTestMarkdown,
} from "@/Tasks/DiceRoller";
import {
  DigitalClock,
  digitalClockUiMarkdown,
  digitalClockTestMarkdown,
} from "@/Tasks/DigitalClock";
import {
  FileExplorer,
  fileTree,
  fileExplorerUiMd,
  fileExplorerTestMd,
} from "@/Tasks/FileExplorer";
import {
  JobBoard,
  jobBoardUiMarkdown,
  jobBoardTestMarkdown,
} from "@/Tasks/JobBoard";
import {
  LikeButton,
  likeButtonUiMarkdown,
  likeButtonTestMarkdown,
} from "@/Tasks/LikeButton";
import {
  Modal,
  modalConfig,
  modalUiMarkdown,
  modalTestMarkdown,
} from "@/Tasks/Modal";
import {
  Mortgage,
  mortgageUiMarkdown,
  mortgageTestMarkdown,
} from "@/Tasks/Mortgage";
import {
  ProgressBar,
  progressBarUiMarkdown,
  progressBarTestMarkdown,
} from "@/Tasks/ProgressBar";
import {
  StarRating,
  starRatingTestMarkdown,
  starRatingUiMarkdown,
} from "@/Tasks/StarRating";
import { Tabs, tabsUiMarkdown, tabsTestMarkdown } from "@/Tasks/Tabs";
import Test from "@/Tasks/Test/Test";
import {
  TestimonialCard,
  testimonialText,
  testimonialCardUiMarkdown,
  testimonialCardTestMarkdown,
} from "@/Tasks/TestimonialCard";
import { TicTacToe, ticTacToeUiMd, ticTacToeTestMd } from "@/Tasks/TicTacToe";
import {
  TodoList,
  todoListUiMarkdown,
  todoListTestMarkdown,
} from "@/Tasks/TodoList";
import {
  timeoutMap,
  TrafficLight,
  trafficLightTestMd,
  trafficLightUiMd,
} from "@/Tasks/TrafficLight";
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
    codeMd: testimonialCardUiMarkdown,
    testMd: testimonialCardTestMarkdown,
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
    codeMd: accordionUiMarkdown,
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
    codeMd: tabsUiMarkdown,
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
    codeMd: progressBarUiMarkdown,
    testMd: progressBarTestMarkdown,
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
    codeMd: todoListUiMarkdown,
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
    title: UI_TASKS.TIC_TAC_TOE,
    description: "A tic-tac-toe game that is playable by two players",
    name: "Tic Tac Toe",
    path: "tic-tac-toe",
    component: TicTacToe,
    codeMd: ticTacToeUiMd,
    testMd: ticTacToeTestMd,
    source: "GreatFrontEnd",
  },
  {
    id: 14,
    title: UI_TASKS.TRAFFIC_LIGHT,
    description:
      "A traffic light where the lights switch from green to yellow to red after predetermined intervals and loop indefinitely",
    name: "Traffic Light",
    path: "traffic-light",
    component: TrafficLight,
    props: { timeoutMap },
    codeMd: trafficLightUiMd,
    testMd: trafficLightTestMd,
    source: "GreatFrontEnd",
  },
  {
    id: 15,
    title: UI_TASKS.STAR_RATING,
    description:
      "A star rating widget that allows users to select a rating value.",
    name: "Star Rating",
    path: "star-rating",
    component: StarRating,
    props: { maxStars: 5, currentRating: 2 },
    codeMd: starRatingUiMarkdown,
    testMd: starRatingTestMarkdown,
    source: "GreatFrontEnd",
  },
  {
    id: 16,
    title: UI_TASKS.TEST,
    description: "",
    name: "Test",
    path: "test",
    component: Test,
  },
];
