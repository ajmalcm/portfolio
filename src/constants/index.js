export const myProjects = [
  {
    id: 1,
    title: "QR Menu App",
    description:
      "A digital QR-based menu platform designed for restaurants to improve customer engagement through a clean and responsive UI.",
    subDescription: [
      "Developed using Next.js and Tailwind CSS for responsive design.",
      "Integrated Framer Motion for smooth animations and UI transitions.",
      "Focused on fast load time and minimal UI to enhance restaurant experiences.",
    ],
    href: "https://github.com/ajmalcm/QrMenu",
    logo: "",
    image: "/assets/projects/qrmenu.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "Framer Motion", path: "/assets/logos/framer.svg" },
    ],
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "A MERN-stack chat application supporting real-time messaging, file sharing, and modern UI features.",
    subDescription: [
      "Built real-time messaging with Socket.io.",
      "Enabled file sharing including images, docs, and videos.",
      "Used MUI and Chart.js for an interactive and visually appealing dashboard.",
    ],
    href: "https://github.com/ajmalcm/chat_frontend",
    logo: "",
    image: "/assets/projects/chatapp.jpg",
    tags: [
      { id: 1, name: "MERN", path: "/assets/logos/mern.svg" },
      { id: 2, name: "MUI", path: "/assets/logos/mui.svg" },
      { id: 3, name: "Socket.io", path: "/assets/logos/socketio.svg" },
      { id: 4, name: "Chart.js", path: "/assets/logos/chartjs.svg" },
    ],
  },
  {
    id: 3,
    title: "GameInspo",
    description:
      "An interactive Sentry.com-style landing page clone with a game-inspired UI, showcasing smooth scroll animations.",
    subDescription: [
      "Recreated Sentry’s landing page layout with game aesthetics.",
      "Used GSAP for smooth scroll-based animations and interactivity.",
      "Crafted a fluid, modern frontend experience using Next.js and Tailwind CSS.",
    ],
    href: "https://github.com/ajmalcm/GameInspo",
    logo: "",
    image: "/assets/projects/gameinspo.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 3, name: "GSAP", path: "/assets/logos/gsap.svg" },
    ],
  },
  {
    id: 4,
    title: "EggMaster",
    description:
      "A creative, animated frontend-only egg boiling timer application featuring different boiling levels.",
    subDescription: [
      "Crafted a playful single-page app to visualize egg boiling stages.",
      "Used Next.js and Tailwind for structure and styling.",
      "Added themed animations and GIFs for user interaction.",
    ],
    href: "https://github.com/ajmalcm/eggMaster",
    logo: "",
    image: "/assets/projects/eggmaster.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "Startup Media",
    description:
      "A platform to pitch and discover startup ideas, built with full authentication, CMS integration, and social features.",
    subDescription: [
      "Used Sanity as a headless CMS for managing pitch content.",
      "Implemented GitHub and NextAuth for secure login.",
      "Enabled social visibility with profile viewing and real-time updates.",
    ],
    href: "https://github.com/ajmalcm/startupMedia",
    logo: "",
    image: "/assets/projects/startupmedia.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Sanity", path: "/assets/logos/sanity.svg" },
      { id: 3, name: "NextAuth", path: "/assets/logos/nextauth.svg" },
      { id: 4, name: "Shadcn", path: "/assets/logos/shadcn.svg" },
    ],
  },
  {
    id: 6,
    title: "PictoSaaS - AI Image Transformer",
    description:
      "An AI-powered SaaS image editing tool that allows users to transform and enhance images with Cloudinary AI and Stripe payments.",
    subDescription: [
      "Integrated Cloudinary AI API for real-time image transformation.",
      "Used Clerk for user authentication and Stripe for billing.",
      "Built a complete SaaS model with webhook support and account usage tracking.",
    ],
    href: "https://github.com/ajmalcm/pictosaas",
    logo: "",
    image: "/assets/projects/pictosaas.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "Clerk", path: "/assets/logos/clerk.svg" },
      { id: 3, name: "Stripe", path: "/assets/logos/stripe.svg" },
      { id: 4, name: "Cloudinary", path: "/assets/logos/cloudinary.svg" },
    ],
  },
  {
    id: 7,
    title: "Nike Landing UI",
    description:
      "A clean and modern landing page for Nike, focusing on smooth product layout and animations.",
    subDescription: [
      "Crafted a stylish UI for Nike's product landing experience.",
      "Built using React and Tailwind CSS with responsive design principles.",
      "Focused on visual hierarchy and hover animations.",
    ],
    href: "https://github.com/ajmalcm/nikeUI",
    logo: "",
    image: "/assets/projects/nikeui.jpg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "github",
    href: "https://github.com/ajmalcm",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ajuzz08",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    job: "Accenture",
    date: "2022 – Present",
    contents: [
      "Built responsive, scalable UIs using Vue.js and Tailwind CSS.",
      "Worked with REST APIs, state management (Pinia), and agile workflows.",
      "Delivered features based on JIRA stories and collaborated closely with design and backend teams.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Personal Projects & Freelance",
    date: "2023 – Present",
    contents: [
      "Created full-stack apps using React, Next.js, and Vue 3.",
      "Used Redux, Tailwind, Framer Motion, and GSAP for slick UI experiences.",
      "Integrated Stripe, Cloudinary, Clerk, NextAuth, and Socket.io in real-world apps.",
    ],
  },
  {
    title: "Indie Maker & Creative Technologist",
    job: "Self-Initiated Projects",
    date: "2024 – Present",
    contents: [
      "Building fun and useful side projects like PictoSaaS, StartupMedia, and EggMaster.",
      "Exploring startup ideas and digital product design.",
      "Currently working on a fashion brand called ‘LIT LACES’ focused on streetwear aesthetics.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];