import { API_URL } from "../contants";

function getProjects() {
  const path = `/api/projects`;
  return fetch(API_URL + path)
    .then(result => result.json())
    .then(result => {
      return result;
    }).catch(error => {
      console.error("Error when fetching projects from backend.", error)
      return [];
    });
}

export { getProjects };