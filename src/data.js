import avatarImg from './img/image.png'
const base = import.meta.env.BASE_URL

export const contactInfo = {
  email: "kchhillar24@gmail.com",
  phone: "8708512069",
  linkedin: "https://www.linkedin.com/in/harender-chhoker-47a2a8325",
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
    name: "E_G2_OlistDelayLens-Capstone",
    description: "A visual analytics dashboard analyzing logistics and delivery delays across Brazilian e-commerce orders using the Olist dataset, uncovering regional bottlenecks, seller dispatch inefficiencies, and on-time delivery trends.",
    image: `${base}cap.png`,
    tags: ["Python" ,"Jupyter", "Tableau "],
    github: "https://github.com/Harsith-Panda/E_G2_OlistDelayLens",
    live: "#"
  }
  ,{
    name: "Airport-Accident-Analysis-Dashboard",
    description: "Analysis of airport accident data, exploring crash patterns, contributing factors, and aviation safety trends across global incidents.",
    image: `${base}accident.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/Airport-Accident-Analysis-Dashboard",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/AviationAccidentAnalysis_17773991353200/AVIATIONACCIDENTANALYSIS?publish=yes"
  },
  {
    name: "IPL Key Stats 2008-2025 Dashboard",
    description: "Analysis of IPL match data from 2008 to 2025, exploring team performances, player statistics, and season-wise cricket insights.",
    image: `${base}ipl.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/IPL-Dashboard-2008-2025",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/IPLKeyStats2008-2025_17773983741910/IPL2025Dashboard?publish=yes"
  },
  {
    name: "Smart-Farming-Analytics-Understanding-Crop-Trends",
    description: "Analysis of agricultural data through Tableau, exploring crop yield trends, farming patterns, and smart agriculture insights across regions.",
    image: `${base}agri.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/Smart-Farming-Analytics-Understanding-Crop-Trends-through-Tableau",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/AnalysisonFarmingData_17773979718340/Dashboard1?publish=yes"
  }
  ,{
    name: "Hollywood Insights: A Cinematic Analysis",
    description: "A comprehensive analysis of Hollywood cinema trends, box office performance, and industry insights.",
    image: `${base}Hollywood.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/HLWD_Stories",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/HollywoodInsights_ACinematicAnalysis_17773987989360/Dashboard1?publish=yes"
  },
  {
    name: "Washington King County House Sales",
    description: "Analysis of house sales data in King County, Washington, exploring pricing trends and market patterns.",
    image: `${base}HouseSales.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/House-Sales",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/WashingtonKingCountyHouseSales_17774040496290/KingCountyHouseSales?publish=yes"},
  {
    name: "Airbnb Analytics Dashboard",
    description: "Interactive dashboard analyzing Airbnb listings, pricing strategies, and booking patterns.",
    image: `${base}AIRBNB.PNG`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/Harenderchhoker31/AIRBNB",
    live: "https://public.tableau.com/app/profile/harender.chhoker5218/viz/Dashboard_17774039058980/Dashboard1?publish=yes"
  }
  
]

export default projects
