import React from 'react';

import {withNavigation} from 'react-navigation';

import JobApplyTemplate from '../../components/templates/job/jobApply';


function JobApply(props) {
  const jobID=props.route.params.id
  return (
    <JobApplyTemplate jobID={jobID} jobTitle={props.route.params.title}/>
  );
}


export default withNavigation(JobApply);
