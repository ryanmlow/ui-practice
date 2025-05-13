import testimonialCardCodeMd from "../Tasks/TestimonialCard/uiMarkdown";
import TestimonialCard, {
  testimonialText,
} from "../Tasks/TestimonialCard/TestimonialCard";
import testimonialCardTestCodeMd from "../Tasks/TestimonialCard/testMarkdown";
import { JSX } from "react";
import Accordion from "../Tasks/Accordion/Accordion";
import accordionCodeMarkdown from "../Tasks/Accordion/uiMarkdown";
import accordionTestMarkdown from "../Tasks/Accordion/testMarkdown";
import accordionConfig from "../Tasks/Accordion/accordionConfig";
import tabsCodeMarkdown from "../Tasks/Tabs/uiMarkdown";
import tabsTestMarkdown from "../Tasks/Tabs/testMardown";
import Tabs from "../Tasks/Tabs/Tabs";
import ProgressBar from "../Tasks/ProgressBar/ProgressBar";
import ProgressBarUiMarkdown from "../Tasks/ProgressBar/uiMarkdown";
import ProgressBarTestMarkdown from "../Tasks/ProgressBar/testMarkdown";
import DiceRoller from "../Tasks/DiceRoller/DiceRoller";
import diceRollerUiMarkdown from "../Tasks/DiceRoller/uiMarkdown";
import diceRollerTestMarkdown from "../Tasks/DiceRoller/testMarkdown";
import TodoList from "../Tasks/TodoList/TodoList";
import todoUiMarkdown from "../Tasks/TodoList/uiMarkdown";
import todoListTestMarkdown from "../Tasks/TodoList/testMarkdown";
import DigitalClock from "../Tasks/DigitalClock/DigitalClock";
import digitalClockUiMarkdown from "../Tasks/DigitalClock/uiMarkdown";
import digitalClockTestMarkdown from "../Tasks/DigitalClock/testMarkdown";
import JobBoard from "../Tasks/JobBoard/JobBoard";
import jobBoardUiMarkdown from "../Tasks/JobBoard/uiMarkdown";
import jobBoardTestMarkdown from "../Tasks/JobBoard/testMarkdown";
import Test from "../Tasks/Test/Test";
import Mortgage from "../Tasks/Mortgage/Mortgage";
import mortgageUiMarkdown from "../Tasks/Mortgage/uiMarkdown";
import mortgageTestMarkdown from "../Tasks/Mortgage/testMarkdown";

export type RouteType = {
  id: number;
  title: string;
  description: string;
  name: string;
  path: string;
  component: (props: never) => JSX.Element;
  props?: Record<string, unknown>;
  codeMd?: string;
  testMd?: string;
};

export const routes: RouteType[] = [
  {
    id: 1,
    title: "Testimonial Card",
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
  },
  {
    id: 2,
    title: "Accordion",
    description:
      "An Accordion component that displays a list of vertically stacked sections that each contain a title and content snippet.",
    name: "Accordion",
    path: "accordion",
    component: Accordion,
    props: { accordionConfig },
    codeMd: accordionCodeMarkdown,
    testMd: accordionTestMarkdown,
  },
  {
    id: 3,
    title: "Tabs",
    description:
      "A tabs component that displays one panel of content at a time depending on the active tab element.",
    name: "Tabs",
    path: "tabs",
    component: Tabs,
    props: { tabs: ["HTML", "CSS", "Javascript"] },
    codeMd: tabsCodeMarkdown,
    testMd: tabsTestMarkdown,
  },
  {
    id: 4,
    title: "Progress Bars",
    description:
      "An app where clicking the 'Add' button adds progress bars to the page. The progress bars fill up gradually as soon as they are shown.",
    name: "Progress Bars",
    path: "progress-bars",
    component: ProgressBar,
    codeMd: ProgressBarUiMarkdown,
    testMd: ProgressBarTestMarkdown,
  },
  {
    id: 5,
    title: "Dice Roller",
    description:
      "A dice roller app that simulates the results of rolling a specified number of 6-sided dice.",
    name: "Dice Roller",
    path: "dice-roller",
    component: DiceRoller,
    codeMd: diceRollerUiMarkdown,
    testMd: diceRollerTestMarkdown,
  },
  {
    id: 6,
    title: "Todo List",
    description:
      "A simple todo list that allows users to add, remove, and mark tasks as completed.",
    name: "Todo list",
    path: "todo-list",
    component: TodoList,
    codeMd: todoUiMarkdown,
    testMd: todoListTestMarkdown,
  },
  {
    id: 7,
    title: "Digital Clock",
    description: "A digital clock that shows the current time",
    name: "Digital Clock",
    path: "digital-clock",
    component: DigitalClock,
    codeMd: digitalClockUiMarkdown,
    testMd: digitalClockTestMarkdown,
  },
  {
    id: 8,
    title: "Job Board",
    description:
      "A job board that displays the latest job postings fetched from the Hacker News API, with each posting displaying the job title, poster, and date posted.",
    name: "Job Board",
    path: "job-board",
    component: JobBoard,
    codeMd: jobBoardUiMarkdown,
    testMd: jobBoardTestMarkdown,
  },
  {
    id: 9,
    title: "Mortgage Calculator",
    description:
      "A simple mortgage calculator widget that takes in a loan amount, interest rate, loan term, and calculates the monthly mortgage payment, total payment amount, and total interest paid.",
    name: "Mortgage Calculator",
    path: "mortgage-calculator",
    component: Mortgage,
    codeMd: mortgageUiMarkdown,
    testMd: mortgageTestMarkdown,
  },
  {
    id: 10,
    title: "Test",
    description: "",
    name: "Test",
    path: "test",
    component: Test,
    // codeMd: jobBoardUiMarkdown,
    // testMd: jobBoardTestMarkdown,
  },
];
