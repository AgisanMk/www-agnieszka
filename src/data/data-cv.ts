import type {
    ExperienceItem,
    CourseItem,
    EducationItem,
    ProjectItem,
    TechSkill,

} from "../types/types.ts";

export const programmingLanguages: TechSkill[] = [
    { name: 'JavaScript (ES6+)'},
    { name: 'Type Script'},
    { name: 'C#'},
    { name: 'HTML5'},
    { name: 'CSS3'}
];

export const frameworks: TechSkill[] = [
    { name: 'React'},
    { name: 'Vite'},
    { name: 'Bootstrap'},
];

export const backend: TechSkill[] = [
    { name: 'ASP.NET Web API'},
    { name: 'REST API'},
    { name: 'API integration'},
];

export const tools: TechSkill[] = [
    { name: 'Git'},
    { name: 'GitHub'},
    { name: 'Postman'},
    { name: 'Rider'},
    { name: 'WebStorm'},
];

export const other: TechSkill[] = [
    { name: 'Responsive Web Design'},
    { name: 'React Context API'},
    { name: 'State Management (Reducers)'},
    { name: 'React Router'},
    { name: 'Session Storage'},
];


export const languages = [
    'English - Intermediate (B1)',
    'Polish - native',
];

export const descProjects: string[] = [
    'Developed a financial calculator application using React, TypeScript, and ASP.NET Web API',
    'Built and integrated REST API for financial data processing',
    'Implemented state management using React Context API and reducers',
    'Designed responsive user interface with Bootstrap',
    'Implemented client-side data persistence using sessionStorage',
    'Created separate frontend and backend repositories',
]

export const descWebsites: string[] = [
    'Developed personal portfolio website using React, TypeScript, and Vite',
    'Designed responsive layout with Bootstrap',
    'Implemented modern frontend structure and routing',
]

export const projects: ProjectItem[] = [
    {
        nameProject: 'Time To Change – Financial Calculator Application',
        linkProject: 'https://timetochange.work',
        desc: 'Full-stack web application:',
        descList: descProjects,
        tech: 'Technologies:',
        descTech: 'React, TypeScript, C#, ASP.NET Web API, JavaScript, HTML, CSS',
        nameRepo: 'GitHub: ',
        linkRepo1: 'https://github.com/AgisanMk/TimeToChange.React',
        linkRepo2: 'https://github.com/AgisanMk/TimeToChange.Net',
        linkRepo3: 'https://github.com/AgisanMk/TimeToChange.php',
    },

    {
        nameProject: 'Portfolio Website',
        linkProject: 'https://agnieszka.makowej.pro',
        desc: '',
        descList: descWebsites,
        tech: 'Technologies:',
        descTech: 'React, TypeScript, HTML, CSS, Bootstrap',
        nameRepo: 'GitHub: ',
        linkRepo1: 'https://github.com/AgisanMk/www-agnieszka'
    },
];

export const descSoftwareDeveloperPDN: string[] = [
    'Developed full-stack web applications as part of internship projects',
    'Built and maintained frontend using React and TypeScript',
    'Integrated frontend with backend services using REST API',
    'Collaborated on application architecture and feature implementation',
]

export const descOfficeAdministratorALM: string[] = [
    'Managed digital documentation and data processing workflows',
    'Maintained structured document archives and records',
    'Prepared invoices and accounting documentation',
    'Coordinated with accounting office and managed payments',
    'Monitored operational budget and financial processes',
]

export const descFreelanceALM: string[] = [
    'Managed office documentation and administrative processes',
    'Organized and maintained structured data and records',
]

export const descIntelArt: string[] = [
    'Handling office documents, archiving and storage',
]

export const descExlab: string[] = [
    'Supported daily office operations and administrative tasks',
    'Maintained organization and functionality of office environmen',
]
export const experience: ExperienceItem[] = [
    {
        role: 'Software Developer',
        company: 'Polish Developer Network sp. z o.o.',
        period: 'Jun 2025 - present',
        desc: descSoftwareDeveloperPDN,
    },
    {
        role: 'Office Administrator',
        company: 'Polish Developer Network sp. z o.o.',
        period: 'Dec 2019 - Dec 2024',
        desc: descOfficeAdministratorALM,
    },
    {
        role: 'Freelance Administrative Services',
        company: 'ALM Agnieszka Makowej',
        period: '2017 - present',
        desc: descFreelanceALM,
    },
    {
        role: '',
        company: 'IntelArt',
        period: '2009 - 2012',
        desc: descIntelArt,
    },
    {
        role: 'Office Assistant',
        company: 'Exlab',
        period: '2008 - 2009',
        desc: descExlab,
    },

];

export const descSekurak: string[] = [
    'Phishing and password security',
    'OSINT and information gathering',
    'Ransomware threats and prevention',
    'Two-factor authentication',
]

export const descITKCP: string[] = [
    'Information security and cryptography',
    'Programming fundamentals',
    'Databases and data engineering',
    'Project management',
]

export const courses: CourseItem[] = [
    {
        name: 'Programming Foundations: Object-Oriented Design',
        company: 'LinkedIn Learning',
        period: 'Mar 2026',
        desc: [],
    },
    {
        name: 'Sekurak about security',
        company: 'Sekurak.pl',
        period: 'Sep 2025',
        desc: descSekurak,
    },
    {
        name: 'Programming Foundations: Beyond the Fundamentals',
        company: 'LinkedIn Learning',
        period: 'Jul 2024',
        desc: [],
    },
    {
        name: 'HTML for Programmers',
        company: 'LinkedIn Learning',
        period: 'Jun 2024',
        desc: [],
    },
    {
        name: 'Information Technologies Key Competencies Programme',
        company: 'European Information Technologies Certification Institute, ASBL.',
        period: 'Jan 2022',
        desc: descITKCP,
    }
];

export const education: EducationItem[] = [
    {
        degree: 'Master’s degree, Theology Studies',
        school: 'Pontifical University of John Paul II, Krakow, Poland',
        period: '2004 - 2009',
    },
];

