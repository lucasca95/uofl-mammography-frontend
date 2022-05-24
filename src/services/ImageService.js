import Environment from "../environment";
import Api from "./ApiService";
import fileDownload from "js-file-download";

export const ImageService = {
    sendImgPOST: async (data = null) => {
      const axios = require('axios').default;
      console.log(data);
      const img = data.file[0];
      // console.log(img);
      let url = `${Environment.api}img/`;
      console.log(url);
      // alert("Al ImageService llega")
      const formData = new FormData();
      formData.append("file", img);
      formData.append("email", data.email);
      const getResult = await axios.post(`${url}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return getResult.data;
    },

    searchImgGET: async (code = null) => {
      const axios = require('axios').default;
      let url = `${Environment.api}img/retrieveresults/`;
      const formData = new FormData();
      formData.append("imgcode", code);
      let getResult = await axios.post(`${url}`, formData);
      console.log('server responde...');
      console.log(getResult.data);
      // alert(`check1`);
      let imgInfo = {
        'detection': -1,
        'classification': -1,
      }
      if(getResult.data.status === 200){
        imgInfo.detection = getResult.data.detection;
        imgInfo.classification = getResult.data.classification;
        url = `${Environment.api}img/retrieve/`;
        // getResult = await axios.post(`${url}`, formData, {responseType:'blob'});
        // fileDownload(getResult.data, 'file.png');
      }
      // alert(`check2`);

      
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