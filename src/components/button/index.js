export default function Button(props = {}) {
  const { innerText = "", ...rest } = props;

  const attrs = Object.entries(rest)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  return `<button class="button" ${attrs}>${innerText}</button>`;
}