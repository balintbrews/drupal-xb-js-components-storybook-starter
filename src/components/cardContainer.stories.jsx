import imagePlaceholder from "../assets/images/card-placeholder.png";
import Card from "./card.jsx";
import CardContainer from "./cardContainer.jsx";

const meta = {
  title: "Sections/Card Container",
  component: CardContainer,
  argTypes: {
    layout: {
      options: ["Left aligned", "Center aligned"],
      control: { type: "select" },
    },
    headingElement: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    headingSize: {
      options: ["Large", "Medium", "Small"],
      control: { type: "select" },
    },
    textColor: {
      options: ["Dark", "Light"],
      control: { type: "select" },
    },
    cardLayout: {
      options: ["3 columns", "4 columns"],
      control: { type: "select" },
    },
  },
};
export default meta;

export const Default = {
  args: {
    layout: "Center aligned",
    preHeading: "Services",
    heading: "What we do.",
    headingElement: "h2",
    headingSize: "Medium",
    textColor: "Dark",
    cardLayout: "4 columns",
  },
  render: (args) => (
    <CardContainer {...args}>
      <Card
        heading="Engaging title that represents the content."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image={imagePlaceholder}
      />
      <Card
        heading="Engaging title that represents the content."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image={imagePlaceholder}
      />
      <Card
        heading="Engaging title that represents the content."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image={imagePlaceholder}
      />
      <Card
        heading="Engaging title that represents the content."
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
        image={imagePlaceholder}
      />
    </CardContainer>
  ),
};
