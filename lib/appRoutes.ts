export const AppRoutes = {
  home: {
    href: "/",
    renderUrl: () => AppRoutes.home.href
  },

  info: {
    href: "/info",
    renderUrl: () => AppRoutes.info.href
  },

  resume: {
    href: "/resume",
    renderUrl: () => AppRoutes.resume.href
  },

  demo: {
    href: "/demo",
    renderUrl: () => AppRoutes.demo.href
  },

  experience: {
    href: "/experience",
    renderUrl: () => AppRoutes.experience.href
  }

}