import avatarImg from './img/image.png'
const base = import.meta.env.BASE_URL

export const contactInfo = {
  email: "kchhillar24@gmail.com",
  phone: "8708512069",
  linkedin: "https://www.linkedin.com/in/karan-chhillar-0a1618309/",
  github: "https://github.com/kchhillar13",
  resume: "https://drive.google.com/file/d/1UG_SHqSibCEy-A9qG9vKtIg2L8FOdsVe/view?usp=sharing"
}

export const profileInfo = {
  name: "Karan Chhillar",
  username: "kchhillar13",
  avatar: avatarImg,
  bio: "Data analytics enthusiast with strong skills in Python, Excel, Tableau, Looker Studio, and Google Sheets, focused on extracting insights, building dashboards, and solving real-world problems using data.",
  location: "Newton School of Technology, Rishihood University"
}

export const skills = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "MySQL",
  "Next JS",
  "React",
  "Node.js",
  "Express JS",
  "Prisma ORM",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GenAI",
  "LangChain",
  "LangGraph",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Excel",
  "Git and Github",
  "MongoDB",
  "Tailwind CSS",
  "UI/UX"
]

const projects = [
  {
    name: "Airport-Accident-Analysis-Dashboard",
    description: "Analysis of airport accident data, exploring crash patterns, contributing factors, and aviation safety trends across global incidents.",
    image: `${base}accident.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/Airport-Accident-Analysis-Dashboard",
    live: "https://public.tableau.com/views/AviationAccidentAnalysis_17774763284580/AVIATIONACCIDENTANALYSIS?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "IPL Key Stats 2008-2025 Dashboard",
    description: "Analysis of IPL match data from 2008 to 2025, exploring team performances, player statistics, and season-wise cricket insights.",
    image: `${base}ipl.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/IPL-Dashboard-2008-2025",
    live: "https://public.tableau.com/views/IPLKeyStats2008-2025_17774763775000/IPL2025Dashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Smart-Farming-Analytics-Understanding-Crop-Trends",
    description: "Analysis of agricultural data through Tableau, exploring crop yield trends, farming patterns, and smart agriculture insights across regions.",
    image: `${base}agri.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/Smart-Farming-Analytics-Understanding-Crop-Trends-through-Tableau",
    live: "https://public.tableau.com/views/AnalysisonFarmingData_17774764290460/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Hollywood Insights: A Cinematic Analysis",
    description: "A comprehensive analysis of Hollywood cinema trends, box office performance, and industry insights.",
    image: `${base}Hollywood.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/HLWD_Stories",
    live: "https://public.tableau.com/views/HollywoodInsights_17774765238200/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  }
]

export default projects
