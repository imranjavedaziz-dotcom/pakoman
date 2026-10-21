# Pakistan & Oman — A Friendship Across the Sea

Seven-page static editorial portal. Open `index.html` directly in a browser; no installation, build, database or credentials are required. All navigation and interactions also work on standard static/shared hosting. Upload the HTML files and `assets/` together, preserving relative paths.

Optional local development server:

```sh
cd /workspace/pakoman
python3 -m http.server 8000 --bind 127.0.0.1
```

## Pages

- `index.html`: partnership overview
- `relations.html`: diplomacy and shared history
- `trade.html`: sectors and official business resources
- `people.html`: community, education and health
- `heritage.html`: filterable destination guides and food heritage
- `travel.html`: official visa links, interactive checklist, print and FAQs
- `news.html`: editorial watch item, proposed programs, sources and visual notes

## Maintenance and publication

Shared styles and behaviour live in `assets/style.css` and `assets/site.js`. Navigation and footer are plain semantic HTML on every page so they remain available without JavaScript. Edit their copies together when changing the menu. Fonts have local fallbacks. No analytics, cookies, form collection or browser storage are used.

Network policy blocked official and image hosts during development. External photos have original, labelled local SVG illustration fallbacks; the fallback illustrations are not factual depictions of a named landmark. Before public release, verify photo identity and licence/attribution using the original publisher, download approved optimized images into `assets/`, and update the image URLs and alt text. Do not treat the current photo endpoints as verified. The illustrative local mark is not a government emblem.

The supplied 14 October 2026 announcement could not be independently verified. It is explicitly marked pending on the relations/news pages. Verify the primary release, exact instrument scope and entry into force before changing that status. Do not extend official-passport arrangements to ordinary passports. Travel guidance directs users to official portals rather than publishing unverified eligibility, fees or processing promises. Proposed friendship programs are concepts, not active events.

Official resource links also require a pre-publication availability check. See the Sources & Editorial Notes section on `news.html`.

Use the existing checkout in cloud tasks; a new worktree is unnecessary.
