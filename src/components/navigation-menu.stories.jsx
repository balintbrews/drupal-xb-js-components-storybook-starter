import NavigationMenu from "./navigation-menu";

const meta = {
  title: "Overrides/NavigationMenu",
  component: NavigationMenu,
};

export default meta;

export const Default = {
  args: {
    id: "main-menu",
    label: "Main Menu",
    links: [
      {
        key: "front_page",
        title: "Home",
        url: "/",
        isExpanded: false,
        isCollapsed: false,
        inActiveTrail: false,
      },
    ],
  },
};
