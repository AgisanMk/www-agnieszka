// Projects

export type ProjectBlockProps = {
    item: ProjectItem;
};

export interface ProjectItem {
    nameProject: string;
    linkProject?: string;
    period: string;
    desc: string;
    nameList: string;
    list: Technology[];
    nameRepo: string;
    linkRepo?: string;
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

// Tech Stack

export type TechStack = {
    name: string;
    level: number; // 0–5
};

export type TechStackListItemProps = TechStack;

// Technologies

export type Technology = {
    name: string;
    desc: string; // 0–5
};

