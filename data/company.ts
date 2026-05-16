/**
 * Centralized company copy. Facts are grounded in PDFs under `ref/` — see `docs/content-brief.md`.
 * TODO markers indicate missing primary sources; do not replace with invented claims.
 */

export const company = {
  legalNameZh: "沧州宏宇石油机械有限责任公司",
  /** English as used in product manual letterhead; confirm preferred marketing spelling. */
  legalNameEn: "Cangzhou Hongyu Petroleum Machinery Co., Ltd.",
  /** Manual PDF prints “MECHINERY”; public site uses standard spelling. */
  tagline:
    "Drilling fluid solids control and surface equipment — engineering, manufacturing, and supply.",
  foundedYear: 2005,
  /** From 资质汇编 profile */
  facility: {
    zone: "Wuqiao Development Zone, Cangzhou, Hebei, China",
    logistics: "Near the Wuqiao exit of the G3 Beijing–Taipei Expressway (京台高速吴桥出入口).",
    siteAreaM2: 36_000,
    workshopAreaM2: 20_000,
    equipmentCount: "60+",
    employeeCount: "70+",
    shops: [
      "Casting shop",
      "Machining shop",
      "Mud tank welding shop",
      "Spraying / finishing shop",
    ],
  },
  positioning: [
    "R&D and manufacturing of petroleum drilling and production equipment.",
    "Qualified supplier to CNPC and Sinopec (per company qualification compilation).",
  ],
  certifications: [
    { name: "ISO 9001", note: "TODO: certificate number & scope from original certificate pages." },
    { name: "ISO 45001", note: "TODO: certificate number & scope from original certificate pages." },
    { name: "ISO 14001", note: "TODO: certificate number & scope from original certificate pages." },
  ],
  patents: [
    {
      titleZh: "一种可长期连续运转的钻井用泥浆搅拌机",
      number: "ZL 2023 2 3218044.5",
      publication: "CN 221436779 U",
      granted: "2024-07-30",
    },
    {
      titleZh: "一种钻井用高效泥浆搅拌机",
      number: "ZL 2024 2 0605120.3",
      publication: "CN 222057093 U",
      granted: "2024-11-26",
    },
  ],
  /** Patent certificate address — suitable for formal/legal contact block. */
  registeredAddress:
    "West side of Yanshan Road, Sangyuan Town, Wuqiao County, Cangzhou City, Hebei 061800, China",
  contact: {
    /** Mainland China mobile — published for web inquiries. */
    hotline: "+86 13603179619",
    email: "hongyupetro@gmail.com",
  },
  toneNotes: [
    "Technical, direct, and factory-credible — avoid consumer-style superlatives.",
    "Bilingual manuals exist; public English should stay conservative and accurate.",
  ],
} as const;
