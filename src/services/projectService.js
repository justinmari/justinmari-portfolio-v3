import axiosService from "./axiosService";

function getProjects() {
  return axiosService.get(`/api/projects`).then(result => {
    return result.data;
  }).catch(error => {
    console.error("Error when fetching projects from backend.", error)
    return [];
  });
}

export { getProjects };