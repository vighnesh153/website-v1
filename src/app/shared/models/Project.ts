import { ProjectItem } from '@vighnesh153-shared/models/ProjectItem';

export interface Project {
  clientId: string;
  title: string;
  description: string;
  routeLink: string;
  isLinkAbsolute: boolean;
  items: ProjectItem[];
}
