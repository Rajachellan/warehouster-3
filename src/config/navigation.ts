export interface SubmenuItem {
  name: string;
  href: string;
}

export interface DropdownItem {
  name: string;
  href: string;
  submenu?: SubmenuItem[];
}

export interface NavItem {
  name: string;
  href: string;
  dropdown?: DropdownItem[];
}

/** Canonical app routes — keep in sync with src/app route pages */
export const routes = {
  home: "/",
  about: "/about",
  careers: "/careers",
  trackRecord: "/track-record",
  services: "/services",
  landAcquisition: "/services/land-acquisition",
  developmentManagement: "/services/development-management",
  warehouseConstruction: "/services/warehouse-construction",
  industrialConsulting: "/services/industrial-consulting",
  projects: "/projects",
  news: "/news",
  caseStudy: "/case-study",
  platform: "/platform",
  blogs: "/blogs",
  contact: "/contact",
  events: "/events",
  project: (slug: string) => `/projects/${slug}`,
} as const;

export const navLinks: NavItem[] = [
  { name: "Home", href: routes.home },
  {
    name: "About",
    href: routes.about,
    dropdown: [
      { name: "About Warehouster", href: `${routes.about}#overview` },
      { name: "Leadership", href: `${routes.about}#leadership` },
      { name: "Purpose", href: `${routes.about}#purpose` },
      { name: "Careers", href: routes.careers },
      { name: "Track Record", href: routes.trackRecord },
    ],
  },
  {
    name: "Services",
    href: routes.services,
    dropdown: [
      { name: "Land Owners", href: routes.landAcquisition },
      { name: "Development Management", href: routes.developmentManagement },
      { name: "Warehouse Construction", href: routes.warehouseConstruction },
      { name: "Industrial Consulting", href: routes.industrialConsulting },
    ],
  },
  {
    name: "Projects",
    href: routes.projects,
    dropdown: [
      {
        name: "Completed",
        href: `${routes.projects}#completed`,
        submenu: [
          { name: "Redhills", href: routes.project("redhills-development") },
          { name: "Chengalpattu", href: routes.project("chengalpattu-industrial") },
          { name: "Jaisalmer", href: routes.project("jaisalmer-bts") },
        ],
      },
      {
        name: "In Progress",
        href: `${routes.projects}#in-progress`,
        submenu: [
          { name: "Pondicherry", href: routes.project("pondicherry-bts") },
          { name: "Hosur (65 acres)", href: routes.project("hosur-logistics-hub") },
          { name: "Thiruvallur (21 acres)", href: routes.project("thiruvallur-industrial") },
        ],
      },
      {
        name: "Pipeline",
        href: `${routes.projects}#pipeline`,
        submenu: [
          { name: "Redhills (50 acres)", href: routes.project("redhills-phase-2") },
          { name: "Krishnagiri (55 acres)", href: routes.project("krishnagiri-integrated") },
        ],
      },
    ],
  },
  {
    name: "News",
    href: routes.news,
    dropdown: [
      { name: "Trending News", href: routes.news },
      { name: "Industry Insights", href: `${routes.news}#insights` },
      { name: "Case Study", href: routes.caseStudy },
    ],
  },
  { name: "Intelligence", href: routes.platform },
  { name: "Blogs", href: routes.blogs },
  { name: "Contact", href: routes.contact },
];

export const footerNavLinks = [
  { name: "Home", href: routes.home },
  { name: "About", href: routes.about },
  { name: "Services", href: routes.services },
  { name: "Projects", href: routes.projects },
  { name: "Blogs", href: routes.blogs },
  { name: "Careers", href: routes.careers },
] as const;

export const footerServiceLinks = [
  { name: "Land Owners", href: routes.landAcquisition },
  { name: "Development Management", href: routes.developmentManagement },
  { name: "Warehouse Construction", href: routes.warehouseConstruction },
  { name: "Industrial Consulting", href: routes.industrialConsulting },
] as const;
