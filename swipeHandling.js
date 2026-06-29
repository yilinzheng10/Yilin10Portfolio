const works = [
  {
    id: "climate-shading",
    title: "Impact of Climate-Responsive Shading",
    year: "2025",
    type: "Research",
    sections: ["systems", "emerging-systems"],
    status: "Published",
    tags: ["shading", "energy", "simulation"],
    tools: "Grasshopper, Rhino, ClimateStudio, Ladybug",
    coordinates: "ACSA 113 / REPAIR",
    media: ["Results diagram", "Peer-reviewed paper", "Simulation"],
    indexGroup: "Research",
    image: "assets/ACSA Results Diagram.1.jpg",
    role: "Researcher / computational design author",
    audience: "Building-envelope research, climate-responsive design, conference review",
    source: "YilinZhengDesign Works / ACSA 113 abstract book",
    sourceNote: "Reference content consolidated from the prior portfolio entry and ACSA publication links.",
    evidence: [
      { type: "link", kind: "PAPER", label: "View paper", url: "https://drive.google.com/file/d/1uW5BejPOhL1PCofYlklacAtd8AUmlY5u/view?usp=sharing", caption: "Full research paper linked from the original portfolio." },
      { type: "link", kind: "BOOK", label: "ACSA 113 Abstract Book", url: "https://www.acsa-arch.org/wp-content/uploads/2025/02/ACSA113-Abstract-Book-11Feb2025-WebVersion.pdf", caption: "Conference context for ACSA 113th Annual Meeting: REPAIR." }
    ],
    summary: "A peer-reviewed study of how rotational axes in climate-responsive shading systems affect shade and interior energy consumption.",
    note: "Presented through the Association of Collegiate Schools of Architecture 113th Annual Meeting: REPAIR.",
    links: [
      ["View paper", "https://drive.google.com/file/d/1uW5BejPOhL1PCofYlklacAtd8AUmlY5u/view?usp=sharing"],
      ["Abstract book", "https://www.acsa-arch.org/wp-content/uploads/2025/02/ACSA113-Abstract-Book-11Feb2025-WebVersion.pdf"]
    ]
  },
  {
    id: "scaled-model",
    title: "Climate System / Scaled Model",
    year: "2025",
    type: "Prototype",
    sections: ["prototypes", "systems"],
    status: "Built",
    tags: ["physical computing", "actuation", "interface"],
    tools: "SwiftUI, ESP32 microcontroller, servo motor",
    coordinates: "Prototype / 1:N",
    media: ["Physical model", "Demo video", "Control interface"],
    indexGroup: "Prototypes",
    image: "assets/0318.mov",
    role: "Prototype designer / interaction builder",
    audience: "Physical-computing review, responsive-environment testing",
    source: "YilinZhengDesign selected works",
    sourceNote: "Reference content consolidated from the original scaled model demo entry.",
    evidence: [
      { type: "media", kind: "VIDEO", label: "Scaled model demo", path: "assets/0318.mov", caption: "Video record of the control interface driving the physical model." }
    ],
    summary: "A scaled physical prototype connecting a SwiftUI control interface to an ESP32 microcontroller and servo-driven movement.",
    note: "The demo documents the relationship between a digital control state and the movement of the physical model."
  },
  {
    id: "architectural-studies",
    title: "Comprehensive Architectural Design Studies",
    year: "2022–2025",
    type: "Archive",
    sections: ["archive", "systems"],
    status: "Selected works",
    tags: ["BIM", "fabrication", "sustainable design"],
    tools: "Rhino, Revit, fabrication workflows, Adobe Suite",
    coordinates: "Architecture portfolio / 2022–2025",
    media: ["Portfolio preview", "BIM", "Fabrication", "Iteration studies"],
    indexGroup: "Spatial Systems",
    image: "assets/Arch_Portfolio.png",
    role: "Architectural designer",
    audience: "Architecture portfolio review",
    source: "YilinZhengDesign selected works",
    sourceNote: "Added from the original portfolio's selected architectural studies entry.",
    evidence: [
      { type: "media", kind: "PREVIEW", label: "Architecture portfolio overview", path: "assets/Arch_Portfolio.png", caption: "Portfolio preview image from the original Works page." },
      { type: "link", kind: "PORTFOLIO", label: "View portfolio PDF", url: "https://drive.google.com/file/d/1_k6umQeYP2JBixde_zEkOplPiKMWSICC/view?usp=sharing", caption: "Comprehensive architectural design studies, linked from the original portfolio." }
    ],
    summary: "A selected archive of architectural studies spanning BIM, fabrication, iterative design, and sustainable design work from 2022 to 2025.",
    note: "This archive entry gives the atlas a place for broader architectural work outside the computational systems case studies."
  },
  {
    id: "bento",
    title: "BENTO",
    year: "2025",
    type: "System",
    sections: ["systems", "prototypes"],
    status: "Prototype",
    tags: ["retail", "spatial intelligence", "location data"],
    tools: "Grasshopper, Mapbox, GIS, Rhino, Figma, Python, HTML, CSS, JavaScript",
    coordinates: "Columbia GSAPP / CDP",
    media: ["Layout GIF", "Web UI", "Rhino.Compute", "3D model"],
    indexGroup: "Spatial Systems",
    image: "assets/bento_layout.gif",
    secondary: ["assets/Bento_Rhino.Compute.gif"],
    role: "Computational designer / web interface developer",
    audience: "Retail spatial management, computational design, tool prototyping",
    source: "YilinZhengDesign Works / Medium article / web-gh repository",
    sourceNote: "Reference content consolidated from the original BENTO portfolio entries.",
    evidence: [
      { type: "media", kind: "LAYOUT", label: "BENTO layout study", path: "assets/bento_layout.gif", caption: "Animated spatial layout study for small retail store planning." },
      { type: "media", kind: "COMPUTE", label: "Rhino.Compute UI demo", path: "assets/Bento_Rhino.Compute.gif", caption: "Web interface responding to Grasshopper and Rhino model updates." },
      { type: "link", kind: "ARTICLE", label: "Project article", url: "https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83", caption: "Original article linked from the source portfolio." },
      { type: "link", kind: "CODE", label: "Web UI repository", url: "https://github.com/yilinzheng10/web-gh", caption: "Repository for the Rhino.Compute web interface." }
    ],
    summary: "A platform using data-driven location insights for spatial management in small retail stores.",
    note: "The web interface responds simultaneously to a Grasshopper and Rhino model through Rhino.Compute.",
    links: [
      ["Project article", "https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83"],
      ["Web UI repository", "https://github.com/yilinzheng10/web-gh"]
    ]
  },
  {
    id: "terracurve",
    title: "Terracurve Tower",
    year: "2024",
    type: "System",
    sections: ["systems", "archive"],
    status: "Designed",
    tags: ["BIM", "mixed-use", "climate-responsive envelope"],
    tools: "Rhino, Grasshopper, Revit, ClimateStudio, Lumion, Adobe Suite",
    coordinates: "New York, NY / NOMAD",
    media: ["BIM model", "Climate analysis", "Drawings", "Renderings"],
    indexGroup: "Spatial Systems",
    image: "assets/project/BIM/overview1.png",
    secondary: [
      "assets/project/BIM/BIM-climateanalysis.jpg",
      "assets/project/BIM/facade_gh.png",
      "assets/project/BIM/stacking.png",
      "assets/project/BIM/revit_axon1.png"
    ],
    role: "Designer and BIM Specialist",
    audience: "Architecture, BIM interoperability, climate-responsive envelope design",
    source: "YilinZhengDesign BIM project page",
    sourceNote: "Reference content consolidated from the dedicated Terracurve Tower documentation page.",
    evidence: [
      { type: "media", kind: "CLIMATE", label: "Site and climate analysis", path: "assets/project/BIM/BIM-climateanalysis.jpg", caption: "Sun exposure and wind analysis guided orientation and facade articulation." },
      { type: "media", kind: "FACADE", label: "Grasshopper facade workflow", path: "assets/project/BIM/facade_gh.png", caption: "Parametric facade/form-finding translated into BIM documentation." },
      { type: "media", kind: "STACK", label: "Program stacking", path: "assets/project/BIM/stacking.png", caption: "Vertical organization of retail, garden, office, hotel, residential, and MEP zones." },
      { type: "media", kind: "AXON", label: "Revit axonometric", path: "assets/project/BIM/revit_axon1.png", caption: "Coordinated model view from the BIM workflow." }
    ],
    summary: "A mixed-use high-rise integrating flexible offices, retail, and a boutique hotel within a climate-responsive envelope.",
    note: "Role: Designer and BIM Specialist. Team: Yilin Zheng, Manas Bhatia, Yuxi Dai."
  },
  {
    id: "where-water-reached",
    title: "Where the Water Reached",
    year: "2025",
    type: "Prototype",
    sections: ["prototypes", "emerging-systems"],
    status: "Live",
    tags: ["flood risk", "resources", "machine learning"],
    tools: "Grasshopper, Mapbox, GIS, Rhino, Figma, Python, Web UI, Machine Learning",
    coordinates: "Flood risk / public resources",
    media: ["Live tool", "Demo video", "User journey", "Interface"],
    indexGroup: "Prototypes",
    image: "assets/0402.mp4",
    role: "Tool designer / researcher",
    audience: "Home buyers, flood-risk resource navigation, public-facing climate tools",
    source: "YilinZhengDesign Works / FloodRisk prototype",
    sourceNote: "Reference content consolidated from the original flood-risk prototype and user-flow entries.",
    evidence: [
      { type: "media", kind: "DEMO", label: "Prototype demo", path: "assets/0402.mp4", caption: "Video capture of the flood-risk resource tool." },
      { type: "link", kind: "LIVE", label: "Open prototype", url: "https://yilinzheng10.github.io/FloodRisk/", caption: "Live prototype linked from the original portfolio." },
      { type: "link", kind: "FLOW", label: "User mapping", url: "https://embed.figma.com/board/GQ3y8G3sUmI5mdqXefN0AB/User-Mapping?node-id=0-1&embed-host=share", caption: "User journey and user-flow research for tool design." }
    ],
    summary: "A prototype tool for navigating flood-risk resources and translating research into an accessible public-facing interface.",
    note: "The tool development includes user journey and user flow research.",
    links: [
      ["Open prototype", "https://yilinzheng10.github.io/FloodRisk/"],
      ["User mapping", "https://embed.figma.com/board/GQ3y8G3sUmI5mdqXefN0AB/User-Mapping?node-id=0-1&embed-host=share"]
    ]
  },
  {
    id: "high-risk-areas",
    title: "High-Risk Areas & People Who Live There",
    year: "2024",
    type: "Research",
    sections: ["field-notes", "systems"],
    status: "Live",
    tags: ["housing", "flood risk", "storytelling"],
    tools: "Mapbox, Leaflet",
    coordinates: "Spatial research / web map",
    media: ["Story map", "Geospatial data", "Webpage"],
    indexGroup: "Research",
    image: "assets/Mapbox.png",
    role: "Spatial researcher / web map author",
    audience: "Housing justice research, flood-risk communication, public web storytelling",
    source: "YilinZhengDesign Works / GSAPP Colloquium map embed",
    sourceNote: "Reference content consolidated from the original portfolio and GSAPP embedded project page.",
    evidence: [
      { type: "media", kind: "MAP", label: "Story map preview", path: "assets/Mapbox.png", caption: "Mapbox/Leaflet narrative about high-risk areas and the people who live there." },
      { type: "link", kind: "LIVE", label: "Open story map", url: "https://yilinzheng10.github.io/MAPBOX-Storytelling/", caption: "Original interactive map embedded in the GSAPP project page." }
    ],
    summary: "A spatial account of the tension between affordability, social ties, and long-term flood risk.",
    note: "The project uses web mapping to connect risk geography with the people and housing conditions represented by the data.",
    links: [["Open story map", "https://yilinzheng10.github.io/MAPBOX-Storytelling/"]]
  },
  {
    id: "extreme-weather-housing",
    title: "Explore, Explain, Propose",
    year: "2024",
    type: "Research",
    sections: ["field-notes", "emerging-systems"],
    status: "Published",
    tags: ["extreme weather", "housing justice", "visualization"],
    tools: "Grasshopper, geospatial analysis, data visualization",
    coordinates: "Columbia GSAPP / Colloquium II",
    media: ["Visualization video", "Research page", "Spatial analysis"],
    indexGroup: "Research",
    image: "assets/gh_visualization.mp4",
    role: "Design researcher / computational visualization author",
    audience: "Housing justice, climate-risk communication, real-estate decision support",
    source: "GSAPP CDP Colloquium II 2024 / Yilin Zheng project page",
    sourceNote: "Reference content consolidated from the public GSAPP project page.",
    evidence: [
      { type: "media", kind: "VIS", label: "Grasshopper visualization", path: "assets/gh_visualization.mp4", caption: "Spatial visualization from the computational methods section of the GSAPP project." },
      { type: "link", kind: "PROJECT", label: "View GSAPP project", url: "https://gsapp-cdp.github.io/colloquium-2-2024/work/yilin/", caption: "Full public documentation for the research sequence." },
      { type: "link", kind: "SOURCE", label: "Interactive map", url: "https://yilinzheng10.github.io/MAPBOX-Storytelling/", caption: "Original interactive map embedded in the GSAPP page." },
      { type: "link", kind: "PROTOTYPE", label: "Figma prototype", url: "https://www.figma.com/proto/MdrsgkpgzGYVkngkKqGa8t/FinancialModelDraft?node-id=653-105&node-type=frame&t=seEuk2McP2OwCPUb-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=653%3A105", caption: "Prototype link from the GSAPP documentation." }
    ],
    summary: "Research into the politics of extreme weather events and housing justice through spatial analysis and visualization.",
    note: "The project moves from exploration and explanation toward a design proposition.",
    links: [["View project", "https://gsapp-cdp.github.io/colloquium-2-2024/work/yilin/"]]
  },
  {
    id: "solar-sfr",
    title: "Solar-Integrated SFR Investment",
    year: "2025",
    type: "Research",
    sections: ["systems", "emerging-systems"],
    status: "Study",
    tags: ["housing", "solar", "real estate analytics"],
    tools: "Python, Excel model",
    coordinates: "Dallas-Fort Worth / SFR",
    media: ["Financial model", "Research deck", "Scenario analysis"],
    indexGroup: "Research",
    image: "assets/tool_prototype.mov",
    role: "Researcher / financial modeler",
    audience: "Housing, real-estate analytics, solar investment strategy",
    source: "YilinZhengDesign Works / Figma research deck",
    sourceNote: "Reference content consolidated from the original housing and real-estate research entry.",
    evidence: [
      { type: "media", kind: "MODEL", label: "Tool prototype", path: "assets/tool_prototype.mov", caption: "Prototype media from the project asset archive." },
      { type: "link", kind: "DECK", label: "View research deck", url: "https://embed.figma.com/slides/AvbF3A74mKKPyBgQYuUm9W/Clinic-Final-Assignment?node-id=1-1179&embed-host=share", caption: "Figma slide deck linked from the original portfolio." }
    ],
    summary: "A study asking whether solar-integrated single-family rentals can unlock returns at scale for private-equity investors in Dallas-Fort Worth, or introduce new cost barriers.",
    note: "The work connects housing and energy decisions to financial modeling and investment scenarios.",
    links: [["View research deck", "https://embed.figma.com/slides/AvbF3A74mKKPyBgQYuUm9W/Clinic-Final-Assignment?node-id=1-1179&embed-host=share"]]
  },
  {
    id: "zine-playground",
    title: "ZINE Playground",
    year: "2024",
    type: "Exploration",
    sections: ["archive", "prototypes"],
    status: "Live",
    tags: ["text-to-3D", "web experiment", "zine"],
    tools: "Web interface, text-to-3D",
    coordinates: "Browser experiment",
    media: ["Live webpage", "GIF", "Interactive study"],
    indexGroup: "Prototypes",
    image: "assets/zine.gif",
    role: "Web experiment designer",
    audience: "Computational media, small web experiments, text-to-3D studies",
    source: "YilinZhengDesign Works / ZINE playground",
    sourceNote: "Reference content consolidated from the original explorations entry.",
    evidence: [
      { type: "media", kind: "GIF", label: "ZINE playground preview", path: "assets/zine.gif", caption: "Animated preview from the original exploration entry." },
      { type: "link", kind: "LIVE", label: "Open playground", url: "https://yilinzheng10.github.io/zine/", caption: "Live experimental page linked from the source portfolio." }
    ],
    summary: "A playful browser-based zine and text-to-3D exploration.",
    note: "An experimental side project testing a looser relationship between text, web interaction, and three-dimensional media.",
    links: [["Open playground", "https://yilinzheng10.github.io/zine/"]]
  }
];

const narratives = {
  "climate-shading": {
    question: "How does the rotational axis of a responsive shading system affect shade and interior energy consumption?",
    process: "Simulation and iterative design compare shading-system rotations through Grasshopper, Rhino, ClimateStudio, and Ladybug.",
    outcome: "A documented performance comparison presented as peer-reviewed research at ACSA 113."
  },
  "scaled-model": {
    question: "How can a digital interface directly control and demonstrate a responsive physical model?",
    process: "A SwiftUI interface sends control states to an ESP32 microcontroller, which actuates the model through a servo motor.",
    outcome: "A working scaled prototype demonstrating the digital-to-physical control loop."
  },
  "architectural-studies": {
    question: "How can architectural studies show design judgment across BIM, fabrication, iteration, and sustainable design?",
    process: "Selected portfolio work is organized as a broader archive so individual studies can later be split into independent records.",
    outcome: "A portfolio-level entry that preserves the architecture background behind the systems and prototype work."
  },
  "bento": {
    question: "How can location intelligence support spatial management for the next generation of small retail stores?",
    process: "BENTO combines location data, GIS, spatial layouts, and a Rhino.Compute web interface that responds to a Grasshopper and Rhino model.",
    outcome: "A data-driven platform connecting retail decisions, interface design, and generative spatial modeling."
  },
  "terracurve": {
    question: "How can a mixed-use tower integrate program, environmental analysis, complex geometry, and BIM interoperability?",
    process: "Climate and view analysis inform massing and facade studies; Rhino.Inside translates Grasshopper geometry into a detailed Revit model with coordinated program and elevator zoning.",
    outcome: "A climate-responsive mixed-use tower developed across analytical, parametric, and BIM workflows."
  },
  "where-water-reached": {
    question: "How can flood-risk research and resources become more navigable through an accessible public tool?",
    process: "The prototype combines user-flow research, mapping, GIS, interface design, and machine-learning methods in a web-based resource.",
    outcome: "A live prototype that translates flood-risk information into a navigable public interface."
  },
  "high-risk-areas": {
    question: "How do affordability and social ties shape decisions to remain in places exposed to long-term flood risk?",
    process: "Mapbox and Leaflet organize geographic evidence into a web-based spatial narrative.",
    outcome: "A story map connecting risk data with housing conditions and lived social relationships."
  },
  "extreme-weather-housing": {
    question: "How can climate-risk information be consolidated and contextualized before buyers or investors make long-term housing decisions?",
    process: "The GSAPP project studies online real-estate information gaps, maps user-flow intervention points, cleans and clusters spatial datasets, and uses visualization/prototyping to make flood risk, cost, and value projections more legible.",
    outcome: "A research sequence that moves from extreme-weather evidence and housing justice toward a de-risk decision-making prototype."
  },
  "solar-sfr": {
    question: "Can solar-integrated single-family rentals unlock returns at scale in Dallas-Fort Worth, or do they introduce new cost barriers?",
    process: "Python and an Excel model compare housing, energy, cost, and investment scenarios.",
    outcome: "A real-estate research framework for evaluating the financial implications of solar integration."
  },
  "zine-playground": {
    question: "What can a small web zine reveal when text becomes input for three-dimensional experimentation?",
    process: "The playground combines web interaction, animated media, and text-to-3D exploration.",
    outcome: "A live, informal interface for testing playful computational media."
  }
};

const pageNames = ["cover", "index", "systems", "field-notes", "prototypes", "archive", "emerging-systems", "about"];
const pageSections = document.querySelectorAll("[data-page]");
const navLinks = document.querySelectorAll(".site-nav a");
const reader = document.getElementById("reader");
const readerPage = reader.querySelector(".reader-page");
const workBook = document.getElementById("work-book");
const readerCount = document.getElementById("reader-count");
const previousWorkButton = document.getElementById("previous-work");
const nextWorkButton = document.getElementById("next-work");
let activeWork = 0;
let touchStartX = 0;
let flipPages = [];
let flipBookReady = false;

function workButton(work, index, className, content) {
  return `<button class="${className}" type="button" data-work="${index}" aria-label="Open ${work.title}">${content}</button>`;
}

function isVideo(path) {
  return /\.(mp4|mov|m4v)$/i.test(path);
}

function renderMedia(path, alt, options = "") {
  if (isVideo(path)) {
    return `<video ${options} muted loop playsinline preload="metadata" aria-label="${alt}"><source src="${path}"></video>`;
  }
  return `<img src="${path}" alt="${alt}" loading="lazy">`;
}

function renderEvidence(work) {
  const evidence = work.evidence || [];
  const visibleEvidence = evidence.filter((item) => item.type === "link" || item.path !== work.image);
  if (visibleEvidence.length) {
    return visibleEvidence.map((item, index) => {
      if (item.type === "link") {
        const host = item.url.replace(/^https?:\/\//, "").split("/")[0];
        return `
          <a class="document-link" href="${item.url}" target="_blank" rel="noopener noreferrer">
            <span>${item.kind || `LINK ${String(index + 1).padStart(2, "0")}`}</span>
            <strong>${item.label}</strong>
            <small>${host} ↗</small>
            <em>${item.caption || ""}</em>
          </a>`;
      }
      return `
        <figure class="document-figure media-record">
          <div class="visual-frame evidence-media">${renderMedia(item.path, item.label, "controls")}</div>
          <figcaption class="documentation-caption compact"><span class="figure-number">${item.kind || `DOC. ${String(index + 1).padStart(2, "0")}`}</span><div><strong>${item.label}</strong><p>${item.caption || "Project documentation"}</p></div></figcaption>
        </figure>`;
    }).join("");
  }

  const secondary = (work.secondary || []).map((path, index) => `
    <figure class="document-figure media-record">
      <div class="visual-frame evidence-media">${renderMedia(path, `${work.title} supporting document ${index + 1}`, "controls")}</div>
      <figcaption class="documentation-caption compact"><span class="figure-number">DOC. ${String(index + 1).padStart(2, "0")}</span><div><strong>Supporting record</strong><p>${work.media[index] || "Project documentation"}</p></div></figcaption>
    </figure>
  `);
  const links = (work.links || []).map(([label, url], index) => `
    <a class="document-link" href="${url}" target="_blank" rel="noopener noreferrer">
      <span>LINK ${String(index + 1).padStart(2, "0")}</span><strong>${label}</strong><small>${url.replace(/^https?:\/\//, "").split("/")[0]} ↗</small>
    </a>
  `);
  return [...secondary, ...links].join("");
}

function renderNarrative(work, narrative) {
  const sections = [
    ["Question", narrative.question],
    ["Method", narrative.process],
    ["Outcome", narrative.outcome],
    ["Context", work.note]
  ].filter(([, value]) => value);

  return sections.map(([label, value], index) => `
    <section class="narrative-panel">
      <span>${String(index + 1).padStart(2, "0")} / ${label}</span>
      <p>${value}</p>
    </section>
  `).join("");
}

function renderIndex(filter = "all") {
  const visibleWorks = works
    .map((work, index) => ({ work, index }))
    .filter(({ work }) => filter === "all" || work.sections.includes(filter));
  const container = document.getElementById("master-index");
  const groups = ["Research", "Spatial Systems", "Prototypes"];
  container.innerHTML = visibleWorks.length ? groups.map((group) => {
    const entries = visibleWorks.filter(({ work }) => work.indexGroup === group);
    if (!entries.length) return "";
    return `<section class="index-group">
      <h2>${group}</h2>
      <p>${group === "Research" ? "Questions, evidence, and environmental inquiry." : group === "Spatial Systems" ? "Buildings, data, and operational frameworks." : "Interfaces, models, and working tests."}</p>
      <div class="index-group-list">${entries.map(({ work, index }) =>
        workButton(work, index, "index-row", `
          <span class="row-title">${work.title}</span>
          <span class="row-year">${work.year}</span>
        `)
      ).join("")}</div>
    </section>`;
  }).join("") : `<p class="empty-state">No entries in this layer yet.</p>`;

  const firstVisible = visibleWorks[0];
  if (firstVisible) updateIndexPreview(firstVisible.index);
}

function updateIndexPreview(index) {
  const work = works[index];
  const previewMedia = document.getElementById("index-preview-media");
  if (!previewMedia) return;
  previewMedia.innerHTML = renderMedia(work.image, `Preview of ${work.title}`, isVideo(work.image) ? "autoplay" : "");
  document.getElementById("index-preview-number").textContent = `${String(index + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;
  document.getElementById("index-preview-title").textContent = work.title;
  document.getElementById("index-preview-meta").textContent = `${work.type} / ${work.year} / ${work.status}`;
  applyMediaRights(previewMedia);
}

function renderCollections() {
  document.querySelectorAll("[data-collection]").forEach((container) => {
    const section = container.dataset.collection;
    const entries = works.map((work, index) => ({ work, index })).filter(({ work }) => work.sections.includes(section));

    if (section === "field-notes") {
      container.innerHTML = entries.map(({ work, index }) =>
        workButton(work, index, "note-row", `
          <time>${work.year}</time>
          <div><small>${work.status} / ${work.tags[0]}</small><h2>${work.title}</h2></div>
          <p>${work.summary}</p><span>↗</span>
        `)
      ).join("");
      return;
    }

    container.innerHTML = entries.map(({ work, index }) =>
      workButton(work, index, "work-card", `
        <div class="work-image">${renderMedia(work.image, "", "autoplay")}</div>
        <div class="work-card-text">
          <h2>${work.title}</h2>
          <div class="work-meta"><span>${work.type} / ${work.status}</span><span>${work.year}</span></div>
        </div>
      `)
    ).join("");
  });
}

function showPage() {
  const route = location.hash.replace("#", "") || "cover";
  const page = pageNames.includes(route) ? route : "cover";
  pageSections.forEach((section) => { section.hidden = section.dataset.page !== page; });
  navLinks.forEach((link) => link.classList.toggle("is-active", link.hash === `#${page}`));
  document.querySelector(".site-nav").classList.remove("is-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
}

function renderReader(index) {
  const work = works[index];
  const narrative = narratives[work.id];
  const evidenceMarkup = renderEvidence(work);
  return `
    <div class="entry-template">
      <header class="entry-intro">
        <div class="entry-title-block">
          <p class="kicker">${work.type} / ${work.status} / ${work.year}</p>
          <h1>${work.title}</h1>
          <p class="reader-summary">${narrative.question}</p>
        </div>
        <dl class="reader-meta">
          <div><dt>Role</dt><dd>${work.role || "Designer / researcher"}</dd></div>
          <div><dt>Tools</dt><dd>${work.tools}</dd></div>
          <div><dt>Tags</dt><dd>${work.tags.join(", ")}</dd></div>
          <div><dt>Location</dt><dd>${work.coordinates}</dd></div>
          <div><dt>Audience</dt><dd>${work.audience || "Design research and project review"}</dd></div>
          <div><dt>Media</dt><dd>${work.media.join(" / ")}</dd></div>
          <div><dt>Source</dt><dd>${work.source || "Portfolio archive"}</dd></div>
        </dl>
      </header>
      <div class="document-sequence">
        <div class="narrative-strip">${renderNarrative(work, narrative)}</div>

        <figure class="document-figure figure-primary">
          <div class="visual-frame">
            ${renderMedia(work.image, `Primary documentation visual for ${work.title}`, "controls autoplay")}
          </div>
          <figcaption class="documentation-caption">
            <span class="figure-number">MEDIA 01</span>
            <div><strong>Primary record</strong><p>${work.summary}</p></div>
            <div><strong>Source</strong><p>${work.sourceNote || work.source || "Portfolio archive"}</p><small class="asset-rights">© Yilin Zheng / All rights reserved unless otherwise credited</small></div>
          </figcaption>
        </figure>

        ${evidenceMarkup ? `<div class="document-grid">${evidenceMarkup}</div>` : ""}
      </div>
    </div>`;
}

function updateReaderState(index) {
  activeWork = index;
  readerCount.textContent = `Entry ${String(index + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;
  previousWorkButton.disabled = index === 0;
  nextWorkButton.disabled = index === works.length - 1;
  applyMediaRights(workBook);
}

function initializeFlipBook() {
  if (flipBookReady) return;

  flip.dragEnabled = false;
  flipPages = works.map((work, index) => {
    const page = document.createElement("div");
    page.className = "work-page";
    page.innerHTML = `<div class="work-page-scroll">${renderReader(index)}</div>`;
    return flip.page.create(page, {
      onShowComplete: (pageIndex) => {
        updateReaderState(pageIndex);
        if (flipPages[pageIndex + 1]) flip.prime(flipPages[pageIndex + 1]);
      }
    });
  });

  flip.init(workBook, flipPages[0]);
  flipBookReady = true;
}

function openReader(index) {
  initializeFlipBook();
  const targetIndex = Number(index);
  flip.jumpTo(flipPages[targetIndex], flipPages.slice(0, targetIndex), flipPages[targetIndex + 1], flipPages[0]);
  updateReaderState(targetIndex);
  reader.classList.add("is-open");
  reader.setAttribute("aria-hidden", "false");
  document.body.classList.add("reader-open");
  reader.querySelector("[data-close-reader]").focus();
}

function closeReader() {
  reader.classList.remove("is-open");
  reader.setAttribute("aria-hidden", "true");
  document.body.classList.remove("reader-open");
}

function flipWork(direction) {
  if (flip.transitioning) return;
  if (direction > 0 && activeWork < works.length - 1) {
    flip.push(flipPages[activeWork + 1]);
  } else if (direction < 0 && activeWork > 0) {
    flip.pop();
  }
}

document.addEventListener("click", (event) => {
  const work = event.target.closest("[data-work]");
  if (work) openReader(work.dataset.work);
  if (event.target.closest("[data-close-reader]")) closeReader();
});

document.addEventListener("pointerover", (event) => {
  const work = event.target.closest(".index-row[data-work]");
  if (work) updateIndexPreview(Number(work.dataset.work));
});

document.addEventListener("focusin", (event) => {
  const work = event.target.closest(".index-row[data-work]");
  if (work) updateIndexPreview(Number(work.dataset.work));
});

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const nav = document.querySelector(".site-nav");
  const open = nav.classList.toggle("is-open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

previousWorkButton.addEventListener("click", () => flipWork(-1));
nextWorkButton.addEventListener("click", () => flipWork(1));
window.addEventListener("hashchange", showPage);
window.addEventListener("keydown", (event) => {
  if (!reader.classList.contains("is-open")) return;
  if (event.key === "Escape") closeReader();
  if (event.key === "ArrowLeft") flipWork(-1);
  if (event.key === "ArrowRight") flipWork(1);
});
readerPage.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].screenX; }, { passive: true });
readerPage.addEventListener("touchend", (event) => {
  const distance = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(distance) > 60) flipWork(distance < 0 ? 1 : -1);
}, { passive: true });

function applyMediaRights(root = document) {
  const mediaItems = root.matches?.("img, video") ? [root] : root.querySelectorAll("img, video");
  mediaItems.forEach((media) => {
    media.draggable = false;
    media.setAttribute("data-rights", "© Yilin Zheng. All rights reserved unless otherwise credited.");
  });
}

const mediaRightsObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) applyMediaRights(node);
    });
  });
});

renderIndex();
renderCollections();
showPage();
applyMediaRights();
mediaRightsObserver.observe(document.body, { childList: true, subtree: true });
