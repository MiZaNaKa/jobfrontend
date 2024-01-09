const reducer = (state, action) => {
  
    switch (action.type) {
      case 'getPopularJob':
        return {
          ...state,
          jobList: action.text
        };

      case 'getJobTypeStore':
        return {
          ...state,
          jobType: action.jobType
        };

      case 'getJobCategoryStore':
        return {
          ...state,
          value: action.value
        };

      case 'getLoadingStore':
        return {
          ...state,
          loading: action.loading
        };

        

        
      default:
        return state;
    }
};
  
export default reducer;
  