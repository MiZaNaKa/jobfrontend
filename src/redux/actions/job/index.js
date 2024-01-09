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

    getLoading = (loading) => {
      return {
        type: 'getLoadingStore',
        loading
      };
    };
  
    
  
  }
  
  export default new jobAction()
  
  

    