import axiosService from "../services/axiosService";

function getProjects() {
  return axiosService.get(`/api/projects`).then(result => {
    return result.data;
  });
}

export { getProjects };