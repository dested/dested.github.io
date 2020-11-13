import {PageAction, PageActionOptions} from '../actions/page';
import {IProject, IResumeItem, IToy} from '../models';

import projectData from '../data/projects.json';
import resumeData from '../data/resume.json';
import toyData from '../data/toys.json';

const projects = projectData;
const resume = resumeData;
const toys = toyData.sort(() => {
  return Math.random() * 100 - 50;
});

const initialState: PageStore = {
  projects,
  toys,
  resume,
  showResume:  window.location.host.includes('resume'),
  selectedKeyword: null,
};

export interface PageStore {
  showResume: boolean;
  projects: IProject[];
  resume: IResumeItem[];
  toys: IToy[];
  selectedKeyword: string | null;
}

export default function pageReducer(state: PageStore = initialState, action: PageAction): PageStore {
  switch (action.type) {
    case PageActionOptions.SetSelectedKeyword: {
      return {
        ...state,
        selectedKeyword: action.keyword,
      };
    }
  }
  return state;
}
