
export function VLibrasComponent() {
    const existingRoot = document.querySelector("[vw]");
    if (existingRoot) return existingRoot;

    const root = document.createElement("div");
    root.setAttribute("vw", "");
    root.className = "enabled";

    const button = document.createElement("div");
    button.setAttribute("vw-access-button", "");
    button.className = "active";

    const wrapper = document.createElement("div");
    wrapper.setAttribute("vw-plugin-wrapper", "");

    const topWrapper = document.createElement("div");
    topWrapper.className = "vw-plugin-top-wrapper";

    wrapper.appendChild(topWrapper);
    root.append(button);
    root.append(wrapper);

    document.body.appendChild(root);
    return root;
}

export function loadVLibrasScript() {
    if (window.VLibras) return Promise.resolve(window.VLibras);

    return new Promise((resolve, reject) => {
        const existing = document.getElementById("vlibras-script");

        if (existing) {
            existing.addEventListener("load", () => resolve(window.VLibras), { once: true });
            existing.addEventListener("error", reject, { once: true });
            return;
        }

        const script = document.createElement("script");
        script.id = "vlibras-script";
        script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
        script.async = true;

        script.onload = () => resolve(window.VLibras);
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export async function initializeVLibras() {
    if (document.querySelector("[vw]")) return;

    await loadVLibrasScript();
    if (!window.VLibras?.Widget) {
        throw new Error("O script do VLibras foi carregado, mas o Widget não está disponível.");
    }

    VLibrasComponent();
    new window.VLibras.Widget("https://vlibras.gov.br/app");
}