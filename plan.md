# CloneKit AI landing page plan

## Product scope
A one-page conversion landing page for a YouTube creator's AI automation course. The page uses the supplied vertical talking-head promo video as the primary proof asset and routes visitors from YouTube into a Telegram group to access free AI tools, the course, and the community.

## Design direction
- **Design movement:** Creator-lab editorial / dark-mode product launch page. It should feel like a sharp operator's workspace rather than a generic course funnel.
- **Core principles:** decisive hierarchy, visible proof, low-friction scanning, and strong mobile ergonomics.
- **Color philosophy:** near-black graphite creates focus and credibility; electric blue signals AI and momentum; acid-lime is reserved for tiny moments of confirmation and action so the CTA feels ownable.
- **Layout paradigm:** a vertical narrative with asymmetrical split sections, oversized type, timeline rails, and offset cards rather than a centered grid of equal boxes.
- **Signature elements:** blue radial light behind proof, thin technical rule lines, and a small diamond/chevron wordmark mark that suggests cloning a winning format.
- **Interaction philosophy:** interactions should clarify the next step—buttons lift slightly, FAQ rows disclose inline, and video is always one tap away.
- **Animation:** subtle reveal-up on scroll, slow ambient light drift, and compressed button hover motion; never animate the core promise or delay reading.
- **Typography system:** Space Grotesk for display/labels and Inter for readable body copy, with strong uppercase micro-labels and tight display tracking.
- **Brand essence:** A practical AI channel-building lab for aspiring creators who want to learn the format and publish without becoming video editors. Personality: direct, inventive, encouraging.
- **Brand voice:** short, specific, energetic, no hype or guarantees. Example lines: “Build the channel. Skip the edit suite.” and “Get the tools. Learn the workflow. Publish your first draft.”
- **Wordmark & logo:** CLONEKIT wordmark with a split-diamond mark: two offset angled strokes imply a repeatable format being copied and improved.
- **Signature brand color:** electric blue `#4D8DFF`, used as the recognizable action and proof color.

## Implementation
- Static HTML/CSS/JS on the managed web runtime, port 3000.
- Use the uploaded video at `/manus-storage/5522180_cb174dfe.mp4`.
- Sections: announcement bar, hero, proof rail, problem/solution timeline, benefits, member bundle, three-step workflow, FAQ, final CTA, footer.
- Primary CTA links use a single `TELEGRAM_URL` constant in `script.js`, currently set to `https://t.me/your_group_here` until the real group URL is provided.
- `public/manus-routes.json` declares the root route.
- No server or database is needed.
