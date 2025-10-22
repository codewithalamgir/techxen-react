import type { IMenuDT } from "@/types/menu-d-t";

// menu data 
const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  
  {
    id: 2,
    title: "About Me",
    link: "/about",
    has_dropdown: false,
  },

  {
    id: 3,
    title: "Services",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/service", title: "Development" },
      { link: "/service-details", title: "Branding" },
    ],
  },
  {
    id: 4,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];
export default menu_data;