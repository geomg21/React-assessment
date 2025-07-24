import React, { useEffect } from 'react';
import { useJobContext } from '../context/JobContext';
import JobCard from './JobCard';

const JobList = () => {
  const { state, dispatch } = useJobContext();
  const { jobs, loading, error, searchQuery } = state;

  useEffect(() => {
    const fetchJobs = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        const jobTitles = [
          'Frontend Developer',
          'Backend Developer',
          'Full Stack Developer',
          'UI/UX Designer',
          'Software Engineer',
          'React Developer',
          'Node.js Developer',
          'DevOps Engineer',
          'Mobile App Developer',
          'Data Analyst',
          'Machine Learning Engineer',
          'QA Tester',
          'Project Manager',
          'Technical Writer',
          'Product Manager',
          'Business Analyst',
          'Graphic Designer',
          'Cloud Engineer',
          'Cybersecurity Analyst',
          'System Administrator',
        ];

        const companies = [
          'TCS', 'Infosys', 'Wipro', 'HCL Technologies', 'Tech Mahindra',
          'Accenture India', 'Cognizant India', 'IBM India', 'L&T Infotech',
          'Capgemini India', 'Zoho', 'Mindtree', 'Persistent Systems',
          'Mphasis', 'Oracle India', 'Amazon India', 'Flipkart', 'Paytm',
          'BYJU\'S', 'Freshworks'
        ];

        const locations = [
          'Bangalore', 'Hyderabad', 'Pune', 'Chennai', 'Mumbai',
          'Delhi', 'Kolkata', 'Ahmedabad', 'Noida', 'Kochi'
        ];

        const mockJobs = data.slice(0, 20).map((_, i) => ({
          id: i + 1,
          title: jobTitles[i % jobTitles.length],
          company: companies[i % companies.length],
          location: locations[i % locations.length],
        }));

        dispatch({ type: 'SET_JOBS', payload: mockJobs });
      } catch {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load jobs' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchJobs();
  }, [dispatch]);

  const filtered = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery) ||
      job.company.toLowerCase().includes(searchQuery)
  );

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="job-list">
      <h4 className="job-list-heading">AVAILABLE JOBS</h4>

      {filtered.length === 0 ? (
        <p>No jobs found.</p>
      ) : (
        filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default JobList;

