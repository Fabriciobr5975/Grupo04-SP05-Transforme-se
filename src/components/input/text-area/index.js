export function TextArea({
    id = "text-area",
    placeholder = "",
    value = "",
    minLength = 1,
    maxLength = 500,
    required = false,
    onChange
} = {}) {
    const section = document.createElement("section");
    section.className = "text-area";

    const textarea = document.createElement("textarea");
    textarea.className = "text-area__field";
    textarea.id = id;
    textarea.name = id;
    textarea.placeholder = placeholder;
    textarea.value = value;
    textarea.minLength = minLength;
    textarea.maxLength = maxLength;
    textarea.required = required;

    textarea.addEventListener("input", (event) => {
        onChange?.(event.target.value, event);
    });

    section.appendChild(textarea);

    return section;
}