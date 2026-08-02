export default function Input(id, label = null, props = {}) {
  const { innerText = "", ...rest } = props;

  const attrs = Object.entries(rest)
    .map(([key, value]) => `${key}="${value}"`)
    .join(" ");

  id = id || `input-${Math.floor(Math.random() * 10000)}`;

  return `
    <div class="input__content">
      <div class="input__label">
        ${!label ? "" : `<label for="${id}">${label}</label>` }
      </div>
      <div class="input__main">
        <input id=${id} ${attrs} />
      </div>
    </div>
  `;
}
