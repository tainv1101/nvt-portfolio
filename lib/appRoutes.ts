export const AppRoutes = {


  home: {
    href: "/old-version/",
    renderUrl: () => AppRoutes.home.href
  },

  info: {
    href: "/old-version/info",
    renderUrl: () => AppRoutes.info.href
  },

  resume: {
    href: "/old-version/resume",
    renderUrl: () => AppRoutes.resume.href
  },
  experience: {
    href: "/old-version/experience",
    renderUrl: () => AppRoutes.experience.href
  },

  
  //Practice group
  form: {
    href: "/practice/form",
    renderUrl: () => AppRoutes.form.href
  },

  practice: {
    href: "/practice/form",
    renderUrl: () => AppRoutes.practice.href
  },

  reactQuery: {
    href: "/practice/react-query",
    renderUrl: () => AppRoutes.reactQuery.href
  },

  // permission: {
  //   href: "/practice/permission",
  //   renderUrl: () => AppRoutes.permission.href
  // },

  virtualizedInfiniteScrolling: {
    href: "/practice/virtualized-infinite-scrolling",
    renderUrl: () => AppRoutes.virtualizedInfiniteScrolling.href
  },

  framerMotion: {
    href: "/practice/framer-motion",
    renderUrl: () => AppRoutes.framerMotion.href
  },

  gsap: {
    href: "/practice/gsap",
    renderUrl: () => AppRoutes.gsap.href
  },

  serverSideRendering: {
    href: "/practice/server-side-rendering",
    renderUrl: () => AppRoutes.serverSideRendering.href
  },
}