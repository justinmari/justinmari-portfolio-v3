import axiosService from "./axiosService";

function getResumeData() {
  return axiosService.get(`/api/resume`).then(result => {
    return {
      summary: result.data[0],
      professionalExperiences: result.data[1]
    };
  }).catch(error => {
    console.error("Error when fetching resume data from backend.", error)
    return [];
  });
}

export { getResumeData };