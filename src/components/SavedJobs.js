import React from 'react';
import { useJobContext } from '../context/JobContext';

const SavedJobs = () => {
  const { state } = useJobContext();

  return (
    <div className="saved-jobs">
      <h2>SAVED JOBS</h2>
      {state.savedJobs.length === 0 ? (
        <p>No saved jobs yet.</p>
      ) : (
        state.savedJobs.map((job) => (
          <div key={job.id} className="saved-job-card">
            <h4>{job.title}</h4>
            <p>{job.company} - {job.location}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedJobs;
