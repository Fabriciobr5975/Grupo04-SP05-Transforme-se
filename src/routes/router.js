import { PublicRoutes } from "./Modules.js";
import Render from "./Render.js";

const Routes = Object.fromEntries(
  PublicRoutes.map((route) => [route.path, route])
);

const root = document.getElementById("root");
const render = new Render(root);

const navigateTo = (path) => {
  sessionStorage.setItem("currentRoute", path);
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
  // pega pathname ou rota salva
  const path = window.location.pathname || sessionStorage.getItem("currentRoute") || "/";
  const route = Routes[path] || Routes["/"];

  if (!route) {
    root.innerHTML = "<p>Página não encontrada.</p>";
    return;
  }

  try {
    const page = await route.component();
    const { template, styles } = page.default;
    render.render(template, styles);
  } catch (err) {
    root.innerHTML = "<p>Erro ao carregar a rota.</p>";
    console.error(err);
  }
};

window.onpopstate = locationHandler;

window.onload = () => {
  const savedRoute = sessionStorage.getItem("currentRoute") || "/";
  navigateTo(savedRoute);
};