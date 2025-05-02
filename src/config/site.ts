export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kanban Board",
  description:
    "Streamline your workflow with our intuitive Kanban board. Simple drag-and-drop task management.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Kanban Board",
      href: "/kanban-board",
    },
  ],
  links: {
    github: "https://github.com/shusingh",
    linkedin: "https://www.linkedin.com/in/shusingh/",
    portfolio: "https://shusingh.github.io/",
  },
};
