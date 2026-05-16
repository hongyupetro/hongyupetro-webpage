# Site map (initial prototype)

All routes are **static** App Router pages unless noted.

| Path | Purpose |
|------|---------|
| `/` | Homepage: hero, positioning, categories, capabilities, featured product(s), quality/certifications/patents, industries, why choose us, CTA |
| `/products` | Product category overview + cards linking to detail routes |
| `/products/mud-agitator` | TCNJ / mud agitator: overview + spec table (PDF-grounded; TODOs where unclear) |
| `/products/solids-control-equipment` | Shaker, desander, desilter, degasser, pumps, hopper, gun, tanks—**summary from profile**; specs **TODO** per product |
| `/about` | Company intro, facilities, workshops, certifications, patents, QC/safety systems as stated |
| `/contact` | Inquiry form (UI); hotline + address fields from sources; email **TODO** |

## Navigation (header)

- Home  
- Products (dropdown or mega-link to `/products` + anchors optional in v2)  
- About  
- Contact  

## Footer

- Repeat key links  
- Hotline (if confirmed for web use)  
- Copyright line  
- **No** direct public links to internal `ref/*.pdf` unless business approves (keep PDFs internal to repo for staff/agency use).

## Future (not in v1 unless content arrives)

- `/news` or `/projects` — only with real items  
- `/downloads` — gated or approved datasheets only  
- Locale switch `en` / `zh` — optional; v1 can be English-primary with key Chinese legal name where useful
