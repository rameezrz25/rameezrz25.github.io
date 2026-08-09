import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

export const profile = {
  name: "Rameez Raza",
  title: "Software Development Engineer",
  email: "rameezrz25@gmail.com",
  phone: "(+91) 9748036601",
  location: "Bangalore, Karnataka",
  summary: "Software Development Engineer at Intel with expertise in system software optimization, thermal management, and AI-powered tools. Proven track record in enhancing platform efficiency and automating workflows.",
  social: [
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/rameezrz25", label: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/rameezrz25", label: "GitHub" },
    { icon: <FaEnvelope />, url: "mailto:rameezrz25@gmail.com", label: "Email" }
  ]
};

export const education = [
  {
    school: "National Institute of Technology Karnataka, Surathkal",
    degree: "Master of Technology in Information Technology",
    year: "August 2018 – July 2020",
    details: "Courses: NLP, Machine Learning, Cryptography, Distributed Computing Systems, Computer Vision, HPC.",
    location: "Karnataka"
  },
  {
    school: "The University of Burdwan",
    degree: "Bachelor of Engineering (Hons.) in Computer Science and Engineering",
    year: "August 2014 – July 2018",
    details: "Courses: Operating Systems, Computer Networks, Compiler Design, DBMS, Algorithms, Computer Architecture.",
    location: "West Bengal"
  }
];

export const experience = [
  {
    company: "Intel Corporation",
    role: "Software Development Engineer",
    duration: "August 2020 – Present",
    location: "Bangalore, Karnataka",
    description: [
      "Architected an AI-assisted, event-driven hardware simulation SDK for OEMs and customers, emulating platform telemetry (Wi-Fi, power, thermal, SoC) with fault/noise injection to enable pre-silicon development, automated validation, and edge-case coverage without physical hardware.",
      "Developed and optimized system software for Intel platforms, improving thermal management, system performance, and power efficiency across multiple OEM platform configurations.",
      "Automated long-duration test workflows for Intel DTT using benchmarks and games (Metro Exodus, Cyberpunk 2077, Shadow of the Tomb Raider), cutting manual test effort by 80%.",
      "Built an AI-powered predictive tool leveraging machine learning algorithms to estimate system parameters with 75% accuracy, enabling intelligent workload and thermal optimization.",
      "Built an RFIM optimization algorithm using RSSI, SNR, and priority-based scoring to select optimal RF channels, improving wireless validation reliability across Intel client platforms.",
      "Automated DDR RF Interference Mitigation (RFIM) validation workflows using AI-assisted development, optimizing RF test execution, improving hardware utilization, and reducing validation infrastructure costs.",
      "Stress-tested CPU–GPU power and thermal balancing across sustained and gaming workloads (Cinebench, Geekbench, 3DMark, FurMark), root-causing regressions and improving platform efficiency.",
      "Improved Intel SoC performance and stability on Google ChromeOS through configuration tuning and cross-OS validation, reducing power consumption and improving benchmark scores.",
      "Created an OS-independent thermal monitoring and logging tool with advanced visualization to track system telemetry on Linux and Windows platforms, accelerating debug and root-cause analysis.",
      "Built APIs bridging low-level hardware controls with user-facing software services, improving accessibility, usability, and testability of system features.",
      "Built installers with WiX Toolset for reliable driver and application deployment across production systems.",
      "Contributed to open-source projects, resolving security vulnerabilities to improve system stability."
    ]
  },
  {
    company: "Intel Corporation",
    role: "Software Development Intern",
    duration: "May 2019 – May 2020",
    location: "Bangalore, Karnataka",
    description: [
      "Installed and configured the machine learning models on servers to enhance log management and analysis.",
      "Developed modules to integrate queue/build times, and monitor Jenkins utilization through API integration.",
      "Built a log clustering framework using machine learning, integrated into the production codebase, and designed a dashboard for continuous monitoring.",
      "Created an automated unit testing service, reducing issue detection and resolution time by 90%.",
      "Developed a model to evaluate security scan results, increasing testing efficiency and improving process reliability."
    ]
  }
];

export const skills = {
  Languages: ["C", "Embedded C", "C++", "Python"],
  Technologies: ["Git", "Docker", "Jenkins", "Jira", "WiX Toolset", "VS Code", "Visual Studio", "Jupyter Notebook"],
  "GenAI & AI Development": ["GitHub Copilot", "ChatGPT", "Claude", "Cursor", "Ollama", "LangChain", "OpenAI API"],
  Platforms: ["Ubuntu/Linux", "Windows", "ChromeOS"]
};

export const achievements = [
  {
    title: "Awards",
    items: [
      "Received multiple awards for outstanding contributions and consistent project success.",
      "Won Intel’s CTF competition, demonstrating exceptional technical and troubleshooting abilities."
    ]
  },
  {
    title: "Competitive Examinations and Contests",
    items: [
      "Secured AIR 75 in Joint Entrance Screening Test (JEST), 2018.",
      "Achieved 96 percentile in GATE Computer Science & Engineering (CS) in 2018, 2019, and 2020.",
      "Secured 90th place in Indian Engineering Olympiad (IEO), 2017.",
      "Achieved 90 percentile in NPTEL NPAT, 2016."
    ]
  }
];

export const projects = [
  {
    title: "financial-compass",
    description: "Privacy-first, local-first CLI that simulates \"if my income stops tomorrow\": runway, salary thresholds, and a calm month-by-month action plan. No bank credentials, no cloud APIs.",
    tags: ["Python", "CLI", "Personal Finance"],
    links: {
      github: "https://github.com/rameezrz25/financial-compass",
      pypi: "https://pypi.org/project/financial-compass/"
    }
  },
  {
    title: "rsu-to-swp",
    description: "CLI that turns RSU/ESPP broker exports into a real after-tax holdings picture, then simulates a systematic withdrawal plan (SWP).",
    tags: ["Python", "CLI", "RSU"],
    links: {
      github: "https://github.com/rameezrz25/rsu-to-swp",
      pypi: "https://pypi.org/project/rsu-to-swp/"
    }
  },
  {
    title: "mcp-sysinfo",
    description: "AI-powered hardware & system benchmarking tool for your local machine, built on the Model Context Protocol (MCP) with the Gemini API.",
    tags: ["Python", "MCP", "Gemini API"],
    links: {
      github: "https://github.com/rameezrz25/mcp-sysinfo"
    }
  },
  {
    title: "SysBenchInfo",
    description: "Python package providing detailed CPU/GPU/memory/OS system info, plus basic CPU and GPU benchmarks.",
    tags: ["Python", "System Info", "Benchmarking"],
    links: {
      github: "https://github.com/rameezrz25/SysBenchInfo",
      pypi: "https://pypi.org/project/sysbenchinfo/"
    }
  },
  {
    title: "sysbench",
    description: "Cross-platform system benchmarking web app (CPU/Memory/Disk/GPU) with a FastAPI backend and a React + Tailwind CSS frontend.",
    tags: ["Python", "FastAPI", "React"],
    links: {
      github: "https://github.com/rameezrz25/sysbench"
    }
  }
];
