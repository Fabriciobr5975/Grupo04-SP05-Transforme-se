
export const PublicRoutes = Object.freeze([
  {
    path: "/auth/login",
    component: () => import("../pages/auth/login/index.js"),
  },
  {
    path: "/auth/register",
    component: () => import("../pages/auth/register/index.js"),
  },
]);