<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep shared website navigation and footer in a reusable SiteShell, with content in individual TanStack leaf routes, so every major section has a shareable URL.
- Import uploaded brand artwork through asset pointers in shared branding and diagram centers; keep the browser favicon as a real public file so branding stays consistent without duplicating media.
- Implement asset networks as responsive SVG diagrams with CSS animation, so visuals remain lightweight and reduced-motion friendly.
- Use the shared EditorialHero with an explicit page subject from the bundled heroImages registry and CSS-only reduced-motion-aware animation, so each page has relevant imagery without duplicated presentation logic.
- Render the connected ecosystem as a bundled illustration with a responsive SVG data-flow overlay, so image animation remains lightweight and reduced-motion friendly.
- Keep dashboard samples frontend-only (fictional data); enquiries are validated with the shared Zod schema and saved via a server function into the enquiries table, which only the server can access.
- Validate enquiry details through the shared Zod schema before confirmation or download, so all field limits and error messages stay consistent.
- Export dashboard charts and activity from the same filtered state used by the visualizations; CSV serialization is centralized and spreadsheet-formula safe.
- Render the floating social dock once in SiteShell on every content page; channels with a verified destination link straight through (WhatsApp opens a chat on the published number) while unconnected ones stay labelled placeholders, and the dock uses a safe-area-aware mobile bottom bar to preserve usable links.
- Use a root-level DemoModalProvider and shared demo triggers for every enquiry CTA; preserve the legacy demo URL by opening the modal after returning home, so existing bookmarks keep working.
- Keep platform overview content in the index leaf and individual feature content in a validated dynamic leaf backed by shared feature data, so explore icons open meaningful shareable pages.
