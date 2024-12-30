import { FaGithub } from "react-icons/fa"; // Import GitHub icon

export default function ProjectsSection() {
  // Community-driven projects
  const communityProjects = [
    {
      name: "qibo",
      description: "A full-stack framework for quantum computing.",
      github: "https://github.com/qiboteam/qibo",
      backgroundImage: "/qibo_bg.svg",
    },
    {
      name: "qiboml",
      description: "A hybrid classical-quantum machine learning framework.",
      github: "https://github.com/qiboteam/qiboml",
      backgroundImage: "/qiboml_bg.svg",
    },
    {
      name: "qiboedu",
      description: "Quantum computing educational activities using Qibo.",
      github: "https://github.com/qiboteam/qiboedu",
      backgroundImage: "/qiboedu_bg.svg",
    },
    {
      name: "qibolab",
      description: "Quantum hardware module and drivers for Qibo.",
      github: "https://github.com/qiboteam/qibolab",
      backgroundImage: "/qibolab_bg.svg",
    },
    {
      name: "qibocal",
      description:
        "Quantum calibration, characterization, and validation module for Qibo.",
      github: "https://github.com/qiboteam/qibocal",
      backgroundImage: "/qibocal_bg.svg",
    },
  ];

  // Project-specific tools
  const projectTools = [
    {
      name: "QiNNtegrate",
      description:
        "Multi-variable numerical integration via Quantum Machine Learning.",
      github: "https://github.com/qiboteam/QiNNtegrate",
    },
    {
      name: "adiabatic-fit",
      description:
        "Probability density estimation via hybrid gate & analog-based quantum computing.",
      github: "https://github.com/qiboteam/adiabatic-fit",
    },
    {
      name: "rtqem",
      description:
        "Real-time quantum error mitigation for variational optimization on quantum hardware.",
      github: "https://github.com/qiboteam/rtqem",
    },
    {
      name: "boostvqe",
      description:
        "Boosting ground-states preparation with Double-Bracket Quantum Algorithms.",
      github: "https://github.com/qiboteam/boostvqe",
    },
    {
      name: "kifit",
      description:
        "A simulation tool for New Physics search with (Non-)Linear King Plots.",
      github: "https://github.com/MatteoRobbiati/kifit",
    },
    {
      name: "conditional-pokeGAN",
      description:
        "Generating conditioned Pokémon images via Generative Adversarial Network.",
      github: "https://github.com/MatteoRobbiati/Conditional-pokeGAN",
    },
  ];

  // Function to render project cards
  const renderProjectCards = (projects) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 border border-gray-800 dark:border-gray-600 hover:border-[#4e7ccc] dark:hover:border-[#4e7ccc]"
            style={{
              backgroundImage: `url(${project.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-15"></div>

            {/* Card Content */}
            <div className="relative flex flex-col justify-between h-full p-4 text-white">
              {/* Title */}
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[1.225rem] opacity-85 text-black dark:text-white">
                {project.description}
              </p>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 text-[#4e7ccc] hover:underline"
              >
                <FaGithub className="mr-1" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white bg-opacity-85 dark:bg-gray-700 dark:bg-opacity-85 rounded-lg shadow-lg p-6 mb-8">

      {/* Community-Driven Packages */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold mb-4 text-black dark:text-white">Community-Driven Packages</h4>
        {renderProjectCards(communityProjects)}
      </div>

      {/* Project-Specific Tools */}
      <div>
        <h4 className="text-2xl font-semibold mb-4 text-black dark:text-white">Project-Specific Tools</h4>
        {renderProjectCards(projectTools)}
      </div>
    </div>
  );
}
