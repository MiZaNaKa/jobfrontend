import axios from 'axios';

const baseUrl = 'http://192.168.1.2:3000';

class apiCalling {
  getOTP = async (value) => {
   
    const awaitResponse = await axios.get(
      baseUrl+`/users/getEmailOTP/`+value,
      {
        headers: {
            "Content-Type": "application/json",
        },
      }
    );
    console.log(awaitResponse)

    return awaitResponse
  };


  checkNCreate = async (value) => {
   
    const awaitResponse = await axios.post(
      baseUrl+`/users/checkNCreate`,value,
      {
        headers: {
            "Content-Type": "application/json",
        },
      }
    );
    console.log(awaitResponse)

    return awaitResponse
  };

  
  Login = async (value) => {
   
    const awaitResponse = await axios.post(
      baseUrl+`/users/login`,value,
      {
        headers: {
            "Content-Type": "application/json",
        },
      }
    );
    return awaitResponse
  };


  
  createdJob = async (value) => {
   
    const awaitResponse = await axios.post(
      baseUrl+`/jobs/insertJob`,value,
      {
        headers: {
            "Content-Type": "application/json",
        },
      }
    );
    return awaitResponse
  };
  

 
    
}

export default new apiCalling()