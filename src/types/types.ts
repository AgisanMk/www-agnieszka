// Projects

export type ProjectBlockProps = {
    item: ProjectItem;
};

export interface ProjectItem {
    nameProject: string;
    linkProject?: string;
    period: string;
    desc: string;
    descList: DescProject[] | DescWebsite[];
    tech: 'Technologies:',
    descTech: string;
    nameRepo: string;
    linkRepo1?: string;
    linkRepo2?: string;
    linkRepo3?: string;
}

export interface DescProject {
    desc: string;
}

export interface DescWebsite {
    desc: string;
}

// Experience

export type ExperienceBlockProps = {
    item: ExperienceItem;
};

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
}

// Courses

export type CourseBlockProps = {
    item: CourseItem;
};

export interface CourseItem {
    name: string;
    company: string;
    period: string;
    desc: string;
}

// Education

export type EducationBlockProps = {
    item: EducationItem;
};

export interface EducationItem {
    degree: string;
    school: string;
    period: string;
}

// Technical Skills

export type TechSkill = {
    name: string;
};






