export interface ProjectItem {
    name: string;
    link1?: string;
    period: string;
    desc1: string;
    tech: string;
    desc2: Technologies[];
    nameLink2: string;
    link2?: string;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
}

export interface CourseItem {
    name: string;
    company: string;
    period: string;
    desc: string;
}

export interface EducationItem {
    degree: string;
    school: string;
    period: string;
}

export type SkillListItemProps = {
    name: string;
    level: number; // 0–5
};

export type Skill = {
    name: string;
    level: number; // 0–5
};

export type Technologies = {
    name: string;
    desc: string; // 0–5
};