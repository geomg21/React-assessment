import React from 'react';

import { JobProvider } from './context/JobContext';
import JobList from './components/JobList';
import SavedJobs from './components/SavedJobs';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {

  return (
    <JobProvider>
      <div className="container">
<h1 className="app-title">WORK PORTAL</h1>
        <SearchBar />
        <div className="main-section">
          <JobList />
          <SavedJobs />
        </div>
      </div>
    </JobProvider>
  );
}

export default App;

