# Design direction

## Objectives

- Read as a **credible industrial manufacturer**, not a consumer app or generic SaaS landing page.  
- Support **international B2B** visitors: clear hierarchy, readable typography, restrained color.  
- **Evidence-led** sections: certifications, systems, facility facts, and **documented** patents—no decorative “fake metrics.”

## Palette

| Role | Suggestion | Rationale |
|------|------------|-----------|
| Base | **Near-black / dark navy** (`#0B1220` family) | Equipment/OEM sites often use dark headers and footers |
| Surface | **Steel gray** (`#1e293b`, `#334155`) | Secondary panels, cards |
| Background | **Off-white** (`#f8fafc`) | Long-form readability |
| Primary text | **Slate / gray-900** on light; **gray-100** on dark | Contrast for accessibility |
| Accent | **Controlled orange** (`#ea580c` range) or **signal red** for CTAs only | Common in industrial branding; use sparingly (buttons, key lines) |

## Typography

- **Headings:** strong neo-grotesque sans (e.g. **IBM Plex Sans** or **DM Sans** via `next/font`)—legible at large sizes.  
- **Body:** same family or paired **Source Sans 3** for dense technical copy.  
- Avoid playful rounded display fonts.

## Layout patterns

- **Hero:** full-width dark band, one concise value line + primary CTA (Contact / Request quote) + secondary (Products). Use **abstract geometric** or **placeholder machinery** imagery until licensed photos exist.  
- **Product index:** responsive **grid** of cards with consistent aspect ratio; spec-led titles.  
- **Spec tables:** bordered, zebra-light rows, monospace optional for numeric columns.  
- **Trust row:** ISO names as **text**; optional icon placeholders—**do not** fabricate badge graphics.  
- **Sticky header** with blur background on scroll (subtle, professional).

## Imagery

- Prefer **real plant/equipment photos** when rights are cleared.  
- Until then: **neutral placeholders** with `TODO` in code comments for replacement.  
- **Do not** copy images from PDFs marked 图片严禁盗用 without permission.

## Motion

- **Minimal:** optional short opacity/translate on hero only; avoid playful bounce. Framer Motion **not required** if CSS suffices.

## Accessibility & SEO

- Logical `h1`–`h3`, skip link, focus states, sufficient contrast.  
- Unique `metadata` per route; OpenGraph basics on homepage.

## Content voice

- English: short sentences, active voice, **no superlatives** without proof.  
- Chinese company name can appear once in footer/about for domestic recognition.
