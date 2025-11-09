import type {
    TechStack,
    ExperienceItem,
    CourseItem,
    EducationItem,
    ProjectItem,
    Technology,

} from "../types/types.ts";

export const skills: TechStack[] = [
    { name: 'HTML5, CSS', level: 3 },
    { name: 'Bootstrap', level: 2 },
    { name: 'JavaScript', level: 3 },
    { name: 'TypeScript', level: 2 },
    { name: 'React', level: 3 },
    { name: 'C# ASP.NET', level: 3 },
    { name: 'PHP', level: 1 },
    { name: 'Git / GitHub', level: 2 },
    { name: 'Postman', level: 3 },
];

export const languages = [
    'English - limited working proficiency',
    'Polish - native',
];

export const technologiesApi: Technology[] = [
    { name: 'Languages', desc: 'HTML, JavaScript, TypeScript, C#, PHP' },
    { name: 'Frameworks & Libraries', desc: 'React + Vite, ASP.NET Web API, uuid' },
    { name: 'Styling', desc: 'CSS3, React Bootstrap' },
    { name: 'Tools & Platforms', desc: 'Git, GitHub, Rider, WebStorm, PHPStorm' },
    { name: 'Other', desc: 'REST APIs, Responsive Design, React Context API & Reducers for state management, sessionStorage, React Router' },
]

export const technologiesWebsite: Technology[] = [
    { name: 'Languages', desc: 'HTML, JavaScript, TypeScript' },
    { name: 'Frameworks & Libraries', desc: 'React + Vite' },
    { name: 'Styling', desc: 'CSS3, React Bootstrap' },
    { name: 'Tools & Platforms', desc: 'Git, GitHub, WebStorm' },
    { name: 'Other', desc: 'Responsive Design' },
]

export const projects: ProjectItem[] = [
    {
        nameProject: 'API Time To Change',
        linkProject: 'timetochange.work',
        period: '2025',
        desc: 'An interactive financial calculator that helps users assess whether their current financial situation aligns with their desired goals. The app aims to answer the question: Is it time to change jobs?',
        nameList: 'Technologies used:',
        list: technologiesApi,
        nameRepo: 'GitHub: ',
        linkRepo: 'github.com/AgisanMk/TimeToChange.php'
    },

    {
        nameProject: 'Portfolio Website',
        linkProject: 'agnieszka.makowej.pro',
        period: '2025',
        desc: 'A personal resume website built using React + Vite, TypeScript, and Bootstrap with responsive design.',
        nameList: '',
        list: technologiesWebsite,
        nameRepo: 'GitHub: ',
        linkRepo: 'github.com/AgisanMk/www-agnieszka'
    },
];

export const experience: ExperienceItem[] = [
    {
        role: 'Software Developer',
        company: 'Polish Developer Network sp. z o.o. - apprenticeship',
        period: '2025 - present',
        desc: 'Implementation of two projects as part of the internship: the Time To Change application - an interactive financial calculator and Portfolio (online CV).',
    },
    {
        role: 'Office Administrator',
        company: 'Polish Developer Network sp. z o.o. - contract',
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
        company: 'EXLAB',
        period: '2007 - 2009',
        desc: 'Assistance with daily office tasks. Maintaining the aesthetics and functionality of the office.',
    },

];

export const courses: CourseItem[] = [
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

