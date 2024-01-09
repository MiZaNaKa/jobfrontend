import React, {useEffect, useState} from 'react';

import {withNavigation} from 'react-navigation';

import JobApplyTemplate from '../../components/templates/JobAppliance';

import Axios from "../../services/Job/index"

function JobApply(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getAPI = async () => {
     
      var response =await Axios.getJobAppliance(props.route.params.id)
      if (response.data.api_status === 200) {
        setData(response.data.data);
      }
      setLoading(false)
    }
    getAPI()
      .catch(console.error);
  }, [])



  return (
    <JobApplyTemplate data={data} loading={loading}/>
  );
}


export default withNavigation(JobApply);
