# Graph Report - company-frontend  (2026-11-07)

## Corpus Check
- 150 files · ~73,457 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 5 file(s) not represented in the graph (top: (none) 2, .ico 1, .css 1)

## Summary
- 897 nodes · 1630 edges · 79 communities (49 shown, 30 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.93)
- Token cost: 1,250 input · 850 output

## Community Hubs (Navigation)
- Combobox & Command Palette
- Clothing Rail Showcase Hero
- Dropdown Menu & Menubar
- Calendar & Message Scroller
- Background Cubes 3D Shaders
- Application Sidebar & Mobile Nav
- Shadcn Component Registry Config
- Static Legal & Contact Pages
- Tailwind CSS & Tooling Config
- Aspect Ratio & Scroll Area
- Home Page & Marquee Metrics
- TypeScript Compiler Options
- Core Framework Dependencies
- Carousel & Slider Components
- Context Menu Actions
- OTP & Form Inputs
- Magic Tweet Card Showcase
- Pricing Page & Tier FAQs
- Main Navbar & Why Us
- Data Charts & Analytics
- Drawer & Sheet Primitives
- About Page & Leadership Team
- Cloudflare & Figma SVG Icons
- Toast Notification Feedback
- Case Studies & AI Showcase
- Alert Dialog Confirmation Modals
- Collapsible & Trace Components
- Form Field & Label Elements
- Pressroom Hero & Stamp Mechanic
- Attachment & File Upload UI
- Badge & Pill Variants
- Item Card & Action Controls
- Slideout Sheet UI Panels
- Syntax Highlighting Hooks & Themes
- Code Block Display & Actions
- Button Group & Separators
- Navigation Menu & Bar Dropdowns
- Select Dropdown Form Inputs
- Design System & Architecture Specs
- Services Directory & Bento Grid
- Pagination & Page Browsing
- FAQ Accordion & Expandable Q&A
- Empty State Feedback Placeholders
- Root Layout & Font Configurations
- Animated Testimonials Carousel
- Chat Bubble Message Controls
- Tooltip & Sidebar Menu Buttons
- Callout Alert Banners
- Progress Bar & Meter Indicators
- Resizable Splitter Layout Panels
- Tabbed View Panels & Switchers
- ESLint Linting Configurations
- Marker & Callout Pins
- NPM Lifecycle & Build Scripts
- Next.js Architecture & Rules
- 3D Website Architect Guidelines
- File System Vector Asset
- Global Web Vector Asset
- Application Window Vector Asset

## God Nodes (most connected - your core abstractions)
1. `react` - 87 edges
2. `cn` - 64 edges
3. `Button()` - 47 edges
4. `@base-ui/react` - 40 edges
5. `@hugeicons/core-free-icons` - 26 edges
6. `@hugeicons/react` - 26 edges
7. `Footer()` - 23 edges
8. `Navbar()` - 21 edges
9. `class-variance-authority` - 19 edges
10. `ClothingRailHero()` - 16 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Icon Asset` --references--> `Next.js Project Overview & Getting Started`  [INFERRED]
  public/next.svg → README.md
- `Vercel Icon Asset` --references--> `Next.js Project Overview & Getting Started`  [INFERRED]
  public/vercel.svg → README.md
- `AboutPage()` --calls--> `Footer()`  [EXTRACTED]
  app/about/page.tsx → components/Footer.tsx
- `AboutPage()` --calls--> `Navbar()`  [EXTRACTED]
  app/about/page.tsx → components/Navbar.tsx
- `AboutPage()` --calls--> `Button()`  [EXTRACTED]
  app/about/page.tsx → components/ui/button.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Virtanex Design System & Section Pipeline** — skills_designe_skill_company_website_builder, skills_designe_references_brand_brief_virtanex_labs, skills_designe_references_design_system_design_tokens, skills_designe_references_landing_page_landing_recipes [INFERRED 0.85]
- **Next.js Core Architecture & Quality Standards** — agents_nextjs_agent_rules, readme_nextjs_project, skills_designe_references_quality_checklist_quality_gates [INFERRED 0.85]

## Communities (79 total, 30 thin omitted)

### Community 0 - "Combobox & Command Palette"
Cohesion: 0.06
Nodes (26): ComboboxChip(), ComboboxClear(), ComboboxInput(), ComboboxTrigger(), CommandDialog(), CommandInput(), Dialog(), DialogContent() (+18 more)

### Community 1 - "Clothing Rail Showcase Hero"
Cohesion: 0.11
Nodes (33): ClothingRailHeroSectionProps, RAIL_DEMO_ITEMS, Art, ART, artFor(), clamp(), ClothingRailHero(), nearest() (+25 more)

### Community 2 - "Dropdown Menu & Menubar"
Cohesion: 0.11
Nodes (26): DropdownMenu(), DropdownMenuContent(), DropdownMenuGroup(), DropdownMenuItem(), DropdownMenuLabel(), DropdownMenuPortal(), DropdownMenuRadioGroup(), DropdownMenuSeparator() (+18 more)

### Community 3 - "Calendar & Message Scroller"
Cohesion: 0.08
Nodes (12): buttonVariants, Calendar(), CalendarDayButton(), MessageScrollerButton(), QuestionnaireNext(), QuestionnairePrevious(), QuestionnaireSkip(), QuestionnaireSubmit() (+4 more)

### Community 4 - "Background Cubes 3D Shaders"
Cohesion: 0.09
Nodes (28): BackgroundCubesGridDemo(), EASE_OUT, Glyph, HeroContent(), HeroTone, Icon(), ICONS, InlinePill() (+20 more)

### Community 5 - "Application Sidebar & Mobile Nav"
Cohesion: 0.09
Nodes (9): SidebarContext, SidebarContextProps, SidebarMenuSkeleton(), SidebarProvider(), SidebarRail(), SidebarTrigger(), useSidebar(), Skeleton() (+1 more)

### Community 6 - "Shadcn Component Registry Config"
Cohesion: 0.08
Nodes (23): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+15 more)

### Community 7 - "Static Legal & Contact Pages"
Cohesion: 0.18
Nodes (17): ContactPage(), metadata, PrivacyPage(), ENGAGEMENT_MODELS, metadata, serviceCards, metadata, TermsPage() (+9 more)

### Community 8 - "Tailwind CSS & Tooling Config"
Cohesion: 0.12
Nodes (21): devDependencies, tailwindcss@^4, @tailwindcss/turbopack@^4, @types/node@^20, @types/react@^19, @types/react-dom@^19, @types/three@^0.187.0, typescript@^5 (+13 more)

### Community 9 - "Aspect Ratio & Scroll Area"
Cohesion: 0.12
Nodes (4): ScrollArea(), ScrollBar(), @base-ui/react, cn

### Community 10 - "Home Page & Marquee Metrics"
Cohesion: 0.17
Nodes (15): Home(), metrics, Metrics(), Process(), steps, TECH_ROW_1, TECH_ROW_2, TechCard() (+7 more)

### Community 11 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 12 - "Core Framework Dependencies"
Cohesion: 0.11
Nodes (18): dependencies, @base-ui/react@^1.9.0, cn@^0.5.2, date-fns@^4.4.0, input-otp@^1.5.0, lucide-react@^1.66.0, next@16.4.4, @radix-ui/react-icons@^1.3.2 (+10 more)

### Community 13 - "Carousel & Slider Components"
Cohesion: 0.16
Nodes (14): CarouselApi, CarouselContent(), CarouselContext, CarouselContextProps, CarouselItem(), CarouselNext(), CarouselOptions, CarouselPlugin (+6 more)

### Community 15 - "OTP & Form Inputs"
Cohesion: 0.14
Nodes (5): NativeSelectProps, @hugeicons/core-free-icons@^4.4.0, @hugeicons/react@^1.1.10, @hugeicons/core-free-icons, @hugeicons/react

### Community 16 - "Magic Tweet Card Showcase"
Cohesion: 0.20
Nodes (14): MagicTweet(), Skeleton(), truncate(), TweetBody(), TweetCard(), TweetHeader(), TweetMedia(), TweetSkeleton() (+6 more)

### Community 17 - "Pricing Page & Tier FAQs"
Cohesion: 0.19
Nodes (9): metadata, PRICING_FAQS, PricingPage(), TIERS, ServiceData, ServiceDetailPage(), SERVICES_CONTENT, FinalCTA() (+1 more)

### Community 18 - "Main Navbar & Why Us"
Cohesion: 0.20
Nodes (9): NAV_LINKS, reasons, AnimatedThemeToggler(), AnimatedThemeTogglerProps, getThemeTransitionClipPaths(), polygonCollapsed(), TransitionVariant, MarqueeProps (+1 more)

### Community 19 - "Data Charts & Analytics"
Cohesion: 0.18
Nodes (14): ChartConfig, ChartContainer(), ChartContext, ChartContextProps, ChartLegendContent(), ChartStyle(), ChartTooltipContent(), getPayloadConfigFromPayload() (+6 more)

### Community 20 - "Drawer & Sheet Primitives"
Cohesion: 0.17
Nodes (7): DrawerContent(), DrawerContext, DrawerContextProps, DrawerOverlay(), DrawerPortal(), DrawerSwipeHandle(), useDrawer()

### Community 21 - "About Page & Leadership Team"
Cohesion: 0.24
Nodes (12): AboutPage(), LEADERSHIP, metadata, VALUES, ScrollVelocityContainer(), ScrollVelocityContext, ScrollVelocityRow(), ScrollVelocityRowImpl() (+4 more)

### Community 23 - "Toast Notification Feedback"
Cohesion: 0.26
Nodes (13): toast, Toast(), ToastAction(), ToastClose(), ToastContent(), ToastDescription(), Toaster(), ToastIcon() (+5 more)

### Community 24 - "Case Studies & AI Showcase"
Cohesion: 0.19
Nodes (9): CASE_STUDIES, metadata, PortfolioPage(), DEFAULT_GEN_AI_ITEMS, GenAIShowcase(), GenAIShowcaseItem, GenAIShowcaseProps, nextConfig (+1 more)

### Community 26 - "Alert Dialog Confirmation Modals"
Cohesion: 0.18
Nodes (5): AlertDialogAction(), AlertDialogCancel(), AlertDialogContent(), AlertDialogOverlay(), AlertDialogPortal()

### Community 27 - "Collapsible & Trace Components"
Cohesion: 0.24
Nodes (7): Collapsible(), CollapsibleContent(), CollapsibleTrigger(), TraceCollapsible(), TraceCollapsibleContent(), TraceCollapsibleTrigger(), TraceIcon()

### Community 28 - "Form Field & Label Elements"
Cohesion: 0.19
Nodes (4): Field(), FieldLabel(), fieldVariants, Label()

### Community 29 - "Pressroom Hero & Stamp Mechanic"
Cohesion: 0.23
Nodes (10): easeOutCubic(), HEADLINE_LINES, Hero(), HeroProps, NAV_LINKS, STATS_DATA, Tally(), TallyProps (+2 more)

### Community 30 - "Attachment & File Upload UI"
Cohesion: 0.20
Nodes (5): Attachment(), AttachmentAction(), AttachmentMedia(), attachmentMediaVariants, attachmentVariants

### Community 31 - "Badge & Pill Variants"
Cohesion: 0.24
Nodes (8): Badge(), badgeVariants, ToggleGroupContext, ToggleGroupItem(), Toggle(), toggleVariants, class-variance-authority@^0.7.1, class-variance-authority

### Community 32 - "Item Card & Action Controls"
Cohesion: 0.20
Nodes (4): Item(), ItemMedia(), itemMediaVariants, itemVariants

### Community 33 - "Slideout Sheet UI Panels"
Cohesion: 0.26
Nodes (8): Sheet(), SheetContent(), SheetDescription(), SheetHeader(), SheetOverlay(), SheetPortal(), SheetTitle(), Sidebar()

### Community 34 - "Syntax Highlighting Hooks & Themes"
Cohesion: 0.26
Nodes (9): useHighlightedCode(), aliases, getHighlighter(), getLanguage(), highlightCode(), languages, loadHighlighter(), shiki@^4.6.0 (+1 more)

### Community 35 - "Code Block Display & Actions"
Cohesion: 0.24
Nodes (6): CodeBlock(), CodeBlockContent(), CodeBlockCopyButton(), CodeBlockLine(), codeBlockLineVariants, codeBlockVariants

### Community 36 - "Button Group & Separators"
Cohesion: 0.27
Nodes (7): ButtonGroup(), ButtonGroupSeparator(), buttonGroupVariants, FieldSeparator(), ItemSeparator(), Separator(), SidebarSeparator()

### Community 37 - "Navigation Menu & Bar Dropdowns"
Cohesion: 0.24
Nodes (4): NavigationMenu(), NavigationMenuPositioner(), NavigationMenuTrigger(), navigationMenuTriggerStyle

### Community 38 - "Select Dropdown Form Inputs"
Cohesion: 0.24
Nodes (3): SelectContent(), SelectScrollDownButton(), SelectScrollUpButton()

### Community 39 - "Design System & Architecture Specs"
Cohesion: 0.20
Nodes (10): Clothing Rail Hero / Product Rail Gallery Spec, Geist Font Optimization, Virtanex Core Services Offering, Virtanex Labs Brand Identity & Nordic Standards, Design System Tokens & Typography Scale, Landing Page Recipes & Section Order, Supporting Pages Routing & Architecture, Quality Checklist & Build Health Gates (+2 more)

### Community 40 - "Services Directory & Bento Grid"
Cohesion: 0.36
Nodes (7): ServicesPage(), services, Services(), BentoCard(), BentoCardProps, BentoGrid(), BentoGridProps

### Community 41 - "Pagination & Page Browsing"
Cohesion: 0.28
Nodes (4): PaginationLink(), PaginationLinkProps, PaginationNext(), PaginationPrevious()

### Community 43 - "FAQ Accordion & Expandable Q&A"
Cohesion: 0.54
Nodes (6): FAQ(), faqs, Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 47 - "Root Layout & Font Configurations"
Cohesion: 0.29
Nodes (4): geistMono, geistSans, inter, metadata

### Community 48 - "Animated Testimonials Carousel"
Cohesion: 0.38
Nodes (5): AnimatedTestimonialsDemo(), AnimatedTestimonials(), Testimonial, @tabler/icons-react@^3.50.0, @tabler/icons-react

### Community 50 - "Chat Bubble Message Controls"
Cohesion: 0.38
Nodes (4): Bubble(), BubbleReactions(), bubbleReactionsVariants, bubbleVariants

### Community 53 - "Tooltip & Sidebar Menu Buttons"
Cohesion: 0.38
Nodes (5): SidebarMenuButton(), sidebarMenuButtonVariants, Tooltip(), TooltipContent(), TooltipTrigger()

### Community 55 - "Progress Bar & Meter Indicators"
Cohesion: 0.47
Nodes (3): Progress(), ProgressIndicator(), ProgressTrack()

### Community 58 - "ESLint Linting Configurations"
Cohesion: 0.33
Nodes (5): eslintConfig, eslint@^9, eslint-config-next@16.4.4, eslint, eslint-config-next

### Community 60 - "NPM Lifecycle & Build Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 61 - "Next.js Architecture & Rules"
Cohesion: 0.50
Nodes (4): Next.js Agent Rules & Breaking Changes, Next.js Icon Asset, Vercel Icon Asset, Next.js Project Overview & Getting Started

### Community 63 - "3D Website Architect Guidelines"
Cohesion: 0.67
Nodes (3): 3D Website Architect, 13-Step Immersive Design Process, Three.js & React Three Fiber Stack

## Knowledge Gaps
- **13 isolated node(s):** `Next.js Agent Rules & Breaking Changes`, `Clothing Rail Hero / Product Rail Gallery Spec`, `Geist Font Optimization`, `Three.js & React Three Fiber Stack`, `13-Step Immersive Design Process` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 400 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **30 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Cloudflare & Figma SVG Icons` to `Combobox & Command Palette`, `Clothing Rail Showcase Hero`, `Dropdown Menu & Menubar`, `Calendar & Message Scroller`, `Background Cubes 3D Shaders`, `Application Sidebar & Mobile Nav`, `Static Legal & Contact Pages`, `Tailwind CSS & Tooling Config`, `Aspect Ratio & Scroll Area`, `Home Page & Marquee Metrics`, `Core Framework Dependencies`, `Carousel & Slider Components`, `Context Menu Actions`, `OTP & Form Inputs`, `Magic Tweet Card Showcase`, `Main Navbar & Why Us`, `Data Charts & Analytics`, `Drawer & Sheet Primitives`, `About Page & Leadership Team`, `Toast Notification Feedback`, `Case Studies & AI Showcase`, `Developer Platform SVG Icons`, `Alert Dialog Confirmation Modals`, `Collapsible & Trace Components`, `Form Field & Label Elements`, `Pressroom Hero & Stamp Mechanic`, `Attachment & File Upload UI`, `Badge & Pill Variants`, `Item Card & Action Controls`, `Slideout Sheet UI Panels`, `Syntax Highlighting Hooks & Themes`, `Code Block Display & Actions`, `Select Dropdown Form Inputs`, `Services Directory & Bento Grid`, `Pagination & Page Browsing`, `Data Table & Row Layouts`, `Breadcrumb Hierarchy Navigation`, `Card Layouts & Content Containers`, `Animated Testimonials Carousel`, `User Avatar & Status Badges`, `Chat Bubble Message Controls`, `Message Stream UI Controls`, `Popover Context Overlays`, `Callout Alert Banners`, `Marker & Callout Pins`, `AWS Cloud SVG Icon`, `Docker Container SVG Icon`, `FastAPI Backend SVG Icon`, `Flutter Mobile SVG Icon`, `Kubernetes Orchestration SVG Icon`, `LangChain AI SVG Icon`, `Python Language SVG Icon`, `React Framework SVG Icon`, `Redis Cache SVG Icon`, `Supabase Database SVG Icon`, `TypeScript Language SVG Icon`, `Vercel Deployment SVG Icon`?**
  _High betweenness centrality (0.410) - this node is a cross-community bridge._
- **What connects `Next.js Agent Rules & Breaking Changes`, `Clothing Rail Hero / Product Rail Gallery Spec`, `Geist Font Optimization` to the rest of the system?**
  _13 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Combobox & Command Palette` be split into smaller, more focused modules?**
  _Cohesion score 0.06009783368273934 - nodes in this community are weakly interconnected._
- **Why does `cn` connect `Aspect Ratio & Scroll Area` to `Combobox & Command Palette`, `Dropdown Menu & Menubar`, `Calendar & Message Scroller`, `Application Sidebar & Mobile Nav`, `Tailwind CSS & Tooling Config`, `Core Framework Dependencies`, `Carousel & Slider Components`, `Context Menu Actions`, `OTP & Form Inputs`, `Pricing Page & Tier FAQs`, `Main Navbar & Why Us`, `Data Charts & Analytics`, `Drawer & Sheet Primitives`, `Toast Notification Feedback`, `Alert Dialog Confirmation Modals`, `Collapsible & Trace Components`, `Form Field & Label Elements`, `Attachment & File Upload UI`, `Badge & Pill Variants`, `Item Card & Action Controls`, `Slideout Sheet UI Panels`, `Code Block Display & Actions`, `Button Group & Separators`, `Navigation Menu & Bar Dropdowns`, `Select Dropdown Form Inputs`, `Pagination & Page Browsing`, `Data Table & Row Layouts`, `FAQ Accordion & Expandable Q&A`, `Breadcrumb Hierarchy Navigation`, `Card Layouts & Content Containers`, `Empty State Feedback Placeholders`, `User Avatar & Status Badges`, `Chat Bubble Message Controls`, `Message Stream UI Controls`, `Popover Context Overlays`, `Tooltip & Sidebar Menu Buttons`, `Callout Alert Banners`, `Progress Bar & Meter Indicators`, `Resizable Splitter Layout Panels`, `Tabbed View Panels & Switchers`, `Marker & Callout Pins`, `Keyboard Shortcut Badges`?**
  _High betweenness centrality (0.192) - this node is a cross-community bridge._
- **Should `Clothing Rail Showcase Hero` be split into smaller, more focused modules?**
  _Cohesion score 0.11428571428571428 - nodes in this community are weakly interconnected._
- **Why does `@base-ui/react` connect `Aspect Ratio & Scroll Area` to `Combobox & Command Palette`, `Dropdown Menu & Menubar`, `Application Sidebar & Mobile Nav`, `Tailwind CSS & Tooling Config`, `Core Framework Dependencies`, `Context Menu Actions`, `Pricing Page & Tier FAQs`, `Drawer & Sheet Primitives`, `Toast Notification Feedback`, `Alert Dialog Confirmation Modals`, `Collapsible & Trace Components`, `Attachment & File Upload UI`, `Badge & Pill Variants`, `Item Card & Action Controls`, `Slideout Sheet UI Panels`, `Button Group & Separators`, `Navigation Menu & Bar Dropdowns`, `Select Dropdown Form Inputs`, `FAQ Accordion & Expandable Q&A`, `Breadcrumb Hierarchy Navigation`, `User Avatar & Status Badges`, `Chat Bubble Message Controls`, `Popover Context Overlays`, `Tooltip & Sidebar Menu Buttons`, `Progress Bar & Meter Indicators`, `Tabbed View Panels & Switchers`, `Marker & Callout Pins`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Should `Dropdown Menu & Menubar` be split into smaller, more focused modules?**
  _Cohesion score 0.11174242424242424 - nodes in this community are weakly interconnected._