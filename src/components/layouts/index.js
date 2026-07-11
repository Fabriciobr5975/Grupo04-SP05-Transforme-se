import Header from "../header";
import Footer from "../footer";

export default function Layout(children) {
    ensureStyle();

    return (`
    <div class="container">
      ${Header}
      <main class="main-content">${children}</main>
      ${Footer()}
    </div>
    `);
}

const ensureStyle = () => {
    const existingStyle = document.querySelector("link[data-page-style]");
    if (existingStyle) return;

    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = "/src/components/layout/style.css";
    document.head.appendChild(style);
};
