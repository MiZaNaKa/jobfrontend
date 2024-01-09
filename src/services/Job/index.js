import axios from 'axios';
const baseUrl = 'http://192.168.1.2:3000';



class apiCalling {
  
  getJobList = async () => {
    
    const awaitResponse = await axios.get(
      baseUrl+`/jobs/getJob`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return awaitResponse
  };

  getSearchJob = async (value) => {
    const awaitResponse = await axios.post(
      baseUrl+`/jobs/filterJob`,value,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    
    return awaitResponse
  };

  getJobDetail = async (id) => {
    const awaitResponse = await axios.get(
      baseUrl+`/jobs/getJobByID/`+id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return awaitResponse
  };
  
  deleteJob = async (id) => {
    const awaitResponse = await axios.get(
      baseUrl+`/jobs/deleteJobByID/`+id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return awaitResponse
  };

  editJob = async (value) => {
    const awaitResponse = await axios.post(
      baseUrl+`/jobs/updateJobByID`,value,
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