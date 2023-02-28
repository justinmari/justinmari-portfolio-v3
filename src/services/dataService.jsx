import { getProjects } from "./projectService";
import { getResumeData } from "./resumeService";
import { logoService } from "./logoService";

const dataService = {
  loadData: async function loadData() {
    let promises = [];
    promises.push(await getProjects());
    promises.push(await getResumeData());
    promises.push(await logoService.getLogo());
    return Promise.all(promises).then(data => {
      return {
        projects: data[0],
        resumeData: data[1],
        logoBase64Image: data[2]
      }
    });
  }
}

export { dataService };