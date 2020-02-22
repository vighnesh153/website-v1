export interface ProjectRepoInfo {
  name: string;
  commit?: {
    commit: {
      author: {
        date: string;
      }
    }
  };
  _links?: {
    html?: string
  };
}
