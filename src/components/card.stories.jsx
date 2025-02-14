import { Card } from "./card";

const meta = {
  title: "Card",
  component: Card,
  argTypes: {
    status: {
      control: "select",
      options: ["Not Started", "In Progress", "Completed"],
    },
    progress: {
      control: "range",
      min: 0,
      max: 100,
    },
  },
};

export default meta;

export const InProgress = {
  args: {
    title: "Experience Builder",
    link: "https://www.drupal.org/project/experience_builder",
    status: "In Progress",
    progress: 88,
  },
};

export const Completed = {
  args: {
    title: "Experience Builder",
    ...InProgress.args,
    status: "Completed",
    progress: 100,
  },
};

export const NotStarted = {
  args: {
    ...InProgress.args,
    status: "Not Started",
    progress: 0,
  },
};
