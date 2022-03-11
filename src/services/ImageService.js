import Environment from "../environment";
import Api from "./ApiService";

export const ImageService = {
    sendImgPOST: async (img = null) => {
      const axios = require('axios').default;
      console.log("Al ImageService llega")
      console.log(img);
      let url = `${Environment.api}img/`;
      const formData = new FormData();
      formData.append("file", img);
      const getResult = await axios.post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return getResult.data;
    },

    testGET: async () => {
      console.log("Test ImageService")
      let url = `${Environment.api}`;
      console.log(`Le pegamos desde el front a ${url}`);
      const getResult = await Api.fetch(`${url}`, "GET");
      return getResult;
    },
  };
  
  export default ImageService;