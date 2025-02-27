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
  },

  //Demo group

  introduction: {
    href: "/demo",
    renderUrl: () => AppRoutes.introduction.href
  },

  reactQuery: {
    href: "/react-query",
    renderUrl: () => AppRoutes.reactQuery.href
  },

  permission: {
    href: "/permission",
    renderUrl: () => AppRoutes.permission.href
  },

  form: {
    href: "/form",
    renderUrl: () => AppRoutes.form.href
  }


}