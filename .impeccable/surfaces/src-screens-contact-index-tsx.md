---
version: 1
slug: "src-screens-contact-index-tsx"
primary_target: "src/screens/contact/index.tsx"
related_targets: ["src/app/contact/page.tsx", "src/components/contact-form/index.tsx", "src/components/contact-form/container.ts", "src/components/copy-email-button/index.tsx", "src/utils/mock.ts"]
---

# Contact surface brief

Scope: `/contact` (src/screens/contact). Mode: Operate. Audience: freelance clients and recruiters ready to reach out. Action: send a WhatsApp message through the form, or pick any direct channel (email with copy, LinkedIn, GitHub, Instagram, resume).

## Direction contract

THESIS: Contact is one direct step. The form opens WhatsApp with the message ready, and every channel reaches the owner directly. The page's single light source is the glow submit button inside a glass panel.

OWN-WORLD: Blueprint grid ground, split lg 6fr/7fr. The form column is sticky on the right. It is a glass card (`glass-control`, `rounded-3xl`) with a title bar (two white/15 dots and a neon dot with `shadow-neon-dot`, plus the Mono uppercase title "Message on WhatsApp"). A blurred neon pool sits behind it and a `filament-glow` hairline on top. Fields are shadcn Input and Textarea (2.75rem, `bg-background/70`, neon-soft focus border and ring). The submit is `variant="glow" size="xl"`. Channels are hairline-ruled rows with large labels (xl/2xl), neon-soft icons, and arrow-up-right affordances. Email has a copy button.

STORY: H1 "Let's build something together" plus two paragraphs (availability, UTC−3, languages, inline email link) → contact form (right column, rows 1–2 on desktop) → "Or reach me on any channel." channel list → secondary links (resume, About, Experience, Technologies).

FIRST VIEWPORT: Desktop 1440: H1 (max 14ch) and intro on the left, the full glass form panel on the right, and the channel heading at or below the fold. Mobile 390: H1 and intro. The form starts below the fold, followed by the channel list.

ACCESSIBILITY: The form is `noValidate`, and every field is required. On submit, errors are committed first. Then focus moves to the first invalid field, which carries `aria-invalid` and an `aria-describedby` message (`text-destructive`, sm). An error clears as soon as its field gets a value. A `role="status"` live region announces the outcome. The hint "All fields are required." is announced through `describedBy`.

## Motion grammar

Static by design: no scene and no ambient motion. Only state transitions run: field focus rings, the glow button's shadow (neon to neon-strong) and press, arrow nudges on channel rows, and the copy-email feedback.
