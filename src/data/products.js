// FIXED IMPORT SECTION (replace your current import section with this)

// Core existing products
import gypsum1 from "../assets/products/gypsum/gypsum1.webp";
import gypsum2 from "../assets/products/gypsum/gypsum2.jpeg";
import gypsum3 from "../assets/products/gypsum/gypsum3.webp";
import armstrong1 from "../assets/products/armstrong/Armstrong1.jpg";
import armstrong2 from "../assets/products/armstrong/Armstrong2.jpg";
import armstrong3 from "../assets/products/armstrong/Armstrong3.jpg";
import armstrongTiles1 from "../assets/products/armstrongceiling/Armstrongcetile1.jpeg";
import armstrongTiles2 from "../assets/products/armstrongceiling/Armstrongcetile2.jpeg";
import armstrongTiles3 from "../assets/products/armstrongceiling/Armstrongcetile3.jpeg";
import rockwool1 from "../assets/products/rockwool/rockwool1.webp";
import rockwool2 from "../assets/products/rockwool/rockwool2.webp";
import rockwool3 from "../assets/products/rockwool/rockwool3.webp";
import bison1 from "../assets/products/bison/bison1.png";
import bison2 from "../assets/products/bison/Bison2.jpeg";
import bison3 from "../assets/products/bison/Bison3.jpeg";
import calciumImg from "../assets/products/calicumtile/Calcium1.webp";
import glasswool1 from "../assets/products/glasswool/glasswool1.jpeg";
import glasswool2 from "../assets/products/glasswool/glasswool2.jpeg";
import glasswool3 from "../assets/products/glasswool/glasswool3.jpeg";
import bondImg from "../assets/products/bond/bond1.jpeg";

// Added products
import ceilingChannel1 from "../assets/products/ceilingchanel/Gyprocceilingchan1.jpeg";
import ceilingChannel2 from "../assets/products/ceilingchanel/Gyprocceilingchan2.jpeg";
import ceilingChannel3 from "../assets/products/ceilingchanel/Gyprocceilingchan3.jpeg";
import cementBoardImg from "../assets/products/cement/Cement1.jpg";
import floorSheetImg from "../assets/products/floorsheet/Floorsheet1.jpeg";
import giCeilingImg from "../assets/products/giceiling/giciling1.jpeg";
import glassFibreMeshImg from "../assets/products/glassfibremesh/Glafibmes1.webp";
import hilux1 from "../assets/products/hilumboard/Hilux1.jpeg";
import hilux2 from "../assets/products/hilumboard/Hilux2.jpeg";
import hilux3 from "../assets/products/hilumboard/Hilux3.webp";
import jointingImg from "../assets/products/jointing/jointing1.jpeg";
import laminatedCeilingImg from "../assets/products/laminatedceiling/tile1.jpg";
import mineralFibreImg from "../assets/products/mileralfibreceiling/Mineral1.jpg";
import plasterImg from "../assets/products/plaster/plaster1.jpeg";
import rapiconWallPanelImg from "../assets/products/rapiconwallpanel/Rapipanel1.webp";
import roxulRockwoolImg from "../assets/products/roxulrockwool/Roxul1.webp";

// Final missing products
import sheraCementBoardImg from "../assets/products/sheracementboard/Sheracement1.avif";
import suspensionImg from "../assets/products/suspension/suspension1.jpeg";
import thermalInsuImg from "../assets/products/thermalinsu/Therminsusheet1.jpeg";
import vishakaBoardImg from "../assets/products/vishakacementfibre/Vishakacem1.webp";
import wallPanelImg from "../assets/products/wallpanel/wallpanel1.jpg";
export const products = [
  {
    id: 1,
    name: "Gypsum Board",
    category: "Gypsum Boards",
    brand: "Gyproc",
    keywords: ["gypsum", "board", "drywall", "ceiling"],
        description: "Premium fire resistant gypsum board engineered for durability and acoustic performance",
    images: [gypsum1, gypsum2, gypsum3],
    image: gypsum1,
    fullDescription: "Our premium gypsum boards combine fire resistance, acoustic performance, and durability. Perfect for commercial and residential applications, these boards offer superior moisture resistance and easy installation.",
    featured: true,
    features: [
      "Fire resistant up to 120 minutes",
      "Excellent acoustic absorption",
      "Moisture resistant variant available",
      "Easy cutting and installation",
      "Eco-friendly composition"
    ],
    specifications: {
      "Thickness": "9.5mm, 12mm, 15mm",
      "Dimensions": "1220mm × 2440mm",
      "Density": "720 kg/m³",
      "Compressive Strength": "> 2.0 MPa",
      "Fire Rating": "A2 Grade"
    },
    applications: [
      "Office buildings and commercial spaces",
      "Residential apartments and houses",
      "Healthcare facilities",
      "Educational institutions",
      "Hospitality and retail spaces",
      "Industrial interiors"
    ]
  },
  {
    id: 2,
    name: "Armstrong Ceiling System",
    category: "Ceiling Systems",
    brand: "Armstrong",
    keywords: ["armstrong", "ceiling", "acoustic", "premium"],
        description: "Professional-grade acoustic ceiling system with superior sound absorption",
    images: [armstrong1, armstrong2, armstrong3],
    image: armstrong1,
    fullDescription: "Armstrong Ceiling Systems provide a complete suspended ceiling solution with integrated acoustics, lighting, and HVAC. Designed for modern offices, this system ensures comfort and aesthetics.",
    featured: true,
    features: [
      "Superior sound absorption",
      "Easy access to building services",
      "Integrated lighting compatibility",
      "Fire and smoke ratings",
      "Sustainable materials"
    ],
    specifications: {
      "Grid Type": "T-Bar System",
      "Module Size": "600mm × 600mm, 1200mm × 600mm",
      "NRC Rating": "0.80 - 0.90",
      "Light Reflectance": "70%+",
      "Installation Height": "Customizable"
    },
    applications: [
      "Corporate offices",
      "Banks and financial institutions",
      "Hospitals and clinics",
      "Universities and schools",
      "Retail showrooms",
      "Data centers"
    ]
  },
  {
    id: 3,
    name: "Armstrong Ceiling Tiles",
    category: "Ceiling Tiles",
    brand: "Armstrong",
    keywords: ["armstrong", "tiles", "acoustic", "ceiling"],
        description: "High-performance ceiling tiles designed for commercial and residential spaces",
    images: [armstrongTiles1, armstrongTiles2, armstrongTiles3],
    image: armstrongTiles1,
    fullDescription: "Premium ceiling tiles that combine aesthetic appeal with superior acoustic performance. These tiles are easy to maintain and offer exceptional durability for high-traffic areas.",
    featured: true,
    features: [
      "Superior acoustic performance",
      "Stain and moisture resistant",
      "Easy to clean and maintain",
      "Class A fire rating",
      "Wide color range available"
    ],
    specifications: {
      "Tile Size": "600mm × 600mm, 1200mm × 600mm",
      "Thickness": "12mm, 15mm",
      "NRC": "0.75 - 0.85",
      "Durability": "10+ years",
      "Weight": "3-4 kg per tile"
    },
    applications: [
      "Open office spaces",
      "Meeting rooms and conference halls",
      "Hotels and restaurants",
      "Shopping centers",
      "Museums and galleries"
    ]
  },
  {
    id: 4,
    name: "Rockwool Insulation",
    category: "Insulation Materials",
    brand: "Rockwool",
    keywords: ["rockwool", "thermal", "insulation", "acoustic"],
        description: "High-performance thermal and acoustic insulation for modern buildings",
    images: [rockwool1, rockwool2, rockwool3],
    image: rockwool1,
    fullDescription: "Rockwool insulation provides superior thermal and acoustic properties with A1 non-combustible fire rating. Ideal for both residential and commercial applications.",
    featured: true,
    features: [
      "Non-combustible A1 fire rating",
      "Superior thermal insulation",
      "Excellent sound absorption",
      "Water and vapor resistant",
      "Sustainable material"
    ],
    specifications: {
      "Density": "25-160 kg/m³",
      "Thermal Conductivity": "0.033 - 0.041 W/mK",
      "Fire Rating": "A1 Non-combustible",
      "Thickness": "25mm - 200mm",
      "Lifespan": "50+ years"
    },
    applications: [
      "Wall insulation",
      "Roof insulation",
      "Floor insulation",
      "Cavity wall filling",
      "Industrial applications"
    ]
  },
  {
    id: 5,
    name: "Bison Board",
    category: "Cement Boards",
    brand: "Bison",
    keywords: ["bison", "cement", "board", "durable"],
        description: "Cement bonded particle board built for structural strength and reliability",
    images: [bison1, bison2, bison3],
    image: bison1,
    fullDescription: "Bison boards are engineered for maximum durability and strength. Perfect for wet areas, outdoor applications, and high-traffic commercial spaces.",
    featured: true,
    features: [
      "Superior water resistance",
      "High structural strength",
      "Suitable for wet areas",
      "Easy machining and customization",
      "Long-lasting durability"
    ],
    specifications: {
      "Thickness": "6mm, 8mm, 10mm, 12mm",
      "Dimensions": "1220mm × 2440mm",
      "Density": "1.0 - 1.2 g/cm³",
      "Compressive Strength": "> 20 MPa",
      "Water Absorption": "< 10%"
    },
    applications: [
      "Bathrooms and wet areas",
      "Kitchen backsplashes",
      "Exterior cladding",
      "Industrial applications",
      "Marine environments"
    ]
  },
  {
    id: 6,
    name: "Calcium Silicate Tile",
    category: "Ceiling Tiles",
    brand: "Ramco",
    keywords: ["calcium", "silicate", "tile", "ceiling"],
    description: "Premium calcium silicate tiles with excellent fire resistance and durability",
    image: calciumImg,
    fullDescription: "High-quality calcium silicate tiles offering superior fire resistance and thermal stability. Ideal for industrial, commercial, and specialized applications requiring maximum safety.",
    featured: true,
    features: [
      "Class A1 fire rating",
      "High thermal stability",
      "Excellent dimensional stability",
      "Moisture resistant",
      "Long service life"
    ],
    specifications: {
      "Tile Size": "300mm × 300mm, 600mm × 600mm",
      "Thickness": "25mm, 40mm",
      "Density": "750-850 kg/m³",
      "Fire Rating": "A1 Non-combustible",
      "Thermal Conductivity": "0.25 W/mK"
    },
    applications: [
      "Industrial environments",
      "Cold storage facilities",
      "Kitchens in commercial settings",
      "Cleanrooms",
      "Chemical storage areas"
    ]
  },
  {
    id: 7,
    name: "Glasswool Insulation",
    category: "Insulation Materials",
    brand: "UP Twiga",
    keywords: ["glasswool", "insulation", "thermal", "energy"],
        description: "Reliable glasswool insulation for energy efficiency and sound control",
    images: [glasswool1, glasswool2, glasswool3],
    image: glasswool1,
    fullDescription: "UP Twiga Glasswool offers excellent thermal insulation and sound absorption properties. Cost-effective solution for residential and commercial energy efficiency.",
    featured: true,
    features: [
      "Energy efficient thermal insulation",
      "Effective sound absorption",
      "Fire resistant material",
      "Lightweight and easy to install",
      "Cost-effective solution"
    ],
    specifications: {
      "Density": "20-64 kg/m³",
      "Thermal Conductivity": "0.035 - 0.044 W/mK",
      "Fire Rating": "A2-s1, d0",
      "Thickness": "25mm - 200mm",
      "Available Forms": "Batts, Rolls, Boards"
    },
    applications: [
      "Attic insulation",
      "Wall cavities",
      "Pipe insulation",
      "HVAC ducts",
      "Industrial piping"
    ]
  },
  {
    id: 8,
    name: "Gyproc Bond It",
    category: "Gypsum Products",
    brand: "Gyproc",
    keywords: ["gyproc", "bond", "adhesive", "joint"],
    description: "Premium jointing compound for seamless gypsum board installation",
    image: bondImg,
    fullDescription: "High-performance jointing compound specifically formulated for gypsum board installations. Provides smooth finishes and excellent adhesion properties.",
    featured: true,
    features: [
      "Superior adhesion to gypsum boards",
      "Easy application and spreading",
      "Minimal shrinkage after drying",
      "Sandable finish",
      "Non-toxic formulation"
    ],
    specifications: {
      "Coverage": "1.5 kg/m² per mm thickness",
      "Pot Life": "45-60 minutes",
      "Drying Time": "2-3 hours per coat",
      "Final Strength": "Achieves in 24-48 hours",
      "Yield": "25 kg covers ~13 m²"
    },
    applications: [
      "Gypsum board joints",
      "Board edge sealing",
      "General surface preparation",
      "Drywall finishing",
      "Interior wall applications"
    ]
  },

  {
    id: 9,
    name: "Gyproc Ceiling Channel",
    category: "Ceiling Systems",
    brand: "Gyproc",
    keywords: ["ceiling channel", "gyproc", "metal framing", "false ceiling"],
        description: "Premium galvanized ceiling channels for strong and durable false ceiling frameworks",
    images: [ceilingChannel1, ceilingChannel2, ceilingChannel3],
    image: ceilingChannel1,
    fullDescription: "Gyproc Ceiling Channels are precision-engineered galvanized steel framing components used in suspended ceiling systems. Designed for durability, alignment accuracy, and long-term structural stability.",
    featured: false,
    features: [
      "High-quality galvanized steel",
      "Corrosion resistant finish",
      "Strong load-bearing capacity",
      "Easy installation and alignment",
      "Long service life"
    ],
    specifications: {
      "Material": "Galvanized Steel",
      "Thickness": "0.45mm - 0.8mm",
      "Length": "3000mm",
      "Finish": "Zinc Coated",
      "Application Type": "Suspended Ceiling Framework"
    },
    applications: [
      "False ceiling systems",
      "Commercial office ceilings",
      "Residential gypsum ceilings",
      "Hospital ceiling structures",
      "Retail interior projects"
    ]
  },

  {
    id: 10,
    name: "Cement Board",
    category: "Cement Boards",
    brand: "UP Twiga",
    keywords: ["cement board", "cement panel", "construction board", "durable board"],
    description: "Heavy-duty cement boards for high-strength interior and exterior applications",
    image: cementBoardImg,
    fullDescription: "Premium cement boards designed for wet areas, exterior cladding, partitions, and heavy-duty construction projects. Built for strength, moisture resistance, and long-lasting performance.",
    featured: false,
    features: [
      "Excellent water resistance",
      "High structural strength",
      "Suitable for wet areas",
      "Weather-resistant surface",
      "Long durability"
    ],
    specifications: {
      "Thickness": "6mm - 18mm",
      "Dimensions": "1220mm × 2440mm",
      "Density": "High Density Cement Core",
      "Water Resistance": "Excellent",
      "Fire Rating": "Class A"
    },
    applications: [
      "Bathroom wall systems",
      "Exterior cladding",
      "Kitchen wall backing",
      "Commercial partitions",
      "Industrial structures"
    ]
  },

  {
    id: 11,
    name: "Floor Sheet",
    category: "Cement Boards",
    brand: "Shera",
    keywords: ["floor sheet", "floor panel", "cement floor board", "subfloor"],
    description: "High-load floor sheets designed for durable elevated flooring and dry construction systems",
    image: floorSheetImg,
    fullDescription: "Floor sheets are engineered for raised flooring systems, mezzanine floors, and dry floor construction where strength, moisture resistance, and durability are critical.",
    featured: false,
    features: [
      "High load-bearing strength",
      "Moisture resistant core",
      "Fast dry installation",
      "Termite resistant",
      "Smooth surface finish"
    ],
    specifications: {
      "Thickness": "15mm - 25mm",
      "Dimensions": "1220mm × 2440mm",
      "Load Capacity": "Heavy Duty",
      "Surface": "Smooth Cement Finish",
      "Installation": "Dry Construction Compatible"
    },
    applications: [
      "Raised flooring",
      "Mezzanine flooring",
      "Commercial dry flooring",
      "Industrial flooring systems",
      "Prefab construction"
    ]
  },

  {
    id: 12,
    name: "GI Ceiling System",
    category: "Ceiling Systems",
    brand: "Gyproc",
    keywords: ["gi ceiling", "galvanized iron ceiling", "ceiling framework"],
    description: "Galvanized iron ceiling systems built for premium suspended ceiling structures",
    image: giCeilingImg,
    fullDescription: "GI Ceiling Systems provide strong and stable framing support for gypsum ceilings and false ceilings. Manufactured with corrosion-resistant galvanized iron for long-term durability.",
    featured: false,
    features: [
      "Rust-resistant GI structure",
      "High load-bearing support",
      "Easy ceiling suspension",
      "Precise alignment system",
      "Long-lasting framework"
    ],
    specifications: {
      "Material": "Galvanized Iron",
      "Thickness": "0.5mm - 1mm",
      "Length": "3000mm",
      "Finish": "Anti-Corrosive Coating",
      "Usage": "False Ceiling Framework"
    },
    applications: [
      "Corporate office ceilings",
      "Mall false ceilings",
      "Hospital ceilings",
      "Residential premium interiors",
      "Commercial suspended ceilings"
    ]
  },

  {
    id: 13,
    name: "Glass Fibre Mesh",
    category: "Gypsum Products",
    brand: "Gyproc",
    keywords: ["glass fibre mesh", "joint mesh", "wall mesh", "crack prevention"],
    description: "Reinforcement mesh for crack prevention and stronger plaster and joint finishing",
    image: glassFibreMeshImg,
    fullDescription: "Glass Fibre Mesh improves crack resistance and reinforcement strength in plastering, gypsum joints, and wall finishing applications. Essential for premium finishing quality.",
    featured: false,
    features: [
      "Crack prevention support",
      "Strong reinforcement strength",
      "Lightweight and flexible",
      "Easy plaster integration",
      "Long-term durability"
    ],
    specifications: {
      "Material": "Fiberglass Mesh",
      "Mesh Size": "Standard Construction Grade",
      "Roll Length": "50m",
      "Application": "Joint & Wall Reinforcement",
      "Resistance": "Alkali Resistant"
    },
    applications: [
      "Gypsum board joints",
      "Wall plaster reinforcement",
      "Crack prevention systems",
      "Interior wall finishing",
      "External plaster applications"
    ]
  },

  {
    id: 14,
    name: "Ramco Hilux Board",
    category: "Cement Boards",
    brand: "Ramco",
    keywords: ["hilux board", "ramco board", "cement board", "fibre cement"],
        description: "Premium fibre cement boards engineered for high-performance interior and exterior use",
    images: [hilux1, hilux2, hilux3],
    image: hilux1,
    fullDescription: "Ramco Hilux Boards are advanced fibre cement boards offering superior durability, moisture resistance, and structural performance for demanding commercial and residential projects.",
    featured: true,
    features: [
      "Fibre cement strength",
      "Excellent moisture resistance",
      "High durability performance",
      "Suitable for exterior use",
      "Smooth premium finish"
    ],
    specifications: {
      "Thickness": "6mm - 18mm",
      "Dimensions": "1220mm × 2440mm",
      "Composition": "Fibre Cement",
      "Fire Rating": "Class A",
      "Usage": "Interior + Exterior Applications"
    },
    applications: [
      "External wall cladding",
      "Partition systems",
      "Wet area construction",
      "Commercial projects",
      "Residential premium interiors"
    ]
  },
  {
    id: 15,
    name: "Jointing Compound",
    category: "Gypsum Products",
    brand: "Gyproc",
    keywords: ["jointing compound", "putty", "gypsum joint", "wall finish"],
    description: "Professional-grade jointing compound for smooth gypsum board finishing and seamless joints",
    image: jointingImg,
    fullDescription: "Premium jointing compound designed for gypsum board joints, crack filling, and smooth surface preparation. Ensures superior finish quality for modern interiors.",
    featured: false,
    features: [
      "Smooth seamless finish",
      "Strong joint bonding",
      "Low shrinkage formula",
      "Easy sanding performance",
      "Fast drying application"
    ],
    specifications: {
      "Packaging": "20kg / 25kg Bags",
      "Drying Time": "2–4 Hours",
      "Application": "Gypsum Joint Finishing",
      "Coverage": "Approx. 12–15 m²",
      "Finish": "Smooth White Surface"
    },
    applications: [
      "Gypsum board joints",
      "Wall crack repair",
      "Drywall finishing",
      "Interior wall preparation",
      "False ceiling finishing"
    ]
  },

  {
    id: 16,
    name: "Laminated Ceiling Tile",
    category: "Ceiling Tiles",
    brand: "Armstrong",
    keywords: ["laminated ceiling", "decorative tile", "false ceiling tile"],
    description: "Decorative laminated ceiling tiles built for premium modern interior ceiling systems",
    image: laminatedCeilingImg,
    fullDescription: "Premium laminated ceiling tiles offering aesthetic appeal, durability, and easy maintenance for luxury commercial and residential ceiling designs.",
    featured: true,
    features: [
      "Premium decorative finish",
      "Easy cleaning surface",
      "Moisture resistant coating",
      "Elegant modern appearance",
      "Long service durability"
    ],
    specifications: {
      "Tile Size": "600mm × 600mm",
      "Finish": "Laminated Decorative Surface",
      "Thickness": "12mm",
      "Moisture Resistance": "High",
      "Installation": "Grid Ceiling Compatible"
    },
    applications: [
      "Luxury offices",
      "Retail interiors",
      "Hotels and hospitality",
      "Premium residences",
      "Conference rooms"
    ]
  },

  {
    id: 17,
    name: "Mineral Fibre Ceiling",
    category: "Ceiling Tiles",
    brand: "Armstrong",
    keywords: ["mineral fibre", "acoustic ceiling", "ceiling tile"],
    description: "Acoustic mineral fibre ceiling tiles with superior sound absorption and premium finish",
    image: mineralFibreImg,
    fullDescription: "Mineral fibre ceiling systems are ideal for acoustic control, thermal insulation, and elegant suspended ceilings in modern commercial spaces.",
    featured: true,
    features: [
      "Excellent sound absorption",
      "Thermal insulation support",
      "Lightweight tile design",
      "Fire-resistant material",
      "Clean premium finish"
    ],
    specifications: {
      "Tile Size": "600mm × 600mm",
      "NRC": "0.70 - 0.90",
      "Thickness": "12mm - 15mm",
      "Fire Rating": "Class A",
      "Installation": "Suspended Grid System"
    },
    applications: [
      "Corporate offices",
      "Hospitals",
      "Schools and colleges",
      "Retail malls",
      "Commercial buildings"
    ]
  },

  {
    id: 18,
    name: "Wall Plaster",
    category: "Gypsum Products",
    brand: "Gyproc",
    keywords: ["wall plaster", "gypsum plaster", "interior finish"],
    description: "Premium wall plaster solution for smooth interior finishes and faster construction",
    image: plasterImg,
    fullDescription: "High-performance wall plaster designed for smooth wall finishing, crack reduction, and faster application compared to traditional sand-cement plaster.",
    featured: false,
    features: [
      "Smooth wall finish",
      "Faster construction speed",
      "Reduced wall cracks",
      "Low wastage application",
      "Superior surface quality"
    ],
    specifications: {
      "Packaging": "25kg / 40kg Bags",
      "Setting Time": "Fast Setting",
      "Finish": "Smooth White Surface",
      "Application": "Interior Wall Plaster",
      "Coverage": "Excellent"
    },
    applications: [
      "Residential interiors",
      "Commercial wall finishing",
      "Office construction",
      "Hotel interiors",
      "Retail projects"
    ]
  },

  {
    id: 19,
    name: "Rapicon Wall Panel",
    category: "Cement Boards",
    brand: "Rapicon",
    keywords: ["wall panel", "prefab panel", "construction panel"],
    description: "High-performance prefab wall panels for faster and stronger modern construction systems",
    image: rapiconWallPanelImg,
    fullDescription: "Rapicon Wall Panels provide fast construction, superior strength, and modern dry wall solutions for commercial and industrial projects.",
    featured: true,
    features: [
      "Fast prefab installation",
      "Strong structural support",
      "Lightweight construction",
      "Thermal insulation benefits",
      "Reduced project timelines"
    ],
    specifications: {
      "Panel Type": "Prefab Construction Panel",
      "Installation": "Dry Construction",
      "Strength": "High Structural Grade",
      "Application": "Internal + External Walls",
      "Finish": "Smooth Panel Surface"
    },
    applications: [
      "Prefab buildings",
      "Industrial structures",
      "Commercial walls",
      "Warehouse partitions",
      "Residential rapid construction"
    ]
  },

  {
    id: 20,
    name: "Roxul Rockwool Panel",
    category: "Insulation Materials",
    brand: "Roxul",
    keywords: ["roxul", "rockwool", "thermal insulation", "fireproof insulation"],
    description: "Advanced rockwool insulation panels for thermal efficiency, acoustic control, and fire safety",
    image: roxulRockwoolImg,
    fullDescription: "Roxul Rockwool Panels deliver premium thermal insulation, sound absorption, and non-combustible fire safety for industrial and commercial spaces.",
    featured: true,
    features: [
      "A1 fire-rated insulation",
      "Superior thermal efficiency",
      "Excellent acoustic control",
      "Water resistant performance",
      "Long operational lifespan"
    ],
    specifications: {
      "Density": "40–160 kg/m³",
      "Thermal Conductivity": "Low Conductivity",
      "Fire Rating": "A1 Non-Combustible",
      "Thickness": "25mm – 200mm",
      "Usage": "Thermal + Acoustic Insulation"
    },
    applications: [
      "Industrial plants",
      "HVAC insulation",
      "Commercial buildings",
      "Factory insulation",
      "Fire-rated structures"
    ]
  },
  {
    id: 21,
    name: "Shera Cement Board",
    category: "Cement Boards",
    brand: "Shera",
    keywords: ["shera cement board", "fibre cement board", "partition board"],
    description: "Premium fibre cement board for partitions, cladding, and durable construction applications",
    image: sheraCementBoardImg,
    fullDescription: "Shera Cement Boards are engineered for strength, moisture resistance, and long-term durability. Ideal for partitions, wet areas, and external cladding systems.",
    featured: true,
    features: [
      "High moisture resistance",
      "Strong fibre cement core",
      "Termite and fungus resistant",
      "Suitable for wet areas",
      "Smooth premium surface finish"
    ],
    specifications: {
      "Thickness": "6mm - 18mm",
      "Dimensions": "1220mm × 2440mm",
      "Composition": "Fibre Cement",
      "Fire Rating": "Class A",
      "Usage": "Interior + Exterior"
    },
    applications: [
      "Wall partitions",
      "External cladding",
      "Wet area construction",
      "Commercial projects",
      "Industrial applications"
    ]
  },

  {
    id: 22,
    name: "Suspension System",
    category: "Ceiling Systems",
    brand: "Gyproc",
    keywords: ["suspension system", "ceiling suspension", "false ceiling framework"],
    description: "Heavy-duty suspension systems for secure false ceiling and grid framework installation",
    image: suspensionImg,
    fullDescription: "Suspension systems provide the primary support structure for false ceilings, ensuring load-bearing stability, alignment precision, and long-term ceiling durability.",
    featured: false,
    features: [
      "High load-bearing strength",
      "Stable ceiling support",
      "Corrosion-resistant finish",
      "Precision alignment system",
      "Long-lasting framework"
    ],
    specifications: {
      "Material": "Galvanized Steel",
      "Finish": "Anti-Corrosive Coating",
      "Length": "Standard Industrial Sizes",
      "Application": "Ceiling Framework Support",
      "Durability": "Heavy Duty Grade"
    },
    applications: [
      "False ceilings",
      "Office suspended ceilings",
      "Commercial projects",
      "Hospital ceilings",
      "Mall interiors"
    ]
  },

  {
    id: 23,
    name: "Thermal Insulation Sheet",
    category: "Insulation Materials",
    brand: "UP Twiga",
    keywords: ["thermal insulation", "insulation sheet", "heat insulation"],
    description: "High-efficiency thermal insulation sheets for temperature control and energy savings",
    image: thermalInsuImg,
    fullDescription: "Thermal insulation sheets are designed to reduce heat transfer, improve HVAC efficiency, and provide better indoor comfort across industrial and commercial buildings.",
    featured: true,
    features: [
      "Excellent heat insulation",
      "Energy-saving performance",
      "Moisture-resistant protection",
      "Lightweight installation",
      "Long-term durability"
    ],
    specifications: {
      "Thickness": "25mm - 100mm",
      "Thermal Conductivity": "Low",
      "Application": "Roof + Wall Insulation",
      "Fire Rating": "Fire Resistant Grade",
      "Form": "Sheet / Roll"
    },
    applications: [
      "Industrial sheds",
      "Commercial roofs",
      "HVAC insulation",
      "Warehouse insulation",
      "Building thermal control"
    ]
  },

  {
    id: 24,
    name: "Vishaka Cement Fibre Board",
    category: "Cement Boards",
    brand: "Vishaka",
    keywords: ["vishaka board", "cement fibre board", "fibre cement sheet"],
    description: "High-strength cement fibre boards for partitions, cladding, and industrial construction use",
    image: vishakaBoardImg,
    fullDescription: "Vishaka Cement Fibre Boards provide reliable performance for dry wall systems, wet areas, partitions, and external cladding with superior strength and durability.",
    featured: false,
    features: [
      "High structural strength",
      "Moisture resistant board",
      "Fire-resistant construction",
      "Suitable for exterior use",
      "Low maintenance surface"
    ],
    specifications: {
      "Thickness": "6mm - 18mm",
      "Dimensions": "1220mm × 2440mm",
      "Material": "Cement Fibre Board",
      "Usage": "Internal + External",
      "Fire Rating": "Class A"
    },
    applications: [
      "Wall partitions",
      "Exterior wall systems",
      "Wet area construction",
      "Industrial buildings",
      "Commercial interiors"
    ]
  },

  {
    id: 25,
    name: "Decorative Wall Panel",
    category: "Cement Boards",
    brand: "Rapicon",
    keywords: ["wall panel", "decorative panel", "interior panel"],
    description: "Premium decorative wall panels for modern interior architecture and premium commercial spaces",
    image: wallPanelImg,
    fullDescription: "Decorative Wall Panels provide elegant interior wall solutions with modern aesthetics, fast installation, and durable performance for premium commercial and residential spaces.",
    featured: true,
    features: [
      "Premium decorative finish",
      "Fast installation system",
      "Durable panel construction",
      "Modern architectural aesthetics",
      "Low maintenance surface"
    ],
    specifications: {
      "Panel Type": "Decorative Interior Panel",
      "Installation": "Dry Wall Mounting",
      "Finish": "Premium Surface Finish",
      "Application": "Interior Wall Decoration",
      "Durability": "Commercial Grade"
    },
    applications: [
      "Luxury offices",
      "Hotels and hospitality",
      "Retail interiors",
      "Premium residences",
      "Commercial feature walls"
    ]
  }
];