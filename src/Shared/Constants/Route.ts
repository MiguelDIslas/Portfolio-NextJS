/**
 * Route item.
 */
type RouteItem = {
  /**
   * The href of the route.
   */
  href: string;

  /**
   * The text of the route.
   */
  text: string;

  /**
   * Translate.
   */
  translate: 'layout.home' | 'layout.about' | 'layout.resume' | 'layout.portfolio' | 'layout.contact';
};

/**
 * Route object.
 */
interface Route {
  /**
   * Home route.
   */
  home: RouteItem;

  /**
   * About route.
   */
  about: RouteItem;

  /**
   * Resume route.
   */
  resume: RouteItem;

  /**
   * Portfolio route.
   */
  portfolio: RouteItem;

  /**
   * Contact route.
   */
  contact: RouteItem;
}

export const Routes: Route = {
  home: {
    href: "/",
    text: "Home",
    translate: 'layout.home',
  },
  about: {
    href: "/about",
    text: "About",
    translate: 'layout.about',
  },
  resume: {
    href: "/resume",
    text: "Resume",
    translate: 'layout.resume',
  },
  portfolio: {
    href: "/portfolio",
    text: "Portfolio",
    translate: 'layout.portfolio',
  },
  contact: {
    href: "/contact",
    text: "Contact",
    translate: 'layout.contact',
  },
};
