
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
    path: "/cart",
    component: () => import("../pages/user/cart/index.js"),
  },
  {
    path: "/profile/orders",
    component: () => import("../pages/user/orders/index.js"),
  },
  {
    path: "/help-center",
    component: () => import("../pages/infos/help-center/index.js"),
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
  {
    path: "/product",
    component: () => import("../pages/product-detail/index.js"),
  },
  {
    path: "/checkout",
    component: () => import("../pages/user/checkout/index.js"),
  },
  {
    path: "/checkout/confirm",
    component: () => import("../pages/user/checkout/confirm-message/index.js"),
  },
  {
    path: "/catalog",
    component: () => import("../pages/catalog/index.js"),
  },
  {
    path: "/profile/favorites",
    component: () => import("../pages/user/favorites/index.js"),
  },
  {
    path: "/profile/feedback",
    component: () => import("../pages/user/feedback/index.js"),
  },
]);