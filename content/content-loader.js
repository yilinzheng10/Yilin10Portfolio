(function () {
  const contentFiles = [
    ["news", "content/published/news.json"],
    ["activities", "content/published/activities.json"],
    ["projects", "content/published/projects.json"],
    ["experiments", "content/published/experiments.json"],
    ["fieldNotes", "content/published/field-notes.json"],
    ["affiliations", "content/published/affiliations.json"],
    ["awards", "content/published/awards.json"],
    ["publications", "content/published/publications.json"],
    ["talks", "content/published/talks.json"],
    ["media", "content/published/media.json"]
  ];

  function isPublicItem(item) {
    return item && item.status === "published" && item.visibility === "public";
  }

  async function loadJson(path) {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load ${path}`);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }

  async function loadPublicPortfolioContent() {
    const groups = {};

    await Promise.all(contentFiles.map(async ([key, path]) => {
      try {
        const items = await loadJson(path);
        groups[key] = items.filter(isPublicItem);
      } catch (error) {
        groups[key] = [];
        console.warn(error.message);
      }
    }));

    return groups;
  }

  window.portfolioContent = {
    isPublicItem,
    loadPublicPortfolioContent
  };
})();
