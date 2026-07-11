import { PublicRoutes } from "./modules.js";

const Routes = Object.fromEntries(
  PublicRoutes.map((route) => [route.path, route])
);

const root = document.getElementById("root");

const navigateTo = (path) => {
  window.history.pushState({}, "", path);
  locationHandler();
};

window.addEventListener("click", (event) => {
  const target = event.target.closest("[data-route]");

  if (!target) return;

  event.preventDefault();
  navigateTo(target.getAttribute("href"));
});

const locationHandler = async () => {
  const location = window.location.pathname || "/";
  const route = Routes[location] || Routes["/auth/login"];

  const module = await route.component();
  const render = module.renderLoginPage || module.renderRegisterPage || module.default;

  if (typeof render === "function") {
    render(root);
    return;
  }

  root.innerHTML = "<p>Página não encontrada.</p>";
};

window.onpopstate = locationHandler;
window.navigateTo = navigateTo;

locationHandler();