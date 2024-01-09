import reducer from '../../reducers/job';
import { createStore } from 'redux';

const initialState = {
  jobList: []
};

const jobTypeState = {
  jobType:""
};

const jobCategoryState = {
  value:""
};





const store = createStore(reducer, initialState);

const jobTypeStore = createStore(reducer, jobTypeState);

const jobCategoryStore = createStore(reducer, jobCategoryState);

export { store,jobTypeStore,jobCategoryStore };


