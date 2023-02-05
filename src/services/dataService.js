import { getProjects } from "./projectService";
import { getResumeData } from "./resumeService";

async function loadData() {
  const projects = await getProjects();
  const resumeData = await getResumeData();
  return Promise.all([projects, resumeData]).then(data => {
    return {
      projects: data[0],
      resumeData: data[1]
    }
  });
}

export { loadData };