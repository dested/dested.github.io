export interface IResumeItem {
  title: string;
  company: string;
  url: string;
  contractor: boolean;
  location: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface IProject {
  url: string;
  type?: 'video';
  image: string;
  title: string;
  github?: string;
  link?: string;
  pitch: string;
  description: string;
  keywords: string[];
}

export interface IToy {
  url?: string;
  images: string[];
  type?: 'video';
  title: string;
  github?: string;
  description: string;
  keywords: string[];
}
