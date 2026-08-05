import { ApplicationRoutes } from "./Modules.js";
import Render from "./Render.js";


const Routes = Object.fromEntries(
  ApplicationRoutes.map((route) => [route.path, route])
);

const root = document.getElementById("root");
const render = new Render(root);

export const navigateTo = (path) => {
  window.history.pushState({}, "", path);
  locationHandler();
};

window.navigateTo = navigateTo;

window.addEventListener("click", (event) => {
  const target = event.target.closest("[data-route]");
  if (!target) return;

  event.preventDefault();
  navigateTo(target.getAttribute("href"));
});

const locationHandler = async () => {
  // pega pathname ou rota salva
  window.scrollTo(0, 0);
  const path = window.location.pathname || "/notfound";
  const route =  Routes[path] || Routes["/notfound"];

  if (!route) {
    root.innerHTML = "<p>Página não encontrada.</p>";
    return;
  }

  try {
    const page = await route.component();
    const { template, styles } = page.default;
    render.render(template, styles);
  } catch (err) {
    root.innerHTML = "<p>Página não encontrada.</p>";
    console.error(err);
  }
};

window.onpopstate = locationHandler;

window.addEventListener("DOMContentLoaded", locationHandler);

window.onload = () => {
  navigateTo("/");
};