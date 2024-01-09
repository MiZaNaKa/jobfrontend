class jobAction {
  getPopularJob = (text) => {
    return {
      type: 'getPopularJob',
      text
    };
  };

  
  getJobTypeStore = (jobType) => {
    return {
      type: 'getJobTypeStore',
      jobType
    };
  };

  getJobCategoryStore = (value) => {
    return {
      type: 'getJobCategoryStore',
      value
    };
  };

  

}

export default new jobAction()



// const setTechnology = text => {
//     return {
//       type: 'SET_TECHNOLOGY',
//       text
//     };
// };
  
// export { setTechnology };
  