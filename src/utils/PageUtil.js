export function setStyle(stylePath) {
    const existingStyle = document.querySelector('link[data-page-style="true"]');
    
    if (existingStyle && existingStyle.getAttribute("href") === stylePath) return;
    
    const style = document.createElement("link");

    style.rel = "stylesheet";
    style.href = stylePath;

    document.head.appendChild(style);
}