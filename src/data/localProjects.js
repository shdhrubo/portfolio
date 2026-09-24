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

import nu1 from "../images/projects/nova-ui/nova-1.png";
import nu2 from "../images/projects/nova-ui/nova-2.png";
import nu3 from "../images/projects/nova-ui/nova-3.png";
import nu4 from "../images/projects/nova-ui/nova-4.png";

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
      "Developed a full-stack web application using Next.js and PostgreSQL. Designed backend REST APIs with Route Handlers and Server Actions. Built 20+ responsive UI sections.",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    tools: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    frontEnd: "https://github.com/shdhrubo/codely-landing-page",
    backEnd: "https://github.com/shdhrubo/codely-landing-page",
    live: "https://codely-portal.vercel.app/",
  },
  {
    _id: "nova-ui",
    serial: "05",
    title: "Nova UI",
    img1: nu1,
    images: [nu1, nu2, nu3, nu4],
    tagline:
      "Open-source, production-ready UI component library and design system built end-to-end with AI-assisted engineering.",
    description:
      "Open-source, production-ready UI component library and design system built end-to-end with AI-assisted software engineering. Designed, implemented, tested, published to npm, and deployed from scratch — using AI as a pair-programming assistant throughout the entire SDLC.",
    highlights: [
      { icon: "🎨", text: "Token-first design system — color, typography, spacing, shadow & radius tokens via TypeScript & CSS custom properties" },
      { icon: "📐", text: "CSS Cascade Layers (@layer nova.*) — minimal specificity conflicts, easy consumer customization" },
      { icon: "🌓", text: "Zero-JavaScript dark mode via data-nova-theme=\"dark\" attribute & CSS custom properties" },
      { icon: "🧩", text: "16 Angular standalone components — Button, Input, Modal, Select, Tabs, Tooltip, and more" },
      { icon: "♿", text: "WCAG 2.1 AA accessibility — keyboard nav, focus trapping, ARIA attributes, aria-live regions" },
      { icon: "📦", text: "Nx monorepo — organized into reusable packages with a shared build graph" },
      { icon: "🚀", text: "Automated CI/CD — independent docs deployment & npm publishing pipelines" },
      { icon: "🏷️", text: "Automated release management — Changesets, semantic versioning, Git tags, GitHub Releases" },
      { icon: "🌐", text: "Public npm distribution — packaged & published for developers to consume" },
    ],
    aiTable: [
      { phase: "Requirements", work: "Component scope, design-system requirements, API contracts" },
      { phase: "Architecture", work: "Monorepo structure, package boundaries, token architecture, CSS strategy" },
      { phase: "Implementation", work: "Component development, reusable patterns, state management" },
      { phase: "Accessibility", work: "Keyboard interaction, ARIA implementation, focus management" },
      { phase: "Testing", work: "Test scenarios and edge cases" },
      { phase: "DevOps", work: "GitHub Actions, artifact flow, release pipelines" },
      { phase: "Release", work: "npm publishing, Changesets, semantic versioning, GitHub Releases" },
    ],
    technologies: ["Angular", "TypeScript", "CSS Custom Properties", "CSS Cascade Layers", "Nx", "GitHub Actions", "Vercel", "npm"],
    tools: ["Angular", "TypeScript", "Nx", "GitHub Actions", "Vercel", "npm", "Changesets"],
    frontEnd: "https://github.com/shdhrubo/nova-ui",
    backEnd: "#",
    live: "https://nova-ui-docs-tau.vercel.app/",
    npm: "#",
  },
];
