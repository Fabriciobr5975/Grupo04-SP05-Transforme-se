export default function Button(props = {}) {
  const { innerText = "", route = "", href = "", ...rest } = props;

  const attrs = Object.entries(rest)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  const destination = route || href;
  const routeAttrs = destination ? `data-route href="${destination}"` : "";

  return `<button class="button" ${attrs} ${routeAttrs}>${innerText}</button>`;
}