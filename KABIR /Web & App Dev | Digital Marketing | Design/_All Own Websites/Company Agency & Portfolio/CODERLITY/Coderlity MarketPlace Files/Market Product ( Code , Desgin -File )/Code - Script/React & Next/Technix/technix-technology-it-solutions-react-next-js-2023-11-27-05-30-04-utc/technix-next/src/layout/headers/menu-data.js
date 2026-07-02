import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
    sub_menus: [ 
      { link: "/", title: "Home 1" },
      { link: "/home-2", title: "Home 2" },
      { link: "/home-3", title: "Home 3" }, 
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Services Details" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" }, 
      { link: "/team-details", title: "Team Details" },
      { link: "/404", title: "404" }, 
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" }, 
      { link: "/blog-details", title: "Blog Details" }, 
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
