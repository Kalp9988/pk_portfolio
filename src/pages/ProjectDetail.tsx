import { Link, useParams } from "react-router-dom";
import { config } from "../config";
import "./ProjectDetail.css";

interface CaseStudy {
  role: string;
  duration: string;
  platform: string;
  team: string;
  type: string;
  tools: string[];
  overview: string;
  challenge: string;
  goals: string[];
  process: string[];
  solution: string;
  outcome: string;
  gallery: string[];
  liveUrl?: string;
}

const caseStudy: Record<number, CaseStudy> = {
  1: {
    role: "Lead UI/UX Designer",
    duration: "4 Weeks · 2026",
    platform: "Finance Mobile App",
    team: "Solo Project",
    type: "Concept Project",
    tools: ["Figma", "Prototype", "Design System", "UX Research"],

    overview:
      "FinWise is a premium finance management application designed to simplify budgeting, savings, expense tracking and financial planning through a modern and intuitive mobile experience.",

    challenge:
      "Create a beautiful fintech experience that transforms complex financial information into a clean, understandable and engaging interface.",

    goals: [
      "Simplify budgeting",
      "Create beautiful analytics",
      "Premium visual identity",
      "Improve accessibility"
    ],

    process: [
      "User Research",
      "Wireframing",
      "UI Design",
      "Interactive Prototype"
    ],

    solution:
      "Designed a complete finance design system including dashboards, savings goals, expense tracking and personalized financial insights.",

    outcome:
      "A polished fintech application prototype demonstrating modern mobile UX principles.",

    gallery: [
      "/images/finwise/screen1.png",
      "/images/finwise/screen2.png",
      "/images/finwise/screen3.png",
      "/images/finwise/screen4.png",
      "/images/finwise/screen5.png",
      "/images/finwise/screen6.png"
    ]
  },

  2: {
    role: "UI/UX Designer",
    duration: "3 Weeks · 2026",
    platform: "IoT Product Website",
    team: "MEMIGHTY Inventions",
    type: "Client Project",
    tools: ["Figma", "Responsive Design", "Landing Page"],

    overview:
      "mightyTIMER is an IoT-based street light automation website redesigned to improve product understanding, enterprise trust and lead generation.",

    challenge:
      "Present a highly technical automation product through a modern enterprise interface that clearly communicates its value.",

    goals: [
      "Increase customer trust",
      "Highlight product USP",
      "Responsive experience",
      "Generate inquiries"
    ],

    process: [
      "Website Audit",
      "Information Architecture",
      "High-Fidelity UI",
      "Responsive Layout"
    ],

    solution:
      "Created a modern enterprise landing page featuring product showcase, feature sections, blogs and inquiry flow.",

    outcome:
      "A professional enterprise website focused on clarity, branding and conversion.",

    gallery: [
      "/images/mightytimer/home.png",
      "/images/mightytimer/product.png",
      "/images/mightytimer/aboutus.png",
      "/images/mightytimer/usp.png",
      "/images/mightytimer/blog.png",
      "/images/mightytimer/contact.png"
    ]
  },

  3: {
    role: "UI/UX Designer",
    duration: "2 Weeks · 2026",
    platform: "Mobile Application",
    team: "Concept Redesign",
    type: "UX Redesign",
    tools: ["Figma", "Prototype", "Mobile UX"],

    overview:
      "A complete redesign of the Blinkit shopping experience focused on cleaner navigation, better usability and a premium grocery shopping interface.",

    challenge:
      "Improve the overall shopping journey while preserving familiar user behavior and reducing visual clutter.",

    goals: [
      "Simplify navigation",
      "Cleaner layouts",
      "Faster checkout",
      "Improve product discovery"
    ],

    process: [
      "UX Audit",
      "User Flow",
      "UI Design",
      "Prototype Testing"
    ],

    solution:
      "Introduced larger product cards, improved hierarchy and simplified checkout interactions.",

    outcome:
      "A premium grocery shopping experience with improved usability and visual consistency.",

    gallery: [
      "/images/blinkit/screen1.png",
      "/images/blinkit/screen2.png",
      "/images/blinkit/screen3.png",
      "/images/blinkit/screen4.png",
      "/images/blinkit/screen5.png",
      "/images/blinkit/screen6.png"
    ]
  },

    4: {
    role: "UI/UX Designer",
    duration: "3 Weeks · 2026",
    platform: "E-commerce Website",
    team: "Concept Project",
    type: "Website Design",
    tools: ["Figma", "Branding", "Responsive UI", "Prototype"],

    overview:
      "MuscleBlaze is a premium fitness supplement website concept focused on product hierarchy, conversion optimization and a modern shopping experience.",

    challenge:
      "Design a bold fitness brand identity while keeping the shopping experience clean, premium and conversion focused.",

    goals: [
      "Premium branding",
      "Better product hierarchy",
      "Responsive shopping UX",
      "Streamlined checkout"
    ],

    process: [
      "Brand Research",
      "Wireframing",
      "UI Design",
      "Checkout Experience"
    ],

    solution:
      "Designed homepage, category pages, product details, best-selling section, order summary and payment flow using a strong visual hierarchy.",

    outcome:
      "A complete premium e-commerce website concept ready for frontend development.",

    gallery: [
      "/images/muscleblaze/homepage.png",
      "/images/muscleblaze/proteins.png",
      "/images/muscleblaze/creatines.png",
      "/images/muscleblaze/bestselling.png",
      "/images/muscleblaze/ordersummary.png",
      "/images/muscleblaze/payment.png"
    ]
  },

  5: {
    role: "UI/UX Designer & Full Stack Developer",
    duration: "2 Weeks · 2026",
    platform: "Responsive Business Website",
    team: "Nandani Sweets",
    type: "Live Website Project",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],

    liveUrl: "https://nandani-seven.vercel.app/",

    overview:
      "Nandani Sweets is a luxury sweets shop website designed and developed to create a modern digital identity for a traditional Indian brand with elegant branding and responsive layouts.",

    challenge:
      "Preserve the warmth and heritage of the sweets brand while delivering a premium digital experience across desktop, tablet and mobile devices.",

    goals: [
      "Luxury brand identity",
      "Elegant product showcase",
      "Responsive experience",
      "Improve customer engagement"
    ],

    process: [
      "Brand Research",
      "Information Architecture",
      "UI Design",
      "Next.js Development"
    ],

    solution:
      "Designed and developed the complete responsive website using Next.js, Tailwind CSS and TypeScript with premium layouts and optimized performance.",

    outcome:
      "Nandani Sweets now has a beautiful online presence with a production-ready premium website.",

    gallery: []
  },

  6: {
    role: "UI/UX Designer & Full Stack Developer",
    duration: "5 Weeks · 2026",
    platform: "Premium Real Estate Website",
    team: "HPS Infratech",
    type: "Live Website Project",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],

    liveUrl: "https://hps-infratech.vercel.app/",

    overview:
      "HPS Infratech is a premium real estate website designed and developed to showcase farm properties and investment opportunities through modern UI/UX, responsive layouts and smooth animations.",

    challenge:
      "Build a luxury real estate platform that presents properties beautifully while generating customer inquiries and maintaining excellent performance.",

    goals: [
      "Premium brand identity",
      "Property showcase",
      "Responsive experience",
      "Lead generation"
    ],

    process: [
      "UX Planning",
      "Wireframing",
      "UI Design",
      "Development & Deployment"
    ],

    solution:
      "Built a complete production-ready real estate platform featuring property gallery, farm video, inquiry form, Google Maps and Instagram integration.",

    outcome:
      "HPS Infratech now has a premium digital presence with a modern responsive real estate website.",

    gallery: []
  }
};

const themeMap: Record<number, string> = {
  1: "theme-finwise",
  2: "theme-mighty",
  3: "theme-blinkit",
  4: "theme-muscle",
  5: "theme-nandani",
  6: "theme-hps"
};

const ProjectDetail = () => {
  const { id } = useParams();

  const project = config.projects.find((p) => p.id === Number(id));
  const details = caseStudy[Number(id)];

  if (!project || !details) {
    return (
      <div className="project-page">
        <div className="project-container">
          <Link to="/myworks" className="back-btn">
            ← Back to Projects
          </Link>
          <h1>Project Not Found</h1>
        </div>
      </div>
    );
  }

  const mockup =
    Number(id) === 6
      ? "/images/mockups/hps-laptop.png"
      : Number(id) === 5
      ? "/images/mockups/nandani-laptop.png"
      : project.image;

  const isLiveProject = details.type === "Live Website Project";

  const totalProjects = config.projects.length;
  const currentIndex = config.projects.findIndex((p) => p.id === Number(id));

  const prevProject =
    config.projects[(currentIndex - 1 + totalProjects) % totalProjects];

  const nextProject =
    config.projects[(currentIndex + 1) % totalProjects];

  return (
    <div className={`project-page ${themeMap[Number(id)]}`}>
      <div className="project-container">

        {/* Back Button */}

        <Link to="/myworks" className="back-btn">
          ← Back to Projects
        </Link>

        {/* ================= HERO ================= */}

        <section className="project-hero">

          <div className="hero-left">

            <span className="hero-badge">{project.category}</span>

            <h1>{project.title}</h1>

            <p>{details.overview}</p>

            <div className="hero-tags">

              <span>{details.role}</span>

              <span>{details.platform}</span>

              <span>{details.type}</span>

            </div>

            <div className="hero-buttons">

              {isLiveProject && (
                <a
                  href={details.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  Visit Live Website ↗
                </a>
              )}

              <a href="#case-study" className="secondary-btn">
                Explore Case Study
              </a>

            </div>

          </div>

          <div className="hero-right">

            <div className="browser-mockup">

              <img
                src={mockup}
                alt={project.title}
                className="mockup-image"
              />

            </div>

          </div>

        </section>

        {/* ================= OVERVIEW ================= */}

        <section id="case-study" className="project-section">

          <p className="section-label">Project Overview</p>

          <h2>Building a Premium Digital Presence</h2>

          <p className="section-text">
            {details.overview}
          </p>

          <div className="info-grid">

            <div className="info-card">
              <span>ROLE</span>
              <h4>{details.role}</h4>
            </div>

            <div className="info-card">
              <span>PLATFORM</span>
              <h4>{details.platform}</h4>
            </div>

            <div className="info-card">
              <span>TOOLS</span>
              <h4>{details.tools.slice(0, 2).join(" • ")}</h4>
            </div>

            <div className="info-card">
              <span>DURATION</span>
              <h4>{details.duration}</h4>
            </div>

          </div>

        </section>

        {/* ================= CHALLENGES ================= */}

        <section className="project-section">

          <p className="section-label">Project Challenges</p>

          <h2>Key Design Challenges</h2>

          <p className="section-text">
            {details.challenge}
          </p>

          <div className="challenge-grid">

            {details.goals.map((goal, index) => (
              <div className="challenge-card" key={index}>

                <h3>{`0${index + 1}`}</h3>

                <h4>{goal}</h4>

                <p>
                  Creating a modern, user-centered experience while maintaining
                  strong branding, responsive layouts and excellent usability.
                </p>

              </div>
            ))}

          </div>

        </section>

                {/* ================= DESIGN PROCESS ================= */}

        <section className="project-section">

          <p className="section-label">Design Process</p>

          <h2>From Research to Final Experience</h2>

          <p className="section-text">
            Every project follows a structured workflow that begins with user
            research and ends with a polished, production-ready digital experience.
          </p>

          <div className="process-grid">

            {details.process.map((step, index) => (

              <div className="process-card" key={index}>

                <div className="process-number">
                  {`0${index + 1}`}
                </div>

                <h4>{step}</h4>

              </div>

            ))}

          </div>

        </section>

        {/* ================= GALLERY ================= */}

        {details.gallery.length > 0 && (

          <section className="project-section">

            <p className="section-label">Final Design</p>

            <h2>Project Showcase</h2>

            <p className="section-text">
              The final high-fidelity interface screens demonstrate the complete
              user journey, visual hierarchy and consistency of the design system.
            </p>

            <div className="gallery-grid">

              {details.gallery.map((img, index) => (

                <div className="gallery-item" key={index}>

                  <img
                    src={img}
                    alt={`${project.title} ${index + 1}`}
                  />

                </div>

              ))}

            </div>

          </section>

        )}

        {/* ================= LIVE WEBSITE ================= */}

        {isLiveProject && (

          <section className="project-section">

            <p className="section-label">Live Project</p>

            <h2>Explore the Live Website</h2>

            <div className="live-card">

              <div className="live-content">

                <h3>{project.title}</h3>

                <p>
                  {project.title === "HPS Infratech"
                    ? "A premium real estate website featuring property showcase, inquiry form, Google Maps integration, farm video and responsive layouts."
                    : "A luxury sweets website featuring elegant branding, product showcase, festive collections and responsive customer experience."}
                </p>

                <span className="live-status">
                  ● Live Website Available
                </span>

                <p className="live-url">
                  {details.liveUrl}
                </p>

              </div>

              <a
                href={details.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Visit Live Website ↗
              </a>

            </div>

          </section>

        )}

                {/* ================= RESULTS ================= */}

        <section className="project-section">

          <p className="section-label">Project Outcome</p>

          <h2>Results & Impact</h2>

          <p className="section-text">
            {details.outcome}
          </p>

          <div className="results-grid">

            <div className="result-card">
              <h2>100%</h2>
              <p>Responsive Design</p>
            </div>

            <div className="result-card">
              <h2>Modern</h2>
              <p>Premium UI/UX</p>
            </div>

            <div className="result-card">
              <h2>Fast</h2>
              <p>Optimized Performance</p>
            </div>

            <div className="result-card">
              <h2>{isLiveProject ? "Live" : "Ready"}</h2>
              <p>
                {isLiveProject
                  ? "Deployed on Vercel"
                  : "Prototype Completed"}
              </p>
            </div>

          </div>

        </section>

        {/* ================= FINAL OUTCOME ================= */}

        <section className="project-section">

          <p className="section-label">Final Outcome</p>

          <h2>Building Meaningful Digital Products</h2>

          <p className="section-text">
            This project demonstrates my complete design workflow—from research
            and wireframing to high-fidelity interface design and responsive
            implementation. Every design decision focused on usability,
            accessibility and creating engaging digital experiences.
          </p>

        </section>

        {/* ================= PROJECT NAVIGATION ================= */}

        <section className="project-navigation">

          <Link
            to={`/project/${prevProject.id}`}
            className="nav-card prev-card"
          >
            <span>← Previous Project</span>
            <h3>{prevProject.title}</h3>
            <p>{prevProject.category}</p>
          </Link>

          <Link
            to="/myworks"
            className="nav-center"
          >
            All Projects
          </Link>

          <Link
            to={`/project/${nextProject.id}`}
            className="nav-card next-card"
          >
            <span>Next Project →</span>
            <h3>{nextProject.title}</h3>
            <p>{nextProject.category}</p>
          </Link>

        </section>

      </div>
    </div>
  );
};

export default ProjectDetail;