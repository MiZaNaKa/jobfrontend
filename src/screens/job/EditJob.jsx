import React from 'react';

import {withNavigation} from 'react-navigation';

import JobEdit from '../../components/templates/job/jobEdit';

function EditJob(props) {
  
  return (
    <JobEdit 
        data={props.route.params.data}
    />
  );
}


export default withNavigation(EditJob);
