
function renderParagraphs(paragraphs = []) {
  return paragraphs
    .map(
      (paragraph) => `
        <p class="legal-page__paragraph">
          ${(paragraph)}
        </p>
      `
    )
    .join("");
}

function renderList(items = []) {
  if (!items.length) {
    return "";
  }

  return `
    <ul class="legal-page__list">
      ${items
        .map(
          (item) => `
            <li>${(item)}</li>
          `
        )
        .join("")}
    </ul>
  `;
}

function renderSubsections(subsections = []) {
  return subsections
    .map(
      (subsection) => `
        <div class="legal-page__subsection">
          ${
            subsection.title
              ? `
                <h3 class="legal-page__subsection-title">
                  ${(subsection.title)}
                </h3>
              `
              : ""
          }

          ${renderParagraphs(subsection.paragraphs)}
          ${renderList(subsection.items)}
        </div>
      `
    )
    .join("");
}

function createUniqueSectionId(sectionId, usedIds) {
  const baseId = sectionId || "secao";
  const currentCount = usedIds.get(baseId) || 0;
  const nextCount = currentCount + 1;

  usedIds.set(baseId, nextCount);

  return nextCount === 1 ? baseId : `${baseId}-${nextCount}`;
}

function renderTermsSection(section, sectionIndex, usedIds) {
  const sectionId = createUniqueSectionId(section.id, usedIds);

  return `
    <section
      class="legal-page__section"
      id="${(sectionId)}"
      aria-labelledby="${(`${sectionId}-title`)}"
    >
      <h2
        class="legal-page__section-heading"
        id="${(`${sectionId}-title`)}"
      >
        ${(section.heading)}
      </h2>

      ${renderParagraphs(section.paragraphs)}
      ${renderList(section.list)}
      ${renderSubsections(section.subsections)}

      ${
        section.importantText
          ? `
            <strong class="legal-page__paragraph legal-page__paragraph--important">
              ${(section.importantText)}
            </strong>
          `
          : ""
      }
    </section>
  `;
}

export function renderTermsSections(legalSections) {
  if(!legalSections) return null;

  const usedIds = new Map();

  return legalSections
    .map((section, sectionIndex) =>
      renderTermsSection(section, sectionIndex, usedIds)
    )
    .join("");
}