export interface IResumeItem {
    title: string;
    company: string;
    url: string;
    contractor: string;
    location: string;
    startDate: string;
    endDate: string;
    details: string[];
}

export interface IProject {
    url: string;
    image: string;
    title: string;
    github?: string;
    pitch: string;
    description: string;
    keywords: string[];
}

export interface IToy {
    url: string;
    images: string[];
    title: string;
    github?: string;
    description: string;
    keywords: string[];
}
