import type {
    ExperienceItem,
    CourseItem,
    EducationItem,
    ProjectItem,
    DescProject, DescWebsite,
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
    { name: 'PHPStorm'},
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

export const descProjects: DescProject[] = [
    {desc: 'Developed a financial calculator application using React, TypeScript, and ASP.NET Web API'},
    {desc: 'Built and integrated REST API for financial data processing'},
    {desc: 'Implemented state management using React Context API and reducers'},
    {desc: 'Designed responsive user interface with Bootstrap'},
    {desc: 'Implemented client-side data persistence using sessionStorage'},
    {desc: 'Created separate frontend and backend repositories'},
]

export const descWebsites: DescWebsite[] = [
    {desc: 'Developed personal portfolio website using React, TypeScript, and Vite'},
    {desc: 'Designed responsive layout with Bootstrap'},
    {desc: 'Implemented modern frontend structure and routing'},
]

export const projects: ProjectItem[] = [
    {
        nameProject: 'Time To Change – Financial Calculator Application',
        linkProject: 'timetochange.work',
        period: '2025',
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
        linkProject: 'agnieszka.makowej.pro',
        period: '2025',
        desc: '',
        descList: descWebsites,
        tech: 'Technologies:',
        descTech: 'React, TypeScript, HTML, CSS, Bootstrap',
        nameRepo: 'GitHub: ',
        linkRepo1: 'https://github.com/AgisanMk/www-agnieszka'
    },
];

export const experience: ExperienceItem[] = [
    {
        role: 'Software Developer',
        company: 'Polish Developer Network sp. z o.o.',
        period: '2025 - present',
        desc: 'Implementation of two projects as part of the internship: the Time To Change application - an interactive financial calculator and Portfolio (online CV).',
    },
    {
        role: 'Office Administrator',
        company: 'Polish Developer Network sp. z o.o.',
        period: '2019 - 2024',
        desc: 'Office document management and digital archiving. Invoicing and preparation of accounting documents, cooperation with an accounting office. Planning and monitoring of the operating budget and making company payments.',
    },
    {
        role: 'Freelance',
        company: 'ALM Agnieszka Makowej',
        period: '2017 - present',
        desc: 'Maintaining office documentation with a wide range of secretarial and administrative duties.',
    },
    {
        role: '',
        company: 'IntelArt',
        period: '2009 - 2012',
        desc: 'Handling office documents, proper archiving and storage.',
    },
    {
        role: 'Office Assistant',
        company: 'Exlab',
        period: '2008 - 2009',
        desc: 'Assistance with daily office tasks. Maintaining the aesthetics and functionality of the office.',
    },

];

export const courses: CourseItem[] = [
    {
        name: 'Programming Foundations: Object-Oriented Design',
        company: 'LinkedIn Learning',
        period: '03/2026',
        desc: '',
    },
    {
        name: 'Sekurak about security',
        company: 'Sekurak.pl',
        period: '09/2025',
        desc: 'Key topics: basics of phishing defense, password leaks and security, the dark side of artificial intelligence and leaks, OSINT - information mining, two-factor authentication (2FA), smartphone security, the threat of ransomware.',
    },
    {
        name: 'Programming Foundations: Beyond the Fundamentals',
        company: 'LinkedIn Learning',
        period: '07/2024',
        desc: 'Key topics: collections, iteration, using external code, working with strings, planning a program, input and output, debugging, object orientation.',
    },
    {
        name: 'HTML for Programmers',
        company: 'LinkedIn Learning',
        period: '06/2024',
        desc: 'Key topics: HTML foundations, scaffolding an HTML Page, HTML with CSS and JavaScript.',
    },
    {
        name: 'Information Technologies Key Competencies Programme',
        company: 'European Information Technologies Certification Institute, ASBL.',
        period: '01/2022',
        desc: 'Key topics: fundamentals of Information security and cryptography, computer programming, Computer-aided project management, databases and data engineering, office software.',
    },
];

export const education: EducationItem[] = [
    {
        degree: 'Master’s degree, Theology Studies',
        school: 'Pontifical University of John Paul II in Krakow, Poland',
        period: '2004 - 2009',
    },
];

