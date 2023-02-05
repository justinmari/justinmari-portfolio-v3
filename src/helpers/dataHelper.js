import { getProjects } from "./projectsHelper";

async function loadData() {
  const projects = await getProjects();
  return Promise.all([projects]).then(data => {
    return {
      projects: data[0]
    }
  });
}

export { loadData };