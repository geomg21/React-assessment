import React, { createContext, useContext, useReducer } from 'react';

const JobContext = createContext();

const initialState = {
  jobs: [],
  savedJobs: [],
  searchQuery: '',
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SAVE_JOB':
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload],
      };
    default:
      return state;
  }
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
