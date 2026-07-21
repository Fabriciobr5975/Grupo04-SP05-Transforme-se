import Header from "../components/header/index.js";
import Footer from "../components/footer/index.js";

export default function BaseLayout(children) {
  return (`
    <div class="container">
      ${Header()}
      <main class="main-content">${children}</main>
      ${Footer()}
    </div>
  `)
}
