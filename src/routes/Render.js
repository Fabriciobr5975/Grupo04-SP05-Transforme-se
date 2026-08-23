import { initializeVLibras } from "../components/vlibras/index.js";

export default class Render {
  constructor(root) {
    this.root = root;
    this.currentStyle = null;
  }

  async render(page, stylePath, scriptPath) {
    await this.transitionOut();

    this.root.innerHTML = page;
    
    initializeVLibras().catch((error) => {
      console.error("Não foi possível inicializar o VLibras.", error);
    });

    this.setStyle(stylePath);
    if (scriptPath) {
      this.setScript(scriptPath);
    }

    this.root.classList.remove("page-transition--out");
    this.root.classList.add("page-transition--in");
  }

  transitionOut() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return Promise.resolve();
    }

    if (this.root.classList.contains("page-transition--out")) {
      return Promise.resolve();
    }

    this.root.classList.remove("page-transition--in");
    this.root.classList.add("page-transition--out");

    return new Promise((resolve) => {
      this.root.addEventListener("animationend", resolve, { once: true });
    });
  }

  setStyle(stylePath) {
    if (!stylePath) return;

    const existingStyle = document.querySelector('link[data-page-style="true"]');

    if (existingStyle && existingStyle.getAttribute("href") === stylePath) return;

    if (existingStyle) existingStyle.remove();

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = stylePath;
    style.setAttribute("data-page-style", "true");

    document.head.appendChild(style);
    this.currentStyle = style;
  }

  setScript(scriptPath) {
    const existingScript = document.querySelector('script[data-page-script="true"]');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.type = "module";
    script.src = `${scriptPath}?render=${Date.now()}`;
    script.setAttribute("data-page-script", "true");

    document.body.appendChild(script);
  }

  removeStyle() {
    const existingStyle = document.querySelector('link[data-page-style="true"]');
    if (existingStyle) {
      existingStyle.remove();
    }
  }

  removeScript() {
    const existingScript = document.querySelector('script[data-page-script="true"]');

    if (existingScript) {
      existingScript.remove();
    }
  }

  unMount() {
    this.root.innerHTML = "";
    this.removeStyle();
    this.removeScript();
  }
}