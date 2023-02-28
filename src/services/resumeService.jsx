import { API_URL } from "../contants";

function getResumeData() {
  const path = `/api/resume`;
  return fetch(API_URL + path)
    .then(result => result.json())
    .then(result => {
      return result;
    }).catch(error => {
      console.error("Error when fetching resume data from backend.", error)
      return [];
    });
}

export { getResumeData };