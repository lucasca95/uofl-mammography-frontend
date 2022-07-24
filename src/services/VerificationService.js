import Environment from "../environment";

export const VerificationService = {

  verifyEmailPOST: async (userData = null) => {
    const axios = require('axios').default;
      let url = `${Environment.api}verifyemail//`;

      const formData = new FormData();
      formData.append('token', userData.token);
      formData.append('email', userData.email);
      const getResult = await axios.post(`${url}`, formData);
      console.log('server responde...');
      console.log(getResult.data);
      return getResult.data;
  }
};

export default VerificationService;