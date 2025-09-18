import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Achievement from "../pages/Achievement";
import DefaultLayout from "../components/DefaultLayout";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    layout: null,
  },
  {
    path: "/about",
    component: About,
    name: "About",
    layout: DefaultLayout,
  },
  {
    path: "/projects",
    component: Projects,
    name: "Projects",
    layout: DefaultLayout,
  },
  {
    path: "/achievement",
    component: Achievement,
    name: "Achievement",
    layout: DefaultLayout,
  }
//   {
//     path: "/contact",
//     component: Contact,
//     layout: null,
//   },
];
