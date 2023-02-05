import { getProjects } from "./projectService";

async function loadData() {
  const projects = await getProjects();
  return Promise.all([projects]).then(data => {
    return {
      projects: data[0]
    }
  });
}

export { loadData };