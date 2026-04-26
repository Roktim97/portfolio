@AGENTS.md
# Roktim Gogoi — Portfolio Website

## 🗂️ Project Context
- Next.js 16 App Router project
- Language: TypeScript
- Styling: Tailwind CSS
- Components: shadcn/ui (already initialized)
- Package manager: npm
- Deployment target: Vercel

---

## ✅ Current Status
- [x] Project initialized
- [x] Design created
- [x] `globals.css` with design tokens and CSS variables
- [x] `Navbar` component
- [x] `Footer` component
- [x] Hero page (`/`)
- [ ] About page (`/about`)
- [ ] Projects page (`/projects`)
- [ ] Experience page (`/experience`)
- [ ] Contact page (`/contact`)
- [ ] Contact form wired with Resend
- [ ] Resume PDF added to `/public/resume.pdf`
- [ ] Deployed on Vercel

> Update checkboxes as each piece is completed.

---

## 👤 About Me
- **Name:** Roktim Gogoi
- **Role:** Full Stack Software Engineer — Backend Focus
- **Email:** gogoiroktim97@gmail.com
- **Phone:** +91 9313846562
- **LinkedIn:** (add your LinkedIn URL)
- **GitHub:** (add your GitHub URL)

---

## 🎨 Design Direction
- **Theme:** Dark (black/off-black background)
- **Style:** Modern Minimalist
- **Accent Color:** Electric blue or cold white (single accent only)
- **Animations:** Subtle, staggered fade-ins on load, scroll-triggered reveals
- **Typography:** Large, bold typographic hierarchy — let type do the work
- **No progress bars, no icons** — typography and spacing carry the design

---

## 🗺️ Project Structure

```
/app
  /page.tsx                → Home / Hero
  /about/page.tsx          → About
  /projects/page.tsx       → Projects
  /experience/page.tsx     → Experience
  /contact/page.tsx        → Contact
  /components/
    Navbar.tsx
    Footer.tsx
  /styles/
    globals.css            → CSS variables, fonts, theme
```

---

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Components | shadcn/ui (utility only) |
| Icons | Lucide React |
| Fonts | next/font (Google Fonts) |
| Contact Form | Resend |
| Deployment | Vercel |

---

## 📦 Libraries

### Install Command
```bash
npm install framer-motion lucide-react clsx tailwind-merge react-intersection-observer next-themes resend
npx shadcn@latest init
```

### Library Breakdown

| Library | Purpose |
|---|---|
| `framer-motion` | Page transitions, scroll animations, hover effects |
| `lucide-react` | Clean minimal icon set |
| `clsx` | Conditional classNames |
| `tailwind-merge` | Merge Tailwind classes safely |
| `react-intersection-observer` | Trigger animations on scroll |
| `next-themes` | Light/dark theme toggle |
| `resend` | Contact form email API |
| `shadcn/ui` | Unstyled accessible base components |

### ❌ Libraries to Avoid
- **Three.js / R3F** — overkill, slows load time
- **GSAP** — Framer Motion covers everything needed
- **Styled Components / Emotion** — redundant with Tailwind
- **Chakra UI / MUI / Ant Design** — too opinionated, clashes with custom design

---

## 🔤 Font (via next/font)

```tsx
import { Geist, Geist_Mono } from 'next/font/google'
```

Preferred pairing: **Geist + Geist Mono** — clean, modern, developer aesthetic.

---

## 🎭 Animation Guidelines (Framer Motion)

- **Page load:** Staggered fade-in (name → role → tagline → CTAs)
- **Scroll:** Use `react-intersection-observer` to trigger reveals on viewport entry
- **Cards:** Lift + subtle border/glow reveal on hover
- **Nav links:** Subtle underline slide on hover
- **Rule:** Keep animations restrained — one well-orchestrated sequence beats scattered micro-interactions

---

## 📄 Pages & Content

> **Note:** Use this section as reference only. Build one page at a time.
> When prompting, say: "Build the [PAGE] page. Refer to its section in CLAUDE.md for content."

---

### 1. Home / Hero
- **Tagline:** "I architect the logic behind great products."
- **Supporting line:** "Specializing in scalable backend systems, cloud infrastructure, and full-stack web applications built with Node.js, TypeScript, and AWS."
- **CTAs:** "View My Work" (filled) + "Download Resume" (outlined)
- **Skill pills (two rows):**
  - Row 1 — Backend (bright/prominent): `Node.js` `TypeScript` `AWS` `PostgreSQL` `Docker`
  - Row 2 — Frontend (dimmer/muted): `React.js` `Next.js` `Tailwind CSS`

---

### 2. About
- Split layout: photo placeholder left, bio + skills right
- Skills as grouped pill tags (no progress bars):
  - **Frontend:** JavaScript, TypeScript, React.js, Next.js, HTML, CSS, Tailwind CSS
  - **Backend:** Node.js, Express.js, Socket.io, Redux, Prisma, Sequelize, Drizzle
  - **Databases:** MongoDB, PostgreSQL, SQL, NoSQL
  - **Cloud (AWS):** EC2, ECR, S3, CloudFront, RDS, VPC, CloudWatch, EventBridge, Amplify, Cognito
  - **Tools:** Docker, Git, Postman, Casbin

---

### 3. Projects

| Project | Tech | Key Features |
|---|---|---|
| **Tooth Truth** — Dental Telehealth | Node.js, TypeScript, Next.js, AWS | Role-based access (Patient/Dentist/Admin), AWS Cognito + JWT, S3 pre-signed URLs, EventBridge + Lambda automation, Authorize.Net payments, HubSpot CRM |
| **Magrabi** — Luxury Eyewear E-commerce | Next.js, TypeScript, Sanity, Saleor, Algolia, Docker | Pixel-perfect UI, optimized API calls via server actions, smooth checkout journey |
| **3dimli.com** — 3D Model Marketplace | Next.js, TypeScript, Node.js, PayPal, Lemon Squeezy | Full PayPal payment flow, Lemon Squeezy billing server, RESTful APIs for asset management |

- Cards: full-width, large title, description, tech stack pills at bottom
- Hover: card lifts with subtle glow or border reveal
- Links: "View Project" + "GitHub" per card

---

### 4. Experience

| Role | Company | Duration |
|---|---|---|
| Software Engineer | TechVariable | June 2025 – Present |
| Software Engineer | CG Viz Studio | January 2025 – May 2025 |
| Full Stack Developer | Impact Weaver | June 2023 – January 2025 |

**TechVariable (June 2025 – Present)**
- HIPAA-compliant healthcare apps with React, Node.js, TypeScript
- RESTful API integration for healthcare data exchange
- Agile team collaboration on digital health platforms

**CG Viz Studio (Jan 2025 – May 2025)**
- Client portal with Next.js + TypeScript for 3D asset management
- Backend services for model data, user auth, and project workflows
- Integrated web-based 3D visualization tools

**Impact Weaver (June 2023 – Jan 2025)**
- Reusable React.js components for an NGO-enabling platform
- Backend: Node.js, Express.js, MongoDB, PostgreSQL
- RESTful API development for data flow and functionality

- Layout: vertical timeline, thin left line, dot markers
- Entrance: scroll-triggered fade-in per item

---

### 5. Contact
- **Heading:** "Let's Build Something."
- Form fields: Name, Email, Message, Send button
- Links below form: Email, LinkedIn, GitHub
- Backend: Resend API via `/app/api/contact/route.ts`

---

## 💡 Prompts to Use During Development

**Start a new page:**
```
Using the design system and guidelines in CLAUDE.md, build the [PAGE NAME] page.
Refer to its section under Pages & Content for copy and structure.
Make it a TypeScript React component using Tailwind CSS and Framer Motion.
Ensure it is fully responsive for mobile and desktop.
```

**Set up design tokens first:**
```
Using the design direction in CLAUDE.md, create globals.css with:
- CSS custom properties for colors, fonts, and spacing
- Base dark theme variables
- Base typography styles
This will be the single source of truth for the entire portfolio.
```

**Add scroll animations:**
```
Add Framer Motion scroll-triggered animations to this component using
react-intersection-observer. Each section should fade up into view as
it enters the viewport. Keep animations subtle and minimal.
```

**Fix consistency across pages:**
```
Review this component against the design direction in CLAUDE.md.
Ensure colors, font sizes, spacing, and animation style are consistent
with the rest of the portfolio.
```