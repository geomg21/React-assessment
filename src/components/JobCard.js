import React from 'react';
import { useJobContext } from '../context/JobContext';

const JobCard = ({ job }) => {
  const { dispatch, state } = useJobContext();
  const isSaved = state.savedJobs.some((j) => j.id === job.id);

  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <button
        className="save-btn" // ✅ add this line
        disabled={isSaved}
        onClick={() => dispatch({ type: 'SAVE_JOB', payload: job })}
      >
        {isSaved ? 'Saved' : 'Save Job'}
      </button>
    </div>
  );
};

export default JobCard;

