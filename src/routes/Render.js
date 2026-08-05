
export default class Render {
  constructor(root) {
    this.root = root;
    this.currentStyle = null;
  }

  render(page, stylePath, scriptPath) {
    this.root.innerHTML = page;
    this.setStyle(stylePath);
    if (scriptPath) {
      this.setScript(scriptPath);
    }
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

    if (existingScript && existingScript.getAttribute("src") === scriptPath) return;

    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.src = scriptPath;
    script.setAttribute("data-page-script", "true");

    document.head.appendChild(script);
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