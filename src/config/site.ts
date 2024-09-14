export const siteConfig = {
  name: "toprise",
  org: {
    name: "Toprise Ltd",
    Site: "https://toprise.org",
    location: "Kigali, KK 545 St",
    googlemap: "https://maps.app.goo.gl/K2GisXHaJ91YuMNP6", // random place
    administration: {
      email: "Jeanbosco@toprise.pro", // todo: ask to create company email
      tel: "+250 781 408 443",
      watlink: "https://wa.link/mn6df5", // Created from: https://create.wa.link
      igdm: "https://dm.wa.link/mn6df5", //  Instagram Direct messages
    },
  },
  slogan: `"wise ass slogan goes here"`, // todo: use real slogan here
  url: "https://toprise.pro",
  year: (new Date()).getFullYear(),
  ogImage: "https://ui.shadcn.com/og.jpg",
  devteam: {
    name: "@alainQtec", // todo: change it to "the Toprise Team"
    email: "admin@alainQtec.dev",
    tel: "+250 784 703 243",
    site: "https://alainQtec.dev",
  },
  description:
    "Multi-tenant full stack website with Project Management and Dashboards.",
  links: {
    dev: {
      azure: "https://azure.com/[?]/toprise_pro",
      gitlab: "https://gitlab.com/toprise_pro",
      github: "https://github.com/toprise-pro/toprise-pro",
    },
    socials: {
      instagram: "https://ig.com/toprise_pro",
      facebook: "https://meta.com/toprise_pro",
      twitter: "https://x.com/toprise_pro",
      linkedin: "https://linked.in/toprise_pro",
      youtube: "https://youtube.com/@toprise_pro",
      mastodon: "",
      threads: "",
    },
  },
  services: [
    "We do this ..",
    "and this ..",
    "We also do this ...",
  ],
  navcontent: {
    intro: [
      {
        title: "Introduction",
        href: "/docs",
        description: "Learn how it works.",
      },
      {
        title: "I'm looking to hire",
        href: "/docs",
        description:
          "My team needs freelance talent and pro business solution.",
      },
      {
        title: "I want to offer Pro services",
        href: "/docs",
        description: "I want to work on business projects.",
      },
    ],
    explore: [
      {
        title: "Answers",
        href: "/docs",
        description: "FAQs and answered by toprise freelancers.",
      },
      {
        title: "Community",
        href: "/community",
        description: "Connect with toprise team and community.",
      },
      {
        title: "Guides",
        href: "/docs",
        description: "In-depth guides covering business topics.",
      },
      {
        title: "Agencies",
        href: "/agencies",
        description: "Discover top agencies.",
      },
      {
        title: "Stats",
        href: "/stats",
        description: "lorem ipsum dolor sit amet.",
      },
      {
        title: "Tools",
        href: "/docs",
        description: "lorem ipsum dolor sit amet.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
