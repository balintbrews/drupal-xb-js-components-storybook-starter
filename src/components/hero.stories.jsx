import Hero from "./hero";

export default {
  title: "Sections/Hero",
  component: Hero,
  argTypes: {
    layout: {
      control: "select",
      options: ["leftAligned", "centered"],
    },
  },
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  layout: "leftAligned",
  preHeading: "Mission",
  heading: "This space deserves a hero.",
  headingSize: "4xl",
  text: "This is a space to welcome visitors to the site. Grab their attention with copy that clearly states what the site is about.",
  textColor: "text-white",
  button1Label: "Get Started",
  button1Link: "#get-started",
  button1Style: "solid",
  button2Label: "Learn More",
  button2Link: "#learn-more",
  button2Style: "outline",
  image:
    "https://github.com/balintbrews/drupal-xb-js-components-storybook-starter/blob/main/src/assets/hero-placeholder-light.png?raw=true",
  backgroundImage:
    "https://github.com/balintbrews/drupal-xb-js-components-storybook-starter/blob/main/src/assets/hero-placeholder-light.png?raw=true",
  darkenImage: "darken-25",
  backgroundColor: "bg-blue-600",
};
