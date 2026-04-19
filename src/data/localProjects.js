import vc1 from "../images/projects/vita-care/vita-care1.png";
import vc2 from "../images/projects/vita-care/vita_care2.png";
import vc3 from "../images/projects/vita-care/vita_care3.png";
import vc4 from "../images/projects/vita-care/vita_care4.png";
import vc5 from "../images/projects/vita-care/vita_care5.png";
import vc6 from "../images/projects/vita-care/vita_care6.png";
import vc7 from "../images/projects/vita-care/vita_care7.png";

import sv1 from "../images/projects/solver/solver1.png";
import sv2 from "../images/projects/solver/solver2.png";
import sv3 from "../images/projects/solver/solver3.png";
import sv4 from "../images/projects/solver/solver4.png";
import sv5 from "../images/projects/solver/solver5.png";
import sv6 from "../images/projects/solver/solver6.png";
import sv7 from "../images/projects/solver/solver7.png";
import sv8 from "../images/projects/solver/solver8.png";
import sv9 from "../images/projects/solver/solver9.png";

import eims1 from "../images/projects/eims/eims1.png";
import eims2 from "../images/projects/eims/eims2.png";
import eims3 from "../images/projects/eims/eims3.png";
import eims4 from "../images/projects/eims/eims4.png";
import eims5 from "../images/projects/eims/eims5.png";
import eims6 from "../images/projects/eims/eims6.png";

import cd1 from "../images/projects/codely/codely1.png";
import cd2 from "../images/projects/codely/codely2.png";
import cd3 from "../images/projects/codely/codely3.png";
import cd4 from "../images/projects/codely/codely4.png";
import cd5 from "../images/projects/codely/codely5.png";
import cd6 from "../images/projects/codely/codely6.png";
import cd7 from "../images/projects/codely/codely7.png";
import cd8 from "../images/projects/codely/codely8.png";

export const localProjects = [
  {
    _id: "vita-care",
    serial: "01",
    title: "Vita Care",
    img1: vc1,
    images: [vc1, vc2, vc3, vc4, vc5, vc6, vc7],
    description:
      "Engineered a full-stack responsive healthcare appointment booking application. Designed RBAC and REST APIs with 14+ secured endpoints, and applied CQRS pattern with MediatR to separate read and write operations, improving overall system maintainability.",
    technologies: ["Angular", ".NET", "MongoDB", "CQRS", "MediatR"],
    tools: ["Angular", ".NET", "MongoDB", "CQRS", "MediatR"],
    frontEnd: "https://github.com/shdhrubo/vita-care",
    backEnd: "https://github.com/shdhrubo/vita-care",
    live: "https://vita-care-portal.netlify.app/",
  },
  {
    _id: "solver",
    serial: "02",
    title: "Solver",
    img1: sv1,
    images: [sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8, sv9],
    description:
      "Built a full-stack e-commerce platform integrating 17+ REST APIs, stock validation, and secure payment processing to ensure scalability. Enhanced UX by implementing a fully responsive UI across multiple devices.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    tools: ["React", "Node.js", "Express.js", "MongoDB", "Stripe"],
    frontEnd: "https://github.com/shdhrubo/manufacturer-client",
    backEnd: "https://github.com/shdhrubo/manufacturer-client",
    live: "https://manufacturer-website-1234.web.app/",
  },
  {
    _id: "eims",
    serial: "03",
    title: "Easy Inventory Management System (EIMS)",
    img1: eims1,
    images: [eims1, eims2, eims3, eims4, eims5, eims6],
    description:
      "Created a full-stack and responsive inventory system with secure authentication, validations, and complex database operations. Optimized the frontend with centralized API configurations and dynamic routing ensuring a smooth user experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    frontEnd: "https://github.com/shdhrubo/ware-house-cllient",
    backEnd: "https://github.com/shdhrubo/ware-house-cllient",
    live: "https://easy-inventory-management-1234.web.app/",
  },
  {
    _id: "codely",
    serial: "04",
    title: "Codely",
    img1: cd1,
    images: [cd1, cd2, cd3, cd4, cd5, cd6, cd7, cd8],
    description:
      "Developed a responsive landing page using Next.js with 20+ structured sections, focusing on performance, clean UI, and seamless user experience.",
    technologies: ["Next.js", "Tailwind CSS"],
    tools: ["Next.js", "Tailwind CSS"],
    frontEnd: "https://github.com/shdhrubo/codely-landing-page",
    backEnd: "https://github.com/shdhrubo/codely-landing-page",
    live: "https://codely-portal.vercel.app/",
  },
];
