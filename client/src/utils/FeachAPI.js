import axios from "axios";
const bassUrl = `https://netlify-deploy-ll24ev68i-ayushbirla71.vercel.app`;

const FeachApi = async (Obj) => {
  try {
    Obj.baseURL=bassUrl

    let {data}= await axios(Obj);
  
    return data;

  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};


export default FeachApi;