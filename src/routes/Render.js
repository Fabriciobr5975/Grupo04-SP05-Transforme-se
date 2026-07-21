
export default class Render {
  constructor(root) {
    this.root = root;
    this.currentStyle = null;
  }

  render(page, stylePath) {
    this.root.innerHTML = page;
    this.setStyle(stylePath);
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

  removeStyle() {
    const existingStyle = document.querySelector('link[data-page-style="true"]');
    if (existingStyle) {
      existingStyle.remove();
    }
  }

  unMount() {
    this.root.innerHTML = "";
    this.removeStyle();
  }
}