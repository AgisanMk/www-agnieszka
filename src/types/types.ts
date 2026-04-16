// Projects

export type ProjectBlockProps = {
    item: ProjectItem;
};

export interface ProjectItem {
    nameProject: string;
    linkProject?: string;
    desc: string;
    descList: string[];
    tech: string,
    descTech: string;
    nameRepo: string;
    linkRepo1?: string;
    linkRepo2?: string;
    linkRepo3?: string;
}

// Experience

export type ExperienceBlockProps = {
    item: ExperienceItem;
};

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string[]
}

// Courses

export type CourseBlockProps = {
    item: CourseItem;
};

export interface CourseItem {
    name: string;
    company: string;
    period: string;
    desc: string[]
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





