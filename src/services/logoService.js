import axiosService from "./axiosService";

const logoService = {
  getLogo: function getLogo() {
    return axiosService.get(`/api/logo`).then(result => {
      return result.data[0].base64Image;
    }).catch(error => {
      console.error("Error when fetching logo from backend.", error)
      return [];
    });
  }
};


export { logoService };