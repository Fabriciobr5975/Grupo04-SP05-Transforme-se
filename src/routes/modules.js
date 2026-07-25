
export const ApplicationRoutes = Object.freeze([
  {
    path: "/",
    component: () => import("../pages/home/index.js"),
  },
  {
    path: "/auth/login",
    component: () => import("../pages/auth/login/index.js"),
  },
  {
    path: "/auth/register",
    component: () => import("../pages/auth/register/index.js"),
  },
  {
    path: "/auth/opcional/address",
    component: () => import("../pages/auth/optional-address/index.js"),
  },
  {
    path: "/auth/confirm",
    component: () => import("../pages/auth/confirm/index.js"),
  },
  {
    path: "/notfound",
    component: () => import("../pages/notfound/index.js"),
  },
  {
    path: "/profile",
    component: () => import("../pages/user/profile/index.js"),
  },
  {
    path: "/profile/addresses",
    component: () => import("../pages/user/addresses/index.js"),
  },
  {
    path: "/profile/cart",
    component: () => import("../pages/user/cart/index.js"),
  },
  {
    path: "/profile/orders",
    component: () => import("../pages/user/orders/index.js"),
  },
  {
    path: "/help-center",
    component: () => import("../pages/help-center/index.js"),
  },
  {
    path: "/terms-of-use",
    component: () => import("../pages/legal/terms-use/index.js"),
  },
  {
    path: "/privacy-policies",
    component: () => import("../pages/legal/privacy-policies/index.js"),
  },
  {
    path: "/about-us",
    component: () => import("../pages/infos/about-us/index.js"),
  },
]);