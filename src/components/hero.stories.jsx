import Hero from "./hero";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  preHeading: "Welcome to Our Website",
  heading: "Your Adventure Starts Here",
  text: "Explore the world with us. Plan your next trip and get amazing deals on our tours.",
  button1Label: "Get Started",
  button1Link: "#get-started",
  button2Label: "Learn More",
  button2Link: "#learn-more",
  backgroundImage: "path-to-your-image.jpg",
};
