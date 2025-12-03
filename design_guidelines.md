# Design Guidelines: Varun Kumar Portfolio

## Design Approach
**Reference-Based Approach** drawing from modern developer portfolios (Linear, Vercel, Apple) and the Dribbble reference provided. Clean, technical aesthetic with subtle creative touches reflecting dual identity as developer and artist.

## Typography System
- **Primary Font**: Inter or SF Pro Display (clean, professional)
- **Monospace**: JetBrains Mono or Source Code Pro (for tech stack badges, code references)
- **Hierarchy**:
  - Hero Name: text-6xl md:text-8xl font-bold
  - Section Headings: text-4xl md:text-5xl font-semibold
  - Project Titles: text-2xl md:text-3xl font-semibold
  - Body Text: text-base md:text-lg
  - Small Labels/Meta: text-sm

## Layout System
**Spacing**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Container max-width: max-w-6xl
- Content spacing: gap-8 md:gap-12 between major elements
- Card padding: p-6 md:p-8

## Page Structure & Components

### Hero Section (Full viewport)
- Large animated name with gradient text effect
- Rotating subtitle: "Full-Stack Developer" → "AI Enthusiast" → "Creative Problem Solver"
- Short intro paragraph (max-w-2xl, centered)
- CTA buttons: "View Projects" and "Get in Touch" with blur backdrop
- Background: Subtle geometric pattern or code-inspired grid overlay
- Smooth scroll indicator at bottom

### Projects Section
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- 5 featured projects (Youniq, UB Comics, Study Time Tracker, RPS Game, Renaissance 2k25)
- Each card includes:
  - Project screenshot/mockup image (16:9 aspect ratio)
  - Title and brief description
  - Tech stack badges (pill-shaped, monospace font)
  - GitHub and Live Demo links
- Hover effect: subtle lift and shadow enhancement

### Skills Section
- Multi-column grid: grid-cols-2 md:grid-cols-4 gap-6
- Categories as cards:
  - Programming Languages
  - Web Technologies
  - Databases & Tools
  - Areas of Interest
- Each category: icon, heading, bulleted list
- Clean iconography from Heroicons

### Experience Section
- Vertical timeline design
- 4 positions with company logo placeholder, role, dates, location
- Impact-focused bullet points (3-4 per role)
- Alternating alignment for visual interest on desktop
- Single column on mobile

### About Me Section
- Two-column layout: grid-cols-1 md:grid-cols-2
- Left: Profile photo placeholder (rounded, large)
- Right: Personal narrative combining technical expertise, creative pursuits, leadership roles
- Achievement highlights: SIH Winner badge, IEEE mention, comic artist recognition
- Warm, conversational tone

### Contact Section
- Two-column: grid-cols-1 md:grid-cols-2 gap-12
- Left column: Contact form (name, email, message) with primary CTA button
- Right column: Direct contact methods (email, GitHub, LinkedIn) with icons and response time estimate
- Clean form inputs with subtle borders

## Images

**Hero Background**: Abstract geometric pattern or subtle code-themed texture (low opacity overlay on gradient background)

**Project Cards**: Each project requires a mockup or screenshot:
1. Youniq: Dashboard UI mockup showing AI mentor interface
2. UB Comics: Comic panel artwork or app interface
3. Study Time Tracker: Analytics dashboard view
4. RPS Game: Game interface screenshot
5. Renaissance 2k25: Event website homepage

**About Me**: Professional headshot or creative portrait reflecting developer + artist identity (circular crop, 400x400px)

**Additional**: Small logos/icons for companies in Experience section (Schemind, Grephyt, SystimaNX, OreOps)

## Component Specifications

**Buttons**: 
- Primary: Solid fill with hover scale (1.02)
- Secondary: Outline style
- Over images: Backdrop blur (backdrop-blur-md) with semi-transparent background

**Cards**: 
- Subtle border (border border-gray-200)
- Rounded corners (rounded-xl)
- Hover: shadow-xl transition

**Badges** (Tech Stack):
- Pill shape (rounded-full px-3 py-1)
- Monospace font (font-mono text-xs)
- Minimal background

**Navigation**:
- Fixed header on scroll with blur backdrop
- Logo/Name left, nav links right
- Smooth scroll to sections
- Mobile: Hamburger menu

## Responsive Behavior
- Mobile-first approach
- Hero: Stack vertically, reduce font sizes
- Projects: Single column on mobile, 2-column on md+
- Skills: 2 columns mobile, 4 columns desktop
- Experience timeline: Vertical on all sizes, center-aligned on mobile
- Contact: Stack form and info vertically on mobile

## Animations
- Hero text: Fade in and slide up on load
- Scroll-triggered: Fade in elements as they enter viewport (use intersection observer)
- Hover states: Subtle scale and shadow transitions
- NO continuous animations or distracting movements

## Accessibility
- Semantic HTML throughout (header, nav, main, section, footer)
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast ratios
- Alt text for all images
- Keyboard navigation support