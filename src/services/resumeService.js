import axiosService from "./axiosService";

function getResumeData() {
  return axiosService.get(`/api/resume`).then(result => {
    return result.data;
  }).catch(error => {
    console.error("Error when fetching projects from backend.", error)
    return [];
  });
}

export { getResumeData };