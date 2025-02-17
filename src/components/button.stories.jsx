import Button from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outlineDark", "outlineLight", "ghost"],
    },
  },
};

export default meta;

export const Solid = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const OutlineDark = {
  args: {
    variant: "outlineDark",
    children: "Button",
  },
};

export const OutlineLight = {
  args: {
    variant: "outlineLight",
    children: "Button",
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-black p-8">
        <Story />
      </div>
    ),
  ],
};

export const Ghost = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};
