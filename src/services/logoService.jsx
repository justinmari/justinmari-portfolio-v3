import { API_URL } from "../contants";

const logoService = {
  getLogo: function getLogo() {
    const path = `/api/logo`;
    return fetch(API_URL + path)
      .then(result => result.json())
      .then(result => {
        return result[0].base64Image;
      }).catch(error => {
        console.error("Error when fetching logo from backend.", error)
        return [];
      });
  }
};


export { logoService };