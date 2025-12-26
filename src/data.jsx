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
      "Developed and optimized system software Intel Dynamic Tuning Technology for Intel platforms, enhancing thermal management, system performance, and power efficiency.",
      "Improved CPU–GPU power and thermal balancing across diverse workloads (Cinebench, Geekbench, 3DMark, FurMark) and gaming benchmarks, boosting platform efficiency.",
      "Enhanced Intel SoC performance on Google ChromeOS by tuning configurations, reducing power consumption and improving benchmark scores.",
      "Automated system optimization workflows by integrating Intel DTT using benchmarking tools and Games (Metro Exodus, Cyberpunk 2077, Shadow of the Tomb Raider), reducing manual effort by 80%.",
      "Created an OS-independent thermal monitoring tool with advanced visualization to track system thermals on Linux and Windows platforms.",
      "Built an AI-powered predictive tool leveraging machine learning algorithms to estimate system parameters with 75% accuracy, enabling intelligent workload and thermal optimization.",
      "Developed a proof-of-concept (PoC) to enable I3C read/write operations using Microsoft-provided I3C driver on Windows OS with SuperMITT test tool, validating I3C protocol functionality.",
      "Built APIs bridging low-level hardware controls with user-facing software services, improving accessibility and usability of system features.",
      "Worked with OEMs and ODMs to implement system-level optimizations, improving efficiency and performance.",
      "Developed software installers using WiX Toolset, ensuring reliable deployment of drivers and applications.",
      "Contributed to open-source projects by resolving security vulnerabilities and improving system stability."
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
  Technologies: ["Git", "Docker", "Jenkins", "Jira", "GitHub Copilot", "WiX Toolset", "VS Code", "Visual Studio", "Jupyter Notebook"],
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
    title: "Awesome Project 1",
    description: "A high-performance distributed system optimized for low-latency data processing. Built with modern C++ and stylized with Python bindings.",
    tags: ["C++", "Python", "Distributed Systems"],
    links: {
      github: "https://github.com/rameezrz25/project-1",
      pypi: "https://pypi.org/project/dummy-project-1"
    }
  },
  {
    title: "EcoTracker AI",
    description: "Machine learning model for estimating carbon footprint based on daily activity logs. Features a React dashboard for visualization.",
    tags: ["Python", "TensorFlow", "React", "AWS"],
    links: {
      github: "https://github.com/rameezrz25/project-2",
      pypi: "https://pypi.org/project/dummy-project-2"
    }
  },
  {
    title: "Thermal Monitor Pro",
    description: "Cross-platform desktop application for real-time CPU/GPU thermal monitoring. Interfaces with low-level hardware sensors.",
    tags: ["Rust", "Electron", "Windows API"],
    links: {
      github: "https://github.com/rameezrz25/project-3",
      pypi: "https://pypi.org/project/dummy-project-3"
    }
  }
];

export const openSource = [
  {
    repo: "facebook/react",
    role: "Contributor",
    description: "Fixed a critical bug in the reconciliation algorithm causing memory leaks in large-scale applications.",
    prLink: "https://github.com/facebook/react/pull/12345"
  },
  {
    repo: "vercel/vite",
    role: "Contributor",
    description: "Improved build performance by optimizing the dependency pre-bundling process.",
    prLink: "https://github.com/vercel/vite/pull/67890"
  },
  {
    repo: "tensorflow/tensorflow",
    role: "Documentation",
    description: "Updated conflicting documentation regarding TensorBoard integration for custom models.",
    prLink: "https://github.com/tensorflow/tensorflow/pull/11223"
  }
];

export const lifestyle = [
  {
    title: "Hiking in the Himalayas",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3",
    description: "Trekking through the serene landscapes of Himachal Pradesh, experiencing the raw beauty of nature at 10,000 ft."
  },
  {
    title: "Street Food in Bangkok",
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=3270&ixlib=rb-4.0.3",
    description: "Exploring the vibrant night markets and tasting authentic Pad Thai and Mango Sticky Rice."
  },
  {
    title: "Kyoto Cherry Blossoms",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3",
    description: "Witnessing the magical Sakura season in Japan, a blend of tradition, color, and peace."
  },
  {
    title: "Italian Pizza Making",
    category: "Food",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3",
    description: "Learning the art of authentic Neapolitan pizza making in the heart of Naples."
  }
];
