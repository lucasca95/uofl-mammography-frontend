import Environment from "../environment";
import Api from "./ApiService";
import fileDownload from "js-file-download";

export const LoginService = {
  // INPUT -> userData={
  //  'userEmail': sth@mail.com,
  //  'userPassword': sth1234,
  // }
  loginPOST: async (userData = null) => {
    const axios = require('axios').default;
    console.log(userData);
    let url = `${Environment.api}login/`;
    console.log(url);
    const formData = new FormData();
    formData.append('userEmail', userData.userEmail);
    formData.append('userPassword', userData.userPassword);
    const getResult = await axios.post(`${url}`, formData);
    return getResult.data;
  },
};
  
export default LoginService;