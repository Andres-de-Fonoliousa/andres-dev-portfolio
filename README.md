# Portfolio Project Details

Paste your details here:

## Name

## Stack

## Projects

## Contact

### 1.3 Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Micro gaps |
| `space-sm` | 8px | Tight spacing |
| `space-md` | 16px | Default element gap |
| `space-lg` | 24px | Component padding |
| `space-xl` | 32px | Section internal spacing |
| `space-2xl` | 48px | Between components |
| `space-3xl` | 64px | Between sections |
| `space-4xl` | 96px | Major section breaks |
| `space-5xl` | 128px | Hero breathing room |

**Container:** Max-width `1200px`, centered, with `px-6` (24px) horizontal padding on desktop, `px-4` (16px) on mobile.

### 1.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 8px | Buttons, small tags |
| `radius-md` | 12px | Input fields |
| `radius-lg` | 16px | Cards |
| `radius-xl` | 24px | Large cards, modals |
| `radius-full` | 9999px | Pills, avatars |

### 1.5 Shadows & Glows

| Token | Value | Usage |
|-------|-------|-------|
| `glow-sm` | `0 0 20px rgba(34,211,238,0.15)` | Button hover |
| `glow-md` | `0 0 40px rgba(34,211,238,0.2)` | Card hover |
| `glow-accent` | `0 0 60px rgba(167,139,250,0.15)` | Hero text ambient |
| `shadow-card` | `0 4px 24px rgba(0,0,0,0.4)` | Card base |

---

## 2. GLOBAL ANIMATIONS & INTERACTIONS

### 2.1 Entrance Animations
- All sections use `fade-up` on scroll into view.
- **Properties:** `opacity: 0 ? 1`, `translateY: 30px ? 0`, `duration: 0.6s`, `easing: cubic-bezier(0.22, 1, 0.36, 1)`
- **Stagger:** Children within a section stagger by `0.1s`.
- **Trigger:** IntersectionObserver at `threshold: 0.15`.

### 2.2 Hover States
- **Buttons:** `scale(1.02)`, glow intensifies, background lightens 10%.
- **Cards:** `translateY(-4px)`, border color transitions to `--border-glow`, `shadow-card` intensifies.
- **Links:** Underline grows from left to right using `scaleX(0) ? scaleX(1)` on a pseudo-element.
- **Tech badges:** Subtle cyan glow pulse on hover.

### 2.3 Special Effects
- **Hero cursor blink:** A terminal-style blinking underscore (`_`) after the headline. CSS animation: `opacity 0 ? 1`, `duration: 1s`, `iteration: infinite`, `direction: alternate`.
- **Ambient gradient orbs:** Two large blurred circles (cyan and violet, `400px` diameter, `blur: 100px`, `opacity: 0.15`) fixed in the background, slowly drifting. CSS animation: `translate` in a 20s infinite loop, alternate.
- **Noise texture overlay:** A subtle static noise PNG at 3% opacity over the entire page for texture. Use `pointer-events: none`.

### 2.4 Smooth Scroll
- Enable `scroll-behavior: smooth` on `html`.
- Navigation (if any) uses anchor links to section IDs.

---

## 3. SECTION-BY-SECTION SPECIFICATION

### SECTION 1: HERO
**ID:** `#hero`
**Padding:** `pt-32 pb-24` desktop, `pt-24 pb-16` mobile.

#### Layout
- Centered text, single column, max-width `900px`.
- No navigation bar at top (clean, distraction-free). Put nav links in a floating pill at bottom or use a hamburger.

#### Content
**Eyebrow (Mono label, uppercase, cyan, letter-spaced):**
FULL-STACK DEVELOPER · LARAVEL · VUE · PYTHON
plain

**Headline (Display font, white):**
I build what other developers
quote 3 months for.
In a week._
plain
*(The `_` is the blinking terminal cursor.)*

**Subheadline (Body, text-secondary, max-width 640px, centered):**
Laravel · Vue · Tailwind · Python. I specialize in high-leverage builds:
e-commerce platforms, automation bots, and internal tools that move business numbers.
No bloated agencies. No junior handoffs. Just senior-level code, shipped fast.
plain

**CTA Group (flex row, gap-4, centered, mt-10):**
- **Primary Button:** "Start a Project" ? `mailto:hello@yourdomain.dev` or `#contact`
  - Style: `bg-cyan-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]`
- **Secondary Button:** "View My GitHub" ? `https://github.com/YOURUSERNAME`
  - Style: `bg-transparent border border-white/10 text-white px-8 py-4 rounded-full hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300`

**Below CTAs (Mono, text-muted, mt-6):**
Currently open for freelance sprints & remote full-time roles.
plain

#### Visual Elements
- Ambient gradient orbs behind the text (z-index: -1).
- Optional: A floating "terminal window" card below the CTAs showing a fake command prompt:
git clone high-leverage-system
npm run ship-in-7-days
[SUCCESS] Build completed in 6 days, 4 hours.
plain
- Style: `bg-[#0a0a0f] border border-white/10 rounded-xl p-6 font-mono text-sm text-green-400 mt-12 max-w-lg mx-auto`.
- The `[SUCCESS]` part is green, the rest is slate-400.

---

### SECTION 2: THE GAP
**ID:** `#gap`
**Background:** `--bg-secondary`
**Padding:** `py-24` desktop, `py-16` mobile.

#### Layout
- Centered heading, then 3-column grid on desktop, single column on mobile.
- Gap: `space-2xl` (48px).

#### Content
**Section Label (Mono, cyan, uppercase, mb-4):**
THE PROBLEM
plain

**Heading (H2, white):**
Why most developer relationships fail
plain

**Sub-cards (3 cards, glassmorphism style):**

**Card 1:**
- **Icon:** `Zap` or lightning bolt (Lucide icon), cyan color, 32px.
- **Title (H3):** "Over-Engineering"
- **Body:** "They'll spend two weeks on a 'scalable architecture' for an MVP that needs to validate in 48 hours. Perfectionism disguised as professionalism."

**Card 2:**
- **Icon:** `Radio` or signal-off icon, violet color, 32px.
- **Title (H3):** "The Disappearing Act"
- **Body:** "You get a Slack message at 2 AM, then radio silence for three days while your deadline burns. Communication is not a feature—it's the foundation."

**Card 3:**
- **Icon:** `TrendingDown` or chart-down, red-400 color, 32px.
- **Title (H3):** "No Business Leverage"
- **Body:** "Code that doesn't directly impact revenue, retention, or efficiency is just expensive art. Every line I write has a business case."

#### Card Style
- `bg-[#111118]/60 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-8`
- Hover: `border-cyan-400/20 translateY(-4px) transition-all duration-300`

---

### SECTION 3: PROOF OF CAPABILITY
**ID:** `#work`
**Padding:** `py-24` desktop, `py-16` mobile.

#### Layout
- Section header centered.
- Three project blocks, stacked vertically with `space-3xl` (64px) between them.
- Each project block is a 2-column layout on desktop (text left, visual right, alternating), single column on mobile.

#### Content

**Section Label (Mono, cyan):**
SELECTED WORK
plain

**Heading (H2):**
Production-grade systems,
not tutorial projects.
plain

---

**PROJECT BLOCK 1: Multi-Tenant E-Commerce Platform**

**Left Column (Text):**
- **Project Tag (Mono, cyan, uppercase):** `LARAVEL · VUE · MULTI-TENANCY`
- **Title (H3):** "Multi-Tenant E-Commerce Platform"
- **Description (Body, text-secondary):**
  "A single Laravel codebase powering unlimited storefronts. Each tenant gets isolated databases, assets, and configurations—perfect for SaaS e-commerce or franchise models."
- **Architecture Points (list, mono, text-sm, space-y-2):**
  - `??? Laravel Tenancy for database isolation`
  - `??? Vue 3 + Tailwind admin dashboard`
  - `??? Python automation for inventory sync`
  - `??? Shared codebase, infinite scale`
- **Status Badge:** Pill-shaped, `bg-amber-400/10 text-amber-400 border border-amber-400/20 px-3 py-1 rounded-full text-xs font-mono`
  - Text: "CORE COMPLETE · MULTI-TENANCY 80% · POLISHING FOR RELEASE"
- **Link:** "View Architecture ?" (text link, cyan, hover underline)

**Right Column (Visual):**
- A browser-frame mockup (use a CSS-drawn browser window: `rounded-xl border border-white/10 overflow-hidden bg-[#0a0a0f]`).
- Inside: A screenshot of the admin dashboard (if unavailable, use a placeholder with a clean data table UI in Tailwind style).
- Overlay a small "code peek" card at bottom-right:
  ```php
  // Tenant resolution middleware
  $tenant = Tenant::findByDomain(
      request()->getHost()
  );
Style: bg-[#050507] border border-white/10 rounded-lg p-4 font-mono text-xs text-cyan-400 shadow-xl.
PROJECT BLOCK 2: Telegram Bot Ecosystem
Layout: Visual left, text right (alternated).
Left Column (Visual):
Phone mockup or chat bubble stack showing a Telegram conversation.
Use CSS to create chat bubbles: rounded-2xl rounded-bl-none bg-[#111118] border border-white/10 p-4 max-w-xs.
Messages:
Bot: "New order received: #4921"
Bot: "Inventory updated automatically."
User: "Show me today's revenue."
Bot: "$4,231 · 23 orders · 2 refunds"
Below the chat: A small Python code card:
Python
@dp.message_handler(commands=['revenue'])
async def daily_report(message: types.Message):
    data = await fetch_today()
    await message.reply(format_revenue(data))
Right Column (Text):
Project Tag: PYTHON · ASYNC · AUTOMATION
Title: "Telegram Bot Ecosystem"
Description: "Python-based automation bots that replace manual workflows. 24/7 operation, zero UI overhead, direct integration with Laravel backends via webhooks."
Architecture Points:
??? aiogram async architecture
??? Webhook integration with Laravel API
??? Automated order & inventory alerts
??? Custom command handlers for analytics
Status Badge: "OPERATIONAL · GITHUB POLISH IN PROGRESS"
Link: "See Bot Commands ?"
PROJECT BLOCK 3: The 7-Day Sprint Philosophy
Layout: Full-width card, centered content.
Visual: A large "timeline" or "sprint track" graphic showing 7 days.
Horizontal bar with 7 segments, each labeled Day 1–7.
Each segment has a small icon and one-word label:
Day 1: Scope (target icon)
Day 2–3: Backend (server icon)
Day 4–5: Frontend (layout icon)
Day 6: Integration (plug icon)
Day 7: Ship (rocket icon)
The track is a gradient from cyan to violet.
Text (centered above the track):
Project Tag: PROCESS · NOT A PROJECT
Title: "The 7-Day Sprint"
Description: "I don't have 20 half-finished side projects. I have 2 production-grade systems and the ability to build your third in 7 days. The secret is ruthless scope discipline and a stack I know like muscle memory."
Quote (italic, text-secondary, border-l-2 border-cyan-400 pl-4):
"This only works because I don't do meetings. I do decisions."
SECTION 4: STACK & ARSENAL
ID: #stack
Background: --bg-secondary
Padding: py-24 desktop, py-16 mobile.
Layout
Centered header.
A "skill bar" style display or a badge grid. Use the badge grid for visual impact.
Below: A code snippet block as a decorative element.
Content
Section Label (Mono, cyan):
plain
TECHNOLOGY
Heading (H2):
plain
Stack I know like muscle memory
Subheading (Body, text-secondary, max-w-2xl, centered):
plain
I don't experiment on your dime. Every tool here has shipped production code. 
The result? No surprises, no "I'll figure it out," just predictable delivery.
Tech Grid (2 rows, flex wrap, justify-center, gap-4, mt-12):
Each badge:
bg-[#111118] border border-white/[0.06] rounded-lg px-6 py-4 flex items-center gap-3 hover:border-cyan-400/30 transition-all duration-300
Left: Colored dot (8px circle) or mini icon.
Right: Tech name in font-mono text-sm.
Table
Tech	Dot Color	Proficiency
Laravel	#ff2d20 (Red)	????????????????????
Vue 3	#42b883 (Green)	????????????????????
Tailwind CSS	#38bdf8 (Sky)	????????????????????
Python	#ffd43b (Yellow)	??????????????
MySQL/PostgreSQL	#336791 (Blue)	????????????????
Redis	#dc382d (Red)	????????????
Docker	#2496ed (Blue)	????????????
Git/GitHub	#f5f5f5 (White)	????????????????????
(The proficiency bars are inline block elements, h-1.5, rounded-full, colored cyan, inside a bg-white/10 track.)
Below Grid — Code Philosophy Block:
A terminal-style card: bg-[#050507] border border-white/10 rounded-xl p-8 max-w-3xl mx-auto mt-16.
Header dots (red, yellow, green) like a Mac window.
Content (mono, text-sm):
php
<?php

namespace App\Developers;

class Me extends SeniorDeveloper
{
    /*
     * I write code that other developers can actually read.
     * Clean architecture. SOLID principles. 
     * Comments that explain the "why," not the "what."
     */
    
    public function ship(): Product
    {
        return $this->scope()
            ->architect()
            ->build()
            ->test()
            ->deploy();
    }
}
SECTION 5: WHO THIS IS FOR
ID: #for
Padding: py-24 desktop, py-16 mobile.
Layout
Centered header.
Two-column grid on desktop, single column on mobile.
Each column is a card with a distinct top border color.
Content
Section Label (Mono, cyan):
plain
ENGAGEMENT MODELS
Heading (H2):
plain
Two ways to work together
Left Card (Top border: cyan-400):
Icon: Briefcase (Lucide), cyan, 32px.
Title (H3): "Hire Me for a Project"
Body (text-secondary):
"You need an MVP that actually launches, not a prototype that collects dust. Your current dev has been 'almost done' for 3 months. You want a Laravel/Vue system built right the first time."
Bullet Points (checkmarks, text-primary):
7-day sprint delivery
Fixed scope, fixed timeline
Full source code + documentation
Post-launch support available
CTA: "Start a Project ?" (text link, cyan, links to #contact)
Right Card (Top border: violet-400):
Icon: Building2 (Lucide), violet, 32px.
Title (H3): "Hire Me Full-Time"
Body (text-secondary):
"You're a startup that needs a senior full-stack dev who owns features end-to-end. Your team needs someone who can prototype in days, not sprints. You value developers who understand business leverage."
Bullet Points (checkmarks, text-primary):
Senior Laravel + Vue expertise
End-to-end feature ownership
Remote, async-friendly
Available for immediate start
CTA: "Let's Talk ?" (text link, violet, links to #contact)
Card Style:
bg-[#111118]/40 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-10
Top border: border-t-2 with respective color.
SECTION 6: DUAL CTA / CONTACT
ID: #contact
Background: --bg-secondary
Padding: py-24 desktop, py-16 mobile.
Layout
Centered, max-width 800px.
Large heading, subtext, two prominent buttons side by side, then contact details below.
Content
Heading (H2):
plain
Ready to ship in 7 days?
Subheading (Body, text-secondary):
plain
Tell me what you're building. I'll tell you if I can ship it in a week. 
No pitch decks. No discovery calls that could've been emails. Just decisions.
CTA Buttons (flex row, gap-4, justify-center, mt-10):
Primary (Larger):
Text: "Start a Project Sprint"
Style: bg-cyan-400 text-black font-bold text-lg px-10 py-5 rounded-full hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300
Link: mailto:hello@yourdomain.dev?subject=Project%20Sprint%20Inquiry
Secondary:
Text: "Hire Me Full-Time"
Style: bg-transparent border-2 border-violet-400 text-violet-400 font-bold text-lg px-10 py-5 rounded-full hover:bg-violet-400 hover:text-black transition-all duration-300
Link: mailto:hello@yourdomain.dev?subject=Full-Time%20Role%20Inquiry
Contact Details (flex row, justify-center, gap-8, mt-16, flex-wrap):
Each item: Icon + Label + Value.
Table
Icon	Label	Value	Link
Mail	Email	hello@yourdomain.dev	mailto:
Github	GitHub	github.com/YOURUSERNAME	https://github.com/...
Linkedin	LinkedIn	linkedin.com/in/YOURUSERNAME	https://linkedin.com/in/...
MapPin	Location	Remote · UTC+3	#
Style: text-sm text-secondary hover:text-cyan-400 transition-colors. Icons are 18px, slate-400.
SECTION 7: FAQ
ID: #faq
Padding: py-24 desktop, py-16 mobile.
Layout
Centered header.
Accordion-style FAQ list, max-width 800px, centered.
Each item has a + icon that rotates to × on open.
Content
Section Label (Mono, cyan):
plain
FAQ
Heading (H2):
plain
Questions you might have
Q1: Why aren't your projects publicly hosted?
A: "I'm currently polishing the GitHub repos with proper READMEs, architecture docs, and screenshots. The code is production-grade—the presentation is catching up. If you're a serious client or recruiter, I'll send you private access today."
Q2: Can you really build anything in a week?
A: "No. I can build anything with clear scope and business leverage in a week. A Twitter clone? No. A custom e-commerce dashboard with Laravel + Vue? Yes. A Telegram bot that automates your workflow? Yes. The secret is ruthless scope discipline."
Q3: Do you work with agencies or only direct clients?
A: "Both. I white-label for agencies who need Laravel/Vue firepower, and I work directly with founders who need speed."
Q4: What's your rate or salary expectation?
A: "Project rates depend on scope—week sprints start at a competitive fixed price. For full-time remote roles, I'm aligned with senior Laravel developer rates in my region. Let's talk specifics."
Q5: What happens after the 7-day sprint?
A: "You get the working product, full source code, a README that doesn't suck, and 30 days of bug-fix support. Need more features? We plan Sprint 2."
Q6: Do you do meetings?
A: "One kickoff call to lock scope. One handoff call to demo the build. Everything else is async—Slack, Loom, or GitHub issues. I don't do daily standups that could've been a sentence."
Accordion Style
Closed: bg-[#111118]/40 border border-white/[0.06] rounded-xl px-6 py-5
Open: Same, but question text turns cyan, answer fades in with max-height transition.
Transition: duration-300 ease-in-out.
SECTION 8: FOOTER
ID: #footer
Background: #030305
Padding: py-12.
Layout
Flex row, justify-between, items-center.
Left: Name/logo + copyright.
Right: Social links.
Content
Left: © 2026 YOUR NAME. Built with Vue, Tailwind, and caffeine. (Mono, text-muted, text-xs)
Right: GitHub · LinkedIn · Email (text-sm, text-secondary, hover:text-cyan-400, gap-6)
4. ASSETS & PLACEHOLDERS
Required Images
E-commerce dashboard screenshot ? Place in Project 1 visual. If unavailable, build a clean Tailwind table UI as a CSS-only mockup.
Telegram chat screenshot ? Place in Project 2 visual. If unavailable, use CSS chat bubbles.
Profile photo ? Optional for hero or about section. Not required for this version.
Required Icons
Use Lucide Vue (lucide-vue-next) or Heroicons. Required icons:
Zap, Radio, TrendingDown, Briefcase, Building2, Mail, Github, Linkedin, MapPin, ChevronDown, Plus, X, Rocket, Server, Layout, Plug, Target, ExternalLink, Check.
Decorative Code Snippets
Use real code from the developer's projects. If unavailable, use the PHP and Python snippets provided in this brief—they are representative.
5. RESPONSIVE BREAKPOINTS
Table
Breakpoint	Width	Key Changes
Mobile	< 640px	Single column, reduced padding, hamburger nav, stacked CTAs, smaller typography
Tablet	640–1024px	2-column grids where applicable, medium padding
Desktop	> 1024px	Full layout as specified, max-width containers
Mobile-specific:
Hero headline: text-4xl (40px)
Section padding: py-16
Project blocks: Stack visual above text always
CTA buttons: Stack vertically, full-width
Tech grid: 2 columns instead of horizontal row
6. TECHNICAL IMPLEMENTATION NOTES
Recommended Stack
Framework: Vue 3 (Composition API) + Vite
Styling: Tailwind CSS v3
Icons: lucide-vue-next
Animations: Native CSS transitions + IntersectionObserver. No heavy animation libraries required.
Fonts: Google Fonts via <link> in index.html.
File Structure (if using Vue)
plain
src/
??? components/
?   ??? HeroSection.vue
?   ??? GapSection.vue
?   ??? WorkSection.vue
?   ??? StackSection.vue
?   ??? ForSection.vue
?   ??? ContactSection.vue
?   ??? FaqSection.vue
?   ??? FooterSection.vue
?   ??? GlassCard.vue
?   ??? AnimatedSection.vue (reusable scroll-reveal wrapper)
?   ??? TerminalWindow.vue
??? App.vue
??? main.js
??? index.css
Performance Requirements
First Contentful Paint < 1.5s
No render-blocking resources
Lazy load images below the fold
Use will-change: transform on animated elements sparingly
SEO Meta Tags
HTML
<title>YOUR NAME — Laravel & Vue Developer | 7-Day Sprints</title>
<meta name="description" content="Senior full-stack developer specializing in Laravel, Vue, and Python. I ship production-grade systems in 7 days. Available for freelance projects and remote roles.">
<meta property="og:title" content="YOUR NAME — The Leverage Developer">
<meta property="og:description" content="Laravel · Vue · Tailwind · Python. High-leverage builds shipped in 7 days.">
<meta property="og:type" content="website">
7. COPY PASTE: COMPLETE TEXT CONTENT
Here is every word that should appear on the page, in order, for easy copying:
Hero:
EYEBROW: FULL-STACK DEVELOPER · LARAVEL · VUE · PYTHON
HEADLINE: I build what other developers quote 3 months for. In a week._
SUB: Laravel · Vue · Tailwind · Python. I specialize in high-leverage builds: e-commerce platforms, automation bots, and internal tools that move business numbers. No bloated agencies. No junior handoffs. Just senior-level code, shipped fast.
CTA 1: Start a Project
CTA 2: View My GitHub
META: Currently open for freelance sprints & remote full-time roles.
Gap:
LABEL: THE PROBLEM
HEADING: Why most developer relationships fail
CARD 1 TITLE: Over-Engineering
CARD 1 BODY: They'll spend two weeks on a "scalable architecture" for an MVP that needs to validate in 48 hours. Perfectionism disguised as professionalism.
CARD 2 TITLE: The Disappearing Act
CARD 2 BODY: You get a Slack message at 2 AM, then radio silence for three days while your deadline burns. Communication is not a feature—it's the foundation.
CARD 3 TITLE: No Business Leverage
CARD 3 BODY: Code that doesn't directly impact revenue, retention, or efficiency is just expensive art. Every line I write has a business case.
Work:
LABEL: SELECTED WORK
HEADING: Production-grade systems, not tutorial projects.
PROJECT 1 TAG: LARAVEL · VUE · MULTI-TENANCY
PROJECT 1 TITLE: Multi-Tenant E-Commerce Platform
PROJECT 1 DESC: A single Laravel codebase powering unlimited storefronts. Each tenant gets isolated databases, assets, and configurations—perfect for SaaS e-commerce or franchise models.
PROJECT 1 ARCH: ??? Laravel Tenancy for database isolation / ??? Vue 3 + Tailwind admin dashboard / ??? Python automation for inventory sync / ??? Shared codebase, infinite scale
PROJECT 1 STATUS: CORE COMPLETE · MULTI-TENANCY 80% · POLISHING FOR RELEASE
PROJECT 1 LINK: View Architecture ?
PROJECT 2 TAG: PYTHON · ASYNC · AUTOMATION
PROJECT 2 TITLE: Telegram Bot Ecosystem
PROJECT 2 DESC: Python-based automation bots that replace manual workflows. 24/7 operation, zero UI overhead, direct integration with Laravel backends via webhooks.
PROJECT 2 ARCH: ??? aiogram async architecture / ??? Webhook integration with Laravel API / ??? Automated order & inventory alerts / ??? Custom command handlers for analytics
PROJECT 2 STATUS: OPERATIONAL · GITHUB POLISH IN PROGRESS
PROJECT 2 LINK: See Bot Commands ?
PROJECT 3 TAG: PROCESS · NOT A PROJECT
PROJECT 3 TITLE: The 7-Day Sprint
PROJECT 3 DESC: I don't have 20 half-finished side projects. I have 2 production-grade systems and the ability to build your third in 7 days. The secret is ruthless scope discipline and a stack I know like muscle memory.
PROJECT 3 QUOTE: "This only works because I don't do meetings. I do decisions."
Stack:
LABEL: TECHNOLOGY
HEADING: Stack I know like muscle memory
SUB: I don't experiment on your dime. Every tool here has shipped production code. The result? No surprises, no "I'll figure it out," just predictable delivery.
CODE BLOCK COMMENT: I write code that other developers can actually read. Clean architecture. SOLID principles. Comments that explain the "why," not the "what."
CODE METHOD: ship()
For:
LABEL: ENGAGEMENT MODELS
HEADING: Two ways to work together
LEFT TITLE: Hire Me for a Project
LEFT BODY: You need an MVP that actually launches, not a prototype that collects dust. Your current dev has been "almost done" for 3 months. You want a Laravel/Vue system built right the first time.
LEFT BULLETS: 7-day sprint delivery / Fixed scope, fixed timeline / Full source code + documentation / Post-launch support available
LEFT CTA: Start a Project ?
RIGHT TITLE: Hire Me Full-Time
RIGHT BODY: You're a startup that needs a senior full-stack dev who owns features end-to-end. Your team needs someone who can prototype in days, not sprints. You value developers who understand business leverage.
RIGHT BULLETS: Senior Laravel + Vue expertise / End-to-end feature ownership / Remote, async-friendly / Available for immediate start
RIGHT CTA: Let's Talk ?
Contact:
HEADING: Ready to ship in 7 days?
SUB: Tell me what you're building. I'll tell you if I can ship it in a week. No pitch decks. No discovery calls that could've been emails. Just decisions.
CTA 1: Start a Project Sprint
CTA 2: Hire Me Full-Time
EMAIL: hello@yourdomain.dev
GITHUB: github.com/YOURUSERNAME
LINKEDIN: linkedin.com/in/YOURUSERNAME
LOCATION: Remote · UTC+3
FAQ:
LABEL: FAQ
HEADING: Questions you might have
Q1: Why aren't your projects publicly hosted?
A1: I'm currently polishing the GitHub repos with proper READMEs, architecture docs, and screenshots. The code is production-grade—the presentation is catching up. If you're a serious client or recruiter, I'll send you private access today.
Q2: Can you really build anything in a week?
A2: No. I can build anything with clear scope and business leverage in a week. A Twitter clone? No. A custom e-commerce dashboard with Laravel + Vue? Yes. A Telegram bot that automates your workflow? Yes. The secret is ruthless scope discipline.
Q3: Do you work with agencies or only direct clients?
A3: Both. I white-label for agencies who need Laravel/Vue firepower, and I work directly with founders who need speed.
Q4: What's your rate or salary expectation?
A4: Project rates depend on scope—week sprints start at a competitive fixed price. For full-time remote roles, I'm aligned with senior Laravel developer rates in my region. Let's talk specifics.
Q5: What happens after the 7-day sprint?
A5: You get the working product, full source code, a README that doesn't suck, and 30 days of bug-fix support. Need more features? We plan Sprint 2.
Q6: Do you do meetings?
A6: One kickoff call to lock scope. One handoff call to demo the build. Everything else is async—Slack, Loom, or GitHub issues. I don't do daily standups that could've been a sentence.
Footer:
COPYRIGHT: © 2026 YOUR NAME. Built with Vue, Tailwind, and caffeine.
8. FINAL CHECKLIST FOR THE BUILDER
Before marking complete, verify:
[ ] All 8 sections render correctly on mobile, tablet, and desktop
[ ] Scroll-triggered fade-up animations work on all sections
[ ] Hero terminal cursor blinks continuously
[ ] Ambient gradient orbs are visible but subtle
[ ] All CTAs link to real URLs (update YOURUSERNAME, yourdomain.dev)
[ ] FAQ accordion opens/closes smoothly
[ ] No horizontal scroll on any device
[ ] Page loads in under 2 seconds
[ ] Meta tags are updated with real name and URLs
[ ] Code snippet blocks use syntax highlighting (PrismJS or Shiki)
9. POST-LAUNCH NEXT STEPS (For the Developer)
Replace all placeholder URLs with real GitHub/LinkedIn/email
Add real project screenshots as they become available
Deploy to Vercel, Netlify, or a custom domain
Add a simple analytics script (Plausible or Fathom, privacy-friendly)
Create a /hire-me PDF resume that matches this page's aesthetic
Send the live URL to 10 prospects/recruiters with a personalized note