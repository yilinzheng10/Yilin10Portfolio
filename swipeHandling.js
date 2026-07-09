const works = [
  {
    id: "climate-shading",
    title: "Climate-Responsive Shading Simulation",
    year: "2025",
    type: "Research",
    sections: ["systems"],
    status: "Published",
    tags: ["shading", "energy", "simulation"],
    tools: "Grasshopper, Rhino, ClimateStudio, Ladybug",
    coordinates: "ACSA 113 / REPAIR",
    media: ["Results diagram", "Peer-reviewed paper", "Simulation"],
    indexGroup: "Spatial Systems & Research",
    image: "assets/ACSA Results Diagram.1.jpg",
    role: "Researcher / computational design author",
    audience: "Building-envelope research, climate-responsive design, conference review",
    source: "YilinZhengDesign Works / ACSA 113 abstract book",
    sourceNote: "Reference content consolidated from the prior portfolio entry and ACSA publication links.",
    embedFrames: [
      { kind: "PAPER", label: "View paper", path: "https://drive.google.com/file/d/1uW5BejPOhL1PCofYlklacAtd8AUmlY5u/preview" },
      { kind: "BOOK", label: "ACSA 113 Abstract Book", path: "https://www.acsa-arch.org/wp-content/uploads/2025/02/ACSA113-Abstract-Book-11Feb2025-WebVersion.pdf" }
    ],
    evidence: [
      { type: "link", kind: "PAPER", label: "View paper", url: "https://drive.google.com/file/d/1uW5BejPOhL1PCofYlklacAtd8AUmlY5u/view?usp=sharing", caption: "Full research paper linked from the original portfolio." },
      { type: "link", kind: "BOOK", label: "ACSA 113 Abstract Book", url: "https://www.acsa-arch.org/wp-content/uploads/2025/02/ACSA113-Abstract-Book-11Feb2025-WebVersion.pdf", caption: "Conference context for ACSA 113th Annual Meeting: REPAIR." }
    ],
    summary: "A peer-reviewed study of how rotational axes in climate-responsive shading systems affect shade and interior energy consumption.",
    description: [
      "This research examines how climate-responsive shading geometry can mediate solar exposure, interior shade, and building energy demand under extreme heat conditions. Uses environmental simulation as a design method for testing how small changes in facade movement can produce measurable changes in performance.",
      "Simulation and iterative design compare shading-system rotations, sizes, offsets, through Grasshopper, Rhino, ClimateStudio, and Ladybug."
    ],
    note: "Presented through the Association of Collegiate Schools of Architecture 113th Annual Meeting: REPAIR, National Conference on Undergraduate Research (NCUR), Stanford Research Conference, and LSU Discover Day.",
    links: [
      ["View paper", "https://drive.google.com/file/d/1uW5BejPOhL1PCofYlklacAtd8AUmlY5u/view?usp=sharing"],
      ["Abstract book", "https://www.acsa-arch.org/wp-content/uploads/2025/02/ACSA113-Abstract-Book-11Feb2025-WebVersion.pdf"]
    ]
  },
  {
    id: "solara",
    title: "SOLARA",
    year: "2026",
    type: "Design & Engineering",
    sections: ["prototypes"],
    status: "Live",
    tags: ["solar facade", "kinetic envelope", "software", "hardware"],
    tools: "XCode, SwiftUI, Arduino IDE, Git, Grasshopper, Rhino, Fusion 360",
    coordinates: "Building envelope / solar tracking",
    media: ["Facade render", "Precursor prototype video", "Uploaded assets"],
    indexGroup: "Prototypes",
    image: "assets/project/reference/solara-option1.png",
    secondary: [
      { path: "assets/project/reference/solara-panel-rotation.png", mirror: true },
      "assets/project/reference/solara-physical-model.jpg",
      "assets/project/reference/solara-render.png",
      "assets/0318.mov",
      "assets/project/reference/solara-uploaded-logo.png"
    ],
    role: "System designer / product narrative",
    audience: "Climate technology, building-envelope systems, facade strategy",
    source: "SOLARA live website",
    sourceNote: "Reference material from the public SOLARA website and the earlier climate-system scaled prototype.",
    organizations: [
      ["SOLARA", "https://websitesolara.vercel.app/"]
    ],
    evidence: [
      { type: "media", kind: "RENDER", label: "SOLARA facade render", path: "assets/project/reference/solara-render.png", caption: "Facade render from the SOLARA public website." },
      { type: "media", kind: "MODEL", label: "Precursor scaled model", path: "assets/0318.mov", caption: "" },
      { type: "link", kind: "LIVE", label: "Open SOLARA website", url: "https://websitesolara.vercel.app/", caption: "Live project website for systematic solar facade solutions." }
    ],
    summary: "SOLARA explores kinetic solar facades as an active building-envelope system for energy generation, shading, and thermal comfort.",
    description: [
      "SOLARA is a self-sufficient energy-generating dynamic facade system. It is a software-controlled motorized machine system developed with Johny and Victoria Lopez.",
      "The scaled climate-system model is a precursor prototype: a small digital-to-physical test for translating interface states into servo-driven motion and developing the facade idea into a larger building system."
    ],
    note: "The project treats the facade as an interface between climate data, building performance, and mechanical movement.",
    links: [["Open website", "https://websitesolara.vercel.app/"]]
  },
  {
    id: "standard-bots-ros2",
    title: "Standard Bots RO1 Workflow",
    year: "2026",
    type: "Prototype",
    sections: ["prototypes", "systems"],
    status: "Repository",
    tags: ["robotics", "ROS2", "computational fabrication"],
    tools: "Rhino, Grasshopper, Python, ROS2, StandardOS REST API",
    coordinates: "HKS MADE / robotic workflow",
    media: ["Repository", "System architecture", "Control interfaces"],
    indexGroup: "Prototypes",
    image: "assets/project/reference/standard-bots-robot-joint-movement.gif",
    landscapeFrames: true,
    role: "Computational workflow researcher",
    audience: "Robotic fabrication, computational design, design-engineering workflows",
    source: "GitHub repository: yilinzheng10/HKS_MADE_StandardBotsRO1",
    sourceNote: "Repository README describes a computational and robotic workflow for controlling a Standard Bots RO1 arm.",
    organizations: [
      ["HKS", "https://www.hksinc.com/"],
      ["Standard Bots", "https://standardbots.com/"]
    ],
    evidence: [
      { type: "media", kind: "ROBOT", label: "Standard Bots joint movement", path: "assets/project/reference/standard-bots-robot-joint-movement.gif", caption: "" },
      { type: "link", kind: "CODE", label: "Open GitHub repository", url: "https://github.com/yilinzheng10/HKS_MADE_StandardBotsRO1", caption: "ROS2 realtime API and Standard Bots RO1 documentation repository." }
    ],
    summary: "A computational-to-robotic workflow connecting design geometry, inverse kinematics, ROS2, and Standard Bots control interfaces.",
    description: [
      "The <a href=\"https://github.com/yilinzheng10/HKS_MADE_StandardBotsRO1\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub repository</a> connects Rhino and Grasshopper geometry with Python, ROS2, StandardOS, and REST API control for the Standard Bots RO1 arm."
    ],
    note: "The work treats robotic control as an interoperable design system: geometry, code, and hardware have to remain legible to each other.",
    links: [["Open repository", "https://github.com/yilinzheng10/HKS_MADE_StandardBotsRO1"]]
  },
  {
    id: "dtbr-headquarters",
    title: "Office Building Design at DTBR",
    year: "2024",
    type: "Architecture",
    sections: ["architecture"],
    status: "Studio",
    sortPriority: 12,
    tags: ["headquarters", "urban site", "Baton Rouge"],
    tools: "Rhinoceros, Grasshopper, CoveTool, Google Earth Pro, Adobe Suite, Procreate",
    coordinates: "Downtown Baton Rouge, LA / Mississippi River",
    media: ["PDF section", "Site analysis", "Vicinity diagrams", "Access studies"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/architecture/pages/dtbr-4.png",
    uniformFrames: true,
    uniformFit: "contain",
    role: "Architectural designer",
    audience: "Architecture portfolio review, urban and environmental design systems",
    source: "260704_ARCH_DTBR.pdf",
    sourceNote: "Section prepared from the attached DTBR architecture PDF.",
    organizations: [
      ["LSU School of Architecture", "https://design.lsu.edu/architecture/"]
    ],
    pageFrames: [
      { path: "assets/project/architecture/pages/dtbr-1.png", label: "Office Building Design at DTBR page 1" },
      { path: "assets/project/architecture/pages/dtbr-2.png", label: "Office Building Design at DTBR page 2" },
      { path: "assets/project/architecture/pages/dtbr-3.png", label: "Office Building Design at DTBR page 3" },
      { path: "assets/project/architecture/pages/dtbr-4.png", label: "Office Building Design at DTBR page 4" }
    ],
    evidence: [
      { type: "media", kind: "PDF", label: "DTBR preview", path: "assets/project/architecture/pages/dtbr-1.png", caption: "" }
    ],
    summary: "An architectural design study for a headquarters in Downtown Baton Rouge, organized around site conditions, access, vicinity, and the river-edge urban context.",
    description: [
      "Office Building Design at DTBR studies an urban office building in Downtown Baton Rouge through site access, river-edge adjacency, massing, and contextual organization."
    ],
    note: "Downtown Baton Rouge becomes a framework for testing how building organization responds to circulation, site edges, and civic scale."
  },
  {
    id: "harborfront-park",
    title: "Harborfront Park",
    year: "2023",
    type: "Architecture",
    sections: ["architecture"],
    status: "Studio",
    sortPriority: 13,
    tags: ["coastal site", "marine ecology", "Miami"],
    tools: "Rhinoceros, ClimateStudio, ArcGIS, Lumion, Google Earth Pro, Adobe Suite",
    coordinates: "Miami, FL / coastal harborfront",
    media: ["PDF section", "Coastal analysis", "Climate risk", "Public realm"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/architecture/stadium-collage.png",
    uniformFrames: true,
    uniformFit: "contain",
    role: "Architectural designer",
    audience: "Architecture portfolio review, coastal systems, public-space design",
    source: "260704_ARCH_MIAMI.pdf",
    sourceNote: "Section prepared from the attached Miami Harborfront Park PDF.",
    organizations: [
      ["LSU School of Architecture", "https://design.lsu.edu/architecture/"]
    ],
    pageFrames: [
      { path: "assets/project/architecture/pages/harborfront-1.png", label: "Harborfront Park page 1", caption: "Opening board from the Harborfront Park PDF." },
      { path: "assets/project/architecture/pages/harborfront-2.png", label: "Harborfront Park page 2", caption: "Second board from the Harborfront Park PDF." },
      { path: "assets/project/architecture/pages/harborfront-3.png", label: "Harborfront Park page 3", caption: "Third board from the Harborfront Park PDF." }
    ],
    evidence: [
      { type: "media", kind: "PDF", label: "Harborfront preview", path: "assets/project/architecture/pages/harborfront-1.png", caption: "" }
    ],
    summary: "A Miami coastal-site design study positioned around harborfront public space, marine life, seafood systems, climate change, storms, and hurricane exposure.",
    description: [
      "Harborfront Park frames a Miami coastal site as a public realm system shaped by marine ecology, seafood culture, storm exposure, and climate risk."
    ],
    note: "The project uses coastal context as a design driver for public space, environmental adaptation, and civic program."
  },
  {
    id: "green-wall-systems",
    title: "Green Wall Systems & Fabrication",
    year: "2023",
    type: "Architecture",
    sections: ["architecture"],
    status: "Built research",
    sortPriority: 11,
    tags: ["green wall", "fabrication", "environmental systems"],
    tools: "Rhino, Grasshopper, CNC routing, Clayton, 3D Potter, Climate Consultant, Adobe Suite",
    coordinates: "LSU Hill Farm / Baton Rouge, LA",
    media: ["PDF section", "Fabrication process", "Wall-system research"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/architecture/green-wall-preview.png",
    uniformFrames: true,
    uniformFit: "contain",
    role: "Research, design, coordination, and fabrication",
    audience: "Fabrication research, environmental systems, architecture portfolio review",
    source: "260704_ARCH_GREENWALL.pdf",
    sourceNote: "Section prepared from the attached Green Wall Systems & Fabrication PDF.",
    organizations: [
      ["LSU Hilltop Arboretum", "https://www.lsu.edu/hilltop/index.php"],
      ["Louisiana State University", "https://www.lsu.edu/"]
    ],
    pageFrames: [
      { path: "assets/project/architecture/pages/green-wall-1.png", label: "Green Wall page 1", caption: "Opening page from the Green Wall Systems & Fabrication PDF." },
      { path: "assets/project/architecture/pages/green-wall-2.png", label: "Green Wall page 2", caption: "Second page from the Green Wall Systems & Fabrication PDF." }
    ],
    evidence: [
      { type: "media", kind: "PDF", label: "Green wall preview", path: "assets/project/architecture/pages/green-wall-1.png", caption: "" }
    ],
    summary: "A group research and fabrication project for LSU Hill Farm, connecting green wall systems, environmental testing, CNC/ceramic workflows, and built prototype coordination.",
    description: [
      "Green Wall Systems & Fabrication connects environmental systems research with material prototyping, fabrication coordination, and full-scale testing for LSU Hill Farm."
    ],
    note: "The work uses fabrication as a way to test environmental performance and system assembly."
  },
  {
    id: "continual-delay",
    title: "Continual Delay",
    year: "2022",
    type: "Architecture",
    sections: ["architecture"],
    status: "Studio",
    sortPriority: 14,
    tags: ["spatial exploration"],
    tools: "Architectural drawing, model documentation",
    coordinates: "Architecture studio / sequence study",
    media: ["PDF section", "Line drawings", "Spatial sequence"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/architecture/pages/continual-selected-3.png",
    uniformFrames: true,
    uniformFit: "contain",
    role: "Architectural designer",
    audience: "Architecture portfolio review, spatial sequence, conceptual design systems",
    source: "260704_ARCH1_ Continual Delay -Yilin Zheng.pdf",
    sourceNote: "Section prepared from the attached Continual Delay PDF.",
    pageFrames: [
      { path: "assets/project/architecture/pages/continual-selected-3.png", label: "Continual Delay page 3" },
      { path: "assets/project/architecture/pages/continual-selected-4.png", label: "Continual Delay page 4" },
      { path: "assets/project/architecture/pages/continual-selected-5.png", label: "Continual Delay page 5" },
      { path: "assets/project/architecture/pages/continual-selected-7.png", label: "Continual Delay page 7" }
    ],
    evidence: [
      { type: "media", kind: "PDF", label: "Continual Delay preview", path: "assets/project/architecture/pages/continual-selected-3.png", caption: "" }
    ],
    summary: "A studio project framed around spatial sequence, drawing systems, and the idea of delay as an architectural ordering device.",
    description: [
      "Continual Delay explores spatial sequence, pause, and perception through architectural drawing and model-based documentation."
    ],
    note: "Delay becomes a spatial condition: movement is staged through thresholds, intervals, and changing visual access."
  },
  {
    id: "form-exploration-2020",
    title: "Form Exploration",
    year: "2020",
    type: "Architecture",
    sections: ["architecture"],
    status: "Study",
    sortPriority: 15,
    tags: ["form study", "spatial exploration", "model"],
    tools: "Physical model, spatial composition",
    coordinates: "Early form study / cubic space model",
    media: ["Model image", "Form study"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/architecture/form-exploration-2020.png",
    uniformFrames: true,
    uniformFit: "contain",
    role: "Designer",
    audience: "Early architectural form studies, spatial composition, model-based exploration",
    source: "cubic space model.png",
    sourceNote: "User-provided image from the architecture portfolio archive.",
    evidence: [
      { type: "media", kind: "MODEL", label: "Cubic space model", path: "assets/project/architecture/form-exploration-2020.png", caption: "" }
    ],
    summary: "An early spatial composition study using cubic massing, shadow, and interior voids to test form and perception.",
    description: [
      "Form Exploration is an early architecture study from 2020 using cubic space, shadow, and layered openings to test how mass and void can shape perception.",
      "Form explores layers and intersections of cubic spaces nested in a whole."
    ]
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
    indexGroup: "Prototypes",
    image: "assets/Bento_Rhino.Compute.gif",
    landscapeFrames: true,
    secondary: ["assets/bento_layout.gif", "assets/Beno_Rhino.Compute.mp4"],
    role: "Computational designer / web interface developer",
    audience: "Retail spatial management, computational design, tool prototyping",
    source: "YilinZhengDesign Works / Medium article / web-gh repository",
    sourceNote: "Reference content consolidated from the original BENTO portfolio entries.",
    organizations: [
      ["Columbia GSAPP", "https://www.arch.columbia.edu/"]
    ],
    evidence: [
      { type: "media", kind: "LAYOUT", label: "BENTO layout study", path: "assets/bento_layout.gif", caption: "Animated spatial layout study for small retail store planning." },
      { type: "media", kind: "COMPUTE", label: "Rhino.Compute UI demo", path: "assets/Bento_Rhino.Compute.gif", caption: "Web interface responding to Grasshopper and Rhino model updates." },
      { type: "link", kind: "ARTICLE", label: "Project article", url: "https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83", caption: "Original article linked from the source portfolio." },
      { type: "link", kind: "CODE", label: "Web UI repository", url: "https://github.com/yilinzheng10/web-gh", caption: "Repository for the Rhino.Compute web interface." }
    ],
    summary: "A platform using data-driven location insights for spatial and SKU management in small retail stores.",
    description: [
      "BENTO is a platform using data-driven location insights for spatial and SKU management in small retail stores. The <a href=\"https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83\" target=\"_blank\" rel=\"noopener noreferrer\">project article</a> frames it as an application for next-generation retail operations.",
      "The prototype connects store layout, customer movement, and operational decisions through a web interface linked to a parametric spatial model."
    ],
    note: "Prototyped through Figma, the web interface responds simultaneously to a Grasshopper and Rhino model through Rhino.Compute.",
    links: [
      ["Project article", "https://medium.com/design-intelligence-course/bento-an-application-for-the-retail-store-of-the-next-generation-2d2251144d83"],
      ["Web UI repository", "https://github.com/yilinzheng10/web-gh"]
    ]
  },
  {
    id: "emotisync-2026",
    title: "EmotiSync",
    year: "2026",
    type: "Archive",
    sections: ["prototypes"],
    status: "Archived",
    tags: ["interface", "TypeScript", "web prototype"],
    tools: "TypeScript, Vercel, web interface",
    coordinates: "Prototype archive / 2026",
    media: ["Repository", "Live archive link", "Interface placeholder"],
    indexGroup: "Prototypes",
    image: "assets/project/reference/gray-placeholder.svg",
    coverImage: "assets/project/reference/blank-cover.svg",
    landscapeFrames: true,
    role: "Prototype archive maintainer",
    audience: "Interface experiments, archived web prototypes, process documentation",
    source: "GitHub repository: yilinzheng10/emotisync2026",
    sourceNote: "User requested this repository be added as archive.",
    evidence: [
      { type: "media", kind: "NEEDED", label: "EmotiSync image needed", path: "assets/project/reference/gray-placeholder.svg", caption: "Add one interface screenshot, interaction frame, or deployment still." },
      { type: "link", kind: "CODE", label: "Open GitHub repository", url: "https://github.com/yilinzheng10/emotisync2026", caption: "Archived TypeScript repository." },
      { type: "link", kind: "LIVE", label: "Open live archive", url: "https://emotisync2026.vercel.app", caption: "Live Vercel deployment linked from the repository metadata." }
    ],
    summary: "EmotiSync is an archived TypeScript web prototype exploring interface behavior and affective synchronization.",
    description: [
      "EmotiSync is a web-based interface for emotional and wellness valuation, using a personal calendar and user feedback loop to help people navigate demanding and stressful work days. Developed with Catherine Ye and Yuxi Dai."
    ],
    links: [
      ["Open repository", "https://github.com/yilinzheng10/emotisync2026"],
      ["Open live archive", "https://emotisync2026.vercel.app"]
    ]
  },
  {
    id: "terracurve",
    title: "Terracurve Tower",
    year: "2024",
    type: "System",
    sections: ["architecture"],
    status: "Designed",
    sortPriority: 10,
    tags: ["BIM", "mixed-use", "climate-responsive envelope"],
    tools: "Rhino, Grasshopper, Revit, ClimateStudio, Lumion, Adobe Suite",
    coordinates: "New York, NY / NOMAD",
    media: ["BIM model", "Climate analysis", "Drawings", "Renderings"],
    indexGroup: "Architectural Design and System",
    image: "assets/project/BIM/overview1.png",
    uniformFrames: true,
    uniformFit: "contain",
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
    organizations: [
      ["Columbia GSAPP", "https://www.arch.columbia.edu/"]
    ],
    evidence: [
      { type: "media", kind: "CLIMATE", label: "Site and climate analysis", path: "assets/project/BIM/BIM-climateanalysis.jpg", caption: "Sun exposure and wind analysis guided orientation and facade articulation." },
      { type: "media", kind: "FACADE", label: "Grasshopper facade workflow", path: "assets/project/BIM/facade_gh.png", caption: "Parametric facade/form-finding translated into BIM documentation." },
      { type: "media", kind: "STACK", label: "Program stacking", path: "assets/project/BIM/stacking.png", caption: "Vertical organization of retail, garden, office, hotel, residential, and MEP zones." },
      { type: "media", kind: "AXON", label: "Revit axonometric", path: "assets/project/BIM/revit_axon1.png", caption: "Coordinated model view from the BIM workflow." }
    ],
    summary: "A mixed-use high-rise integrating flexible offices, retail, and a boutique hotel within a climate-responsive envelope.",
    description: [
      "Terracurve Tower is a mixed-use high-rise that reimagines urban living and working in Manhattan's NOMAD district. The design responds to post-pandemic needs by integrating flexible office spaces, active retail, and a boutique hotel within a climate-responsive envelope.",
      "The tower draws from New York's skyline and organic formal systems to shape a facade that maximizes daylight, expands views, and gives the building a distinct urban identity. Program stacking organizes retail, garden, office, hotel, residential, and MEP zones vertically so building systems, user experience, and circulation remain coordinated."
    ],
    note: "Role: Designer and BIM Specialist. Team: Yilin Zheng, Manas Bhatia, Yuxi Dai."
  },
  {
    id: "where-water-reached",
    title: "Where the Water Reached",
    year: "2025",
    type: "Prototype",
    sections: ["prototypes", "systems"],
    status: "Live",
    sortPriority: -1,
    tags: ["flood risk", "policies", "spatial analysis", "real estates"],
    tools: "Grasshopper, Mapbox, GIS, Rhino, Figma, Python, Web UI, Machine Learning",
    coordinates: "Flood risk / public resources",
    media: ["Live tool", "Demo video", "User journey", "Interface"],
    indexGroup: "Spatial Systems & Research",
    image: "assets/0402.mp4",
    uniformFrames: true,
    landscapeFrames: true,
    secondary: ["assets/gh_visualization.mp4"],
    embedFrames: [
      { kind: "WEB", label: "Environmental risk story map", path: "https://yilinzheng10.github.io/MAPBOX-Storytelling/" }
    ],
    role: "Tool designer / researcher",
    audience: "Home buyers, flood-risk resource navigation, public-facing climate tools",
    source: "YilinZhengDesign Works / FloodRisk prototype",
    sourceNote: "Reference content consolidated from the original flood-risk prototype and user-flow entries.",
    organizations: [],
    evidence: [
      { type: "media", kind: "DEMO", label: "Prototype demo", path: "assets/0402.mp4", caption: "Video capture of the flood-risk resource tool." },
      { type: "link", kind: "LIVE", label: "Open prototype", url: "https://yilinzheng10.github.io/FloodRisk/", caption: "Live prototype linked from the original portfolio." },
      { type: "link", kind: "FLOW", label: "User mapping", url: "https://embed.figma.com/board/GQ3y8G3sUmI5mdqXefN0AB/User-Mapping?node-id=0-1&embed-host=share", caption: "User journey and user-flow research for tool design." },
      { type: "link", kind: "MAP", label: "Environmental risk story map", url: "https://yilinzheng10.github.io/MAPBOX-Storytelling/", caption: "Earlier spatial narrative integrated into the thesis research." }
    ],
    summary: "A prototype tool for navigating flood-risk resources and translating research into an accessible public-facing interface.",
    description: [
      "Where the Water Reached brings together population distribution, housing gentrification, home pricing, and flood-risk research and turns geographic evidence into a public-facing decision support prototype.",
      "The project studies information gaps in housing and climate-risk communication, then tests how mapping, user-flow research, and interactive resources can make long-term risk easier to understand, and understanding what nudges the long-term financial decision making for individual investment such as housing."
    ],
    note: "This is a master's thesis at <a href=\"https://www.arch.columbia.edu/\" target=\"_blank\" rel=\"noopener noreferrer\">Columbia GSAPP</a>.",
    links: [
      ["Open prototype", "https://yilinzheng10.github.io/FloodRisk/"],
      ["User mapping", "https://embed.figma.com/board/GQ3y8G3sUmI5mdqXefN0AB/User-Mapping?node-id=0-1&embed-host=share"],
      ["Environmental risk story map", "https://yilinzheng10.github.io/MAPBOX-Storytelling/"]
    ]
  },
  {
    id: "googlemaps-review-scraper",
    title: "Public-Space Review Scraper",
    year: "2025",
    type: "Data Tool",
    sections: ["prototypes", "field-notes"],
    status: "Repository",
    tags: ["public space", "sentiment segmentation", "Google Maps reviews"],
    tools: "Mapbox, JavaScript, web development, Python, sentiment segmentation",
    coordinates: "Dallas Downtown Masterplan / public-space reviews",
    media: ["Repository", "README", "Data-method placeholder"],
    indexGroup: "Prototypes",
    image: "assets/project/reference/review-scraper-hero.png",
    landscapeFrames: true,
    role: "Data-method researcher",
    audience: "Urban research, public-space analysis, data collection methods",
    source: "GitHub repository: yilinzheng10/scraping-reviews-from-googlemaps",
    sourceNote: "Repository README describes user sentiment analysis of public spaces based on Google Maps reviews for a Dallas Downtown Masterplan design proposal.",
    evidence: [
      { type: "media", kind: "WEB", label: "Review scraper page screenshot", path: "assets/project/reference/review-scraper-hero.png", caption: "" },
      { type: "link", kind: "CODE", label: "Open GitHub repository", url: "https://github.com/yilinzheng10/scraping-reviews-from-googlemaps", caption: "Repository for scraping Google Maps reviews and ratings." },
      { type: "link", kind: "README", label: "README editing page", url: "https://github.com/yilinzheng10/scraping-reviews-from-googlemaps/new/main?filename=README.md", caption: "User-provided README page reference for this repository." }
    ],
    summary: "A data-collection method for reading public-space experience through Google Maps reviews, ratings, and sentiment signals.",
    description: [
      "This repository supports a Dallas Downtown Masterplan design proposal by treating online reviews as a source of public-space evidence.",
      "The <a href=\"https://github.com/yilinzheng10/scraping-reviews-from-googlemaps\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub repository</a> and <a href=\"https://github.com/yilinzheng10/scraping-reviews-from-googlemaps/new/main?filename=README.md\" target=\"_blank\" rel=\"noopener noreferrer\">README page</a> document how the scraper collects review and rating data so qualitative urban experience can be compared with spatial decisions, site priorities, and public perception."
    ],
    links: [
      ["Open repository", "https://github.com/yilinzheng10/scraping-reviews-from-googlemaps"],
      ["README page", "https://github.com/yilinzheng10/scraping-reviews-from-googlemaps/new/main?filename=README.md"]
    ]
  },
  {
    id: "spatial-data-python",
    title: "Working with Spatial Data in Python",
    year: "2024",
    type: "Research Code",
    sections: ["systems", "field-notes", "prototypes"],
    status: "Repository",
    tags: ["spatial analytics", "urban analytics", "Python"],
    tools: "Python, geospatial analysis, public spatial data",
    coordinates: "NYC / public spatial research",
    media: ["Repository", "Spatial analysis notes", "Method placeholder"],
    indexGroup: "Spatial Systems & Research",
    image: "assets/project/reference/spatial-data-python-code.png",
    coverImage: "assets/project/reference/blank-cover.svg",
    landscapeFrames: true,
    role: "Spatial-data researcher",
    audience: "Geospatial research, design computation, public-data workflows",
    source: "GitHub repository: yilinzheng10/Working-with-Spatial-Data-in-Python",
    sourceNote: "Repository README describes NYC public spatial research and analysis exploration.",
    evidence: [
      { type: "media", kind: "CODE", label: "Spatial data Python code screenshot", path: "assets/project/reference/spatial-data-python-code.png", caption: "" },
      { type: "link", kind: "CODE", label: "Open GitHub repository", url: "https://github.com/yilinzheng10/Working-with-Spatial-Data-in-Python", caption: "Python repository for working with public spatial data." }
    ],
    summary: "A Python-based spatial-data research repository for exploring New York City public spatial datasets as design material.",
    description: [
      "Working with Spatial Data in Python is a methods archive for learning how public datasets can be cleaned, joined, mapped, and interpreted.",
      "The <a href=\"https://github.com/yilinzheng10/Working-with-Spatial-Data-in-Python\" target=\"_blank\" rel=\"noopener noreferrer\">GitHub repository</a> documents Python workflows for cleaning, joining, mapping, and interpreting urban datasets."
    ],
    links: [["Open repository", "https://github.com/yilinzheng10/Working-with-Spatial-Data-in-Python"]]
  },
  {
    id: "solar-sfr",
    title: "Energy-Integrated Housing Systems",
    year: "2025",
    type: "Research",
    sections: ["systems"],
    status: "Study",
    tags: ["housing", "solar", "real estate analytics"],
    tools: "Python, Excel model",
    coordinates: "Dallas-Fort Worth / SFR",
    media: ["Financial model", "Research deck", "Scenario analysis"],
    indexGroup: "Spatial Systems & Research",
    image: "assets/project/reference/gray-placeholder.svg",
    role: "Researcher / financial modeler",
    audience: "Housing, real-estate analytics, solar investment strategy",
    source: "YilinZhengDesign Works / Figma research deck",
    sourceNote: "Reference content consolidated from the original housing and real-estate research entry.",
    evidence: [
      { type: "media", kind: "NEEDED", label: "Energy systems image needed", path: "assets/project/reference/gray-placeholder.svg", caption: "" },
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
    sections: ["prototypes"],
    status: "Live",
    tags: ["text-to-3D", "web experiment", "zine"],
    tools: "Web interface, text-to-3D",
    coordinates: "Browser experiment",
    media: ["Live webpage", "GIF", "Interactive study"],
    indexGroup: "Prototypes",
    image: "assets/zine.gif",
    landscapeFrames: true,
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

works.forEach((work, index) => {
  work.originalOrder = index;
});
works.sort((a, b) => {
  const yearA = parseInt(a.year, 10) || 0;
  const yearB = parseInt(b.year, 10) || 0;
  if (yearA !== yearB) return yearB - yearA;
  return a.originalOrder - b.originalOrder;
});

const pageNames = ["cover", "index", "systems", "field-notes", "prototypes", "architecture", "about"];
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

function getSourceLinks(work) {
  const links = [];
  const seen = new Set();
  (work.evidence || []).forEach((item) => {
    if (item.type !== "link" || seen.has(item.url)) return;
    seen.add(item.url);
    links.push({ label: item.label, url: item.url });
  });
  (work.links || []).forEach(([label, url]) => {
    if (seen.has(url)) return;
    seen.add(url);
    links.push({ label, url });
  });
  return links;
}

function renderInlineLinks(links) {
  if (!links.length) return "";
  return links.map((link) => `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}</a>`).join(", ");
}

function getCoverImage(work) {
  return work.coverImage || work.image;
}

function getShortSentence(text) {
  const cleanText = (text || "").replace(/<[^>]*>/g, "").trim();
  const match = cleanText.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : cleanText;
}

function getProjectSubtitle(work) {
  const tools = work.tools ? `Tools: ${work.tools}.` : "";
  const summary = getShortSentence(work.summary);
  return [tools, summary].filter(Boolean).join(" ");
}

function renderTagChips(tags) {
  return `<div class="tag-chip-list">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function renderOrganizationLinks(work) {
  const organizations = work.organizations || [];
  if (!organizations.length) return "";
  return `<span class="context-links">${organizations.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join(" / ")}</span>`;
}

function renderProjectDescription(work) {
  const description = [...(work.description || [work.summary])];
  const context = renderOrganizationLinks(work);
  if (context || work.note) description.push(`${context}${context && work.note ? " " : ""}${work.note || ""}`);
  return `
    <div class="project-description">
      ${description.filter(Boolean).map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  `;
}

function renderKeyFrames(work) {
  const placeholderPath = "assets/project/reference/gray-placeholder.svg";
  const frames = work.pageFrames
    ? work.pageFrames.map((frame, index) => ({ ...frame, kind: `PAGE ${String(index + 1).padStart(2, "0")}` }))
    : [
      ...(work.hidePrimaryImage ? [] : [{ path: work.image, label: work.title, caption: work.summary }]),
      ...(work.evidence || [])
        .filter((item) => item.type === "media" && item.path !== work.image)
        .map((item) => ({ path: item.path, label: item.label, caption: item.caption })),
      ...(work.secondary || [])
        .slice(0, 3)
        .map((item, index) => {
          const frame = typeof item === "string" ? { path: item } : item;
          return { ...frame, label: frame.label || `${work.title} supporting visual ${index + 1}`, caption: frame.caption || work.media[index + 1] || "Supporting project visual." };
        })
    ];

  if (work.embedFrame) frames.push({ ...work.embedFrame, type: "embed", kind: "PDF" });
  (work.embedFrames || []).forEach((frame) => frames.push({ ...frame, type: "embed", kind: frame.kind || "FRAME" }));
  const uniqueFrames = frames.filter((frame, index, list) =>
    index === list.findIndex((candidate) => candidate.path === frame.path && candidate.type === frame.type)
  );
  const hasRealMedia = uniqueFrames.some((frame) => frame.path !== placeholderPath && frame.type !== "embed");
  const displayFrames = hasRealMedia
    ? uniqueFrames.filter((frame) => frame.path !== placeholderPath)
    : uniqueFrames;

  return displayFrames.map((frame, index) => `
    <figure class="key-frame ${index === 0 ? "key-frame-primary" : ""} ${frame.mirror ? "is-mirrored" : ""} ${work.uniformFrames ? "is-uniform" : ""} ${work.landscapeFrames ? "is-landscape" : ""} ${work.uniformFit === "contain" ? "is-contain" : ""}">
      <div class="visual-frame">
        ${frame.type === "embed" ? `<iframe src="${frame.path}" title="${frame.label}" loading="lazy"></iframe>` : renderMedia(frame.path, frame.label, "controls autoplay")}
      </div>
    </figure>
  `).join("");
}

function sortWorksByYear(entries) {
  return [...entries].sort((a, b) => {
    const priorityA = a.work.sortPriority || 0;
    const priorityB = b.work.sortPriority || 0;
    if (priorityA !== priorityB) return priorityA - priorityB;
    const yearA = parseInt(a.work.year, 10) || 0;
    const yearB = parseInt(b.work.year, 10) || 0;
    if (yearA !== yearB) return yearB - yearA;
    return a.index - b.index;
  });
}

function renderIndex(filter = "all") {
  const visibleWorks = sortWorksByYear(works
    .map((work, index) => ({ work, index }))
    .filter(({ work }) => filter === "all" || work.sections.includes(filter)));
  const container = document.getElementById("master-index");
  const groups = [
    ["Spatial Systems & Research", "Questions and evidence."],
    ["Prototypes", "Interfaces, models, and working tests."],
    ["Architectural Design and System", "Design, data, parameter."]
  ];
  container.innerHTML = visibleWorks.length ? groups.map((group) => {
    const [groupTitle, groupSubtitle] = group;
    const entries = visibleWorks.filter(({ work }) => work.indexGroup === groupTitle);
    if (!entries.length) return "";
    return `<section class="index-group">
      <h2>${groupTitle}</h2>
      <p>${groupSubtitle}</p>
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
  const coverImage = getCoverImage(work);
  previewMedia.innerHTML = renderMedia(coverImage, `Preview of ${work.title}`, isVideo(coverImage) ? "autoplay" : "");
  document.getElementById("index-preview-number").textContent = `${String(index + 1).padStart(2, "0")} / ${String(works.length).padStart(2, "0")}`;
  document.getElementById("index-preview-title").textContent = work.title;
  document.getElementById("index-preview-meta").textContent = `${work.type} / ${work.year} / ${work.status}`;
  applyMediaRights(previewMedia);
}

function renderCollections() {
  document.querySelectorAll("[data-collection]").forEach((container) => {
    const section = container.dataset.collection;
    const entries = sortWorksByYear(works.map((work, index) => ({ work, index })).filter(({ work }) => work.sections.includes(section)));

    if (section === "field-notes") {
      container.innerHTML = entries.map(({ work, index }) =>
        workButton(work, index, "note-row", `
          <time>${work.year}</time>
          <div><small>${work.tools}</small><h2>${work.title}</h2></div>
          <p>${work.summary}</p><span>↗</span>
        `)
      ).join("");
      return;
    }

    container.innerHTML = entries.map(({ work, index }) =>
      workButton(work, index, "work-card", `
        <div class="work-image">${renderMedia(getCoverImage(work), "", "autoplay")}</div>
        <div class="work-card-text">
          <h2>${work.title}</h2>
          <p class="work-subtitle">${getProjectSubtitle(work)}</p>
          <div class="work-meta"><span>${work.year}</span></div>
        </div>
      `)
    ).join("");
  });
}

function showPage() {
  const route = location.hash.replace("#", "") || "cover";
  const normalizedRoute = route === "emerging-systems" ? "systems" : route === "archive" ? "architecture" : route;
  const page = pageNames.includes(normalizedRoute) ? normalizedRoute : "cover";
  pageSections.forEach((section) => { section.hidden = section.dataset.page !== page; });
  navLinks.forEach((link) => link.classList.toggle("is-active", link.hash === `#${page}`));
  document.querySelector(".site-nav").classList.remove("is-open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
}

function renderReader(index) {
  const work = works[index];
  return `
    <div class="entry-template">
      <header class="entry-intro">
        <div class="entry-title-block">
          <p class="kicker">${work.type} / ${work.year}</p>
          <h1>${work.title}</h1>
        </div>
        <dl class="reader-meta">
          <div><dt>Tags</dt><dd>${renderTagChips(work.tags)}</dd></div>
          <div><dt>Tools</dt><dd>${work.tools}</dd></div>
        </dl>
      </header>
      <div class="document-sequence">
        <section class="key-frame-sequence">
          ${renderKeyFrames(work)}
        </section>
        ${renderProjectDescription(work)}
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
