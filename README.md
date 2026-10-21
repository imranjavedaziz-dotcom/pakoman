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

Five distinct, visually inspected Wikimedia Commons photographs are stored in `assets/photos/`, so photography works offline. File descriptions, author and licence metadata are retained in `credits.json` and displayed on `news.html#sources`. Images were resized and JPEG-optimized; page layouts may crop them. Respect the individual CC BY-SA 4.0, CC0 or public-domain terms when reusing photos. Original SVG illustrations remain automatic failure fallbacks. The illustrative mark is not a government emblem.

The homepage includes a CSS/SVG animated maritime route, dhow, waves and port pulses. A pause/resume control and `prefers-reduced-motion` support are provided. Section reveals use IntersectionObserver and keep content visible when JavaScript is absent.

The supplied 14 October 2026 announcement could not be independently verified. It is explicitly marked pending on the relations/news pages. Verify the primary release, exact instrument scope and entry into force before changing that status. Do not extend official-passport arrangements to ordinary passports. Travel guidance directs users to official portals rather than publishing unverified eligibility, fees or processing promises. Proposed friendship programs are concepts, not active events.

Official resource links also require a pre-publication availability check. See the Sources & Editorial Notes section on `news.html`.

Use the existing checkout in cloud tasks; a new worktree is unnecessary.


## Review

Download the repository as a ZIP from GitHub, extract it, and open `index.html` for an interactive local review. GitHub’s source-code view does not render the website. The cloud onboarding UI does not expose a live localhost preview. Screenshot previews can be supplied in chat.

## Scroll-driven depth

The homepage includes a sticky photographic chapter with CSS perspective and reversible scroll-linked transforms. Native scrolling is preserved. Native CSS View Timelines drive three photographic layers, the hero depth and the dhow route. There are no JavaScript scroll listeners, per-frame layout measurements or inherited animated variables. The motion control pauses the animations. Browsers without view-timeline support receive a static composition. IntersectionObserver suspends offscreen decorative loops and limits layer promotion to visible scenes. Reduced-motion mode removes the sticky scroll extension and leaves a static composition. Short viewports use the ordinary document flow.

## UI Skills

Installed and ran `ui-skills@0.2.4` using npm exec (equivalent to npx). The remote `start` and `list --category motion` commands could not reach ui-skills.com, so the package-bundled motion guidance was used. Its MIT-licensed skill and licence are retained in `.agents/skills/fixing-motion-performance/` for future development. This is development guidance, not an application dependency; no React, Tailwind or build step was added.

To invoke the CLI again in this cloud machine:

```sh
npm exec --cache /tmp/pakoman-npm-cache --yes --package ui-skills@0.2.4 -- ui-skills
```
