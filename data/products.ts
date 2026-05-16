/**
 * Product catalogue derived from `ref/资质汇编新.pdf` (profile list) and
 * `ref/宏宇搅拌器说明书中英文-2024.pdf` (mud agitator). Uncertainties marked TODO.
 */

export type ProductCategory = {
  slug: string;
  title: string;
  summary: string;
  highlights: string[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "mud-agitator",
    title: "Mud agitators (TCNJ series)",
    summary:
      "Horizontal mud agitators for drilling-fluid tanks — part of the solids control loop, designed to keep solids suspended and properties stable.",
    highlights: [
      "Explosion-proof motor, reducer, coupling, impeller shaft, and impeller assembly (per manual).",
      "Designed to work alongside shale shakers, desanders, and desilters (per English manual section).",
    ],
  },
  {
    slug: "solids-control-equipment",
    title: "Solids control equipment",
    summary:
      "Shakers, cleaners, degassers, and related surface equipment listed in the company profile.",
    highlights: [
      "Mud shale shaker, desander, desilter, degasser (per company profile).",
      "TODO: model numbers, capacities, and datasheets per SKU — not extracted from scanned brochure PDF.",
    ],
  },
  {
    slug: "pumps-and-mixing",
    title: "Pumps, mixing, and circulation accessories",
    summary: "Pumps, mud guns, and mixing hoppers for mud circulation and conditioning.",
    highlights: [
      "Horizontal sand pump, vertical sand pump, mud gun, mixing hopper (per company profile).",
      "TODO: performance curves and seal specifications.",
    ],
  },
  {
    slug: "tanks-and-containers",
    title: "Mud tanks and containers",
    summary: "Fabricated mud tanks and containerized solutions from the workshop network.",
    highlights: [
      "Mud tanks and container products referenced in the company profile.",
      "Dedicated mud tank welding shop (per company profile).",
    ],
  },
];

export type SpecRow = { parameter: string; value: string; remark?: string };

/** Values reconstructed from manual text extraction — verify against original PDF tables. */
export const mudAgitatorSpecs: SpecRow[] = [
  {
    parameter: "Series",
    value: "TCNJ",
    remark: "Product designation in manuals.",
  },
  {
    parameter: "Rated power options (manual table fragment)",
    value: "4, 5.5, 7.5, 11, 15, 18.5, 22 kW",
    remark: "TODO: map each rating to exact model codes from printed tables.",
  },
  {
    parameter: "Impeller speed (printed in parameter table region)",
    value: "72 r/min",
    remark: "Associated with B00-1800mp context in source — confirm for all models.",
  },
  {
    parameter: "Blade count",
    value: "4 / 8",
  },
  {
    parameter: "Impeller diameter (upper / lower)",
    value: "920 mm / 430 mm",
    remark: "As printed in Chinese parameter table.",
  },
  {
    parameter: "Blade angle",
    value: "45°",
  },
  {
    parameter: "Reducer lubrication (ambient guidance)",
    value: "N220–N320 (−30–40 °C) or N320–N460 (40–65 °C)",
    remark: "From installation/maintenance section.",
  },
  {
    parameter: "Oil change interval (after run-in)",
    value: "Initial change after 100 h run-in; thereafter every 2500 h",
    remark: "Also stated in English manual section.",
  },
  {
    parameter: "Tank installation note (Chinese section)",
    value: "Example: 3 units on a 40 m³ tank; 5 units on a 60 m³ tank",
    remark: "TODO: confirm units and tank sizing assumptions against drawings.",
  },
];
