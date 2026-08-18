import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

// UI/UX + Frontend Tech Stack
const techStack: TechItem[][] = [
  // Row 1
  [
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
    { name: "Adobe XD", icon: "https://img.icons8.com/color/96/adobe-xd--v1.png", url: "https://adobe.com/products/xd" },
    { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
    { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg", url: "https://adobe.com/products/illustrator" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", url: "https://typescriptlang.org" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", url: "https://react.dev" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", url: "https://nextjs.org" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", url: "https://tailwindcss.com" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", url: "https://getbootstrap.com" },
  ],

  // Row 2
  [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", url: "https://nodejs.org" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", url: "https://expressjs.com" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", url: "https://mongodb.com" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", url: "https://mysql.com" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", url: "https://git-scm.com" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", url: "https://github.com" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com" },
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", url: "https://vercel.com" },
    { name: "Canva", icon: "https://img.icons8.com/color/96/canva.png", url: "https://canva.com" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", url: "https://postman.com" },
  ],

  // Row 3
  [
    { name: "Wireframing", icon: "https://img.icons8.com/color/96/web-design.png", url: "https://figma.com" },
    { name: "Prototype", icon: "https://img.icons8.com/color/96/touchscreen-smartphone.png", url: "https://figma.com" },
    { name: "Design System", icon: "https://img.icons8.com/color/96/grid.png", url: "https://figma.com" },
    { name: "Responsive", icon: "https://img.icons8.com/color/96/responsive.png", url: "https://developer.mozilla.org" },
    { name: "User Flow", icon: "https://img.icons8.com/color/96/flow-chart.png", url: "https://figma.com" },
    { name: "UX Research", icon: "https://img.icons8.com/color/96/search-client.png", url: "https://figma.com" },
    { name: "Auto Layout", icon: "https://img.icons8.com/color/96/resize-horizontal.png", url: "https://figma.com" },
    { name: "Components", icon: "https://img.icons8.com/color/96/module.png", url: "https://figma.com" },
  ],

  // Row 4
  [
    { name: "UI Design", icon: "https://img.icons8.com/color/96/paint-palette.png", url: "https://figma.com" },
    { name: "Mobile Design", icon: "https://img.icons8.com/color/96/iphone.png", url: "https://figma.com" },
    { name: "Web Design", icon: "https://img.icons8.com/color/96/imac.png", url: "https://figma.com" },
    { name: "Branding", icon: "https://img.icons8.com/color/96/branding.png", url: "https://figma.com" },
    { name: "Interaction", icon: "https://img.icons8.com/color/96/hand-cursor.png", url: "https://figma.com" },
    { name: "Accessibility", icon: "https://img.icons8.com/color/96/accessibility2.png", url: "https://www.w3.org/WAI/" },
  ],

  // Row 5
  [
    { name: "Creativity", icon: "https://img.icons8.com/color/96/idea.png", url: "https://figma.com" },
    { name: "Problem Solving", icon: "https://img.icons8.com/color/96/puzzle.png", url: "https://developer.mozilla.org" },
    { name: "Visual Design", icon: "https://img.icons8.com/color/96/color-wheel-2.png", url: "https://figma.com" },
    { name: "Pixel Perfect", icon: "https://img.icons8.com/color/96/inspection.png", url: "https://figma.com" },
  ],

  // Row 6
  [
    { name: "Portfolio", icon: "https://img.icons8.com/color/96/portfolio.png", url: "#" },
    { name: "Freelance", icon: "https://img.icons8.com/color/96/briefcase.png", url: "#" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      <div className="techstack-video-container">
        <video autoPlay loop muted playsInline className="techstack-video">
          <source src="/video/video.webm" type="video/webm" />
        </video>
        <div className="techstack-overlay"></div>
      </div>

      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <a
                  key={techIndex}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;