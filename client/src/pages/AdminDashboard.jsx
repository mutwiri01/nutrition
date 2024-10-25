import  { useEffect, useState } from 'react';
import '../css/dashboard.css'; // Create your own CSS file for styling

const AdminDashboard = () => {
  const [personalSubmissions, setPersonalSubmissions] = useState([]);
  const [corporateSubmissions, setCorporateSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/forms/submissions');
        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }
        const data = await response.json();
        setPersonalSubmissions(data.personalSubmissions);
        setCorporateSubmissions(data.corporateSubmissions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      {loading && <p>Loading submissions...</p>}
      {error && <p className="error-message">{error}</p>}

      <h2>Personal Health Coaching Submissions</h2>
      {personalSubmissions.length > 0 ? (
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Health Concerns</th>
            </tr>
          </thead>
          <tbody>
            {personalSubmissions.map((submission) => (
              <tr key={submission._id}>
                <td>{submission.fullName}</td>
                <td>{submission.email}</td>
                <td>{submission.phoneNumber}</td>
                <td>{submission.healthConcerns}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No personal submissions found.</p>
      )}

      <h2>Corporate Health Coaching Submissions</h2>
      {corporateSubmissions.length > 0 ? (
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Organization Name</th>
              <th>Number of Members</th>
              <th>Program Features</th>
            </tr>
          </thead>
          <tbody>
            {corporateSubmissions.map((submission) => (
              <tr key={submission._id}>
                <td>{submission.organizationName}</td>
                <td>{submission.numberOfMembers}</td>
                <td>{submission.programFeatures}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No corporate submissions found.</p>
      )}
    </div>
  );
};

export default AdminDashboard;
