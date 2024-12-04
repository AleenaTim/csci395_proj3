import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import './css/util.css';
import './css/styles.css';


const Dashboard = () => {
    const [user, setUser] = useState(null); // State to store user info
  const [loading, setLoading] = useState(true); // State for loading spinner
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // Fetch user data on component mount
    const token = localStorage.getItem('token');
    if (!token) {
      enqueueSnackbar('Please log in first.', { variant: 'error' });
      navigate('/login'); // Redirect if no token
      return;
    }

    axios
      .get('http://localhost:5555/user', {
        headers: { Authorization: `Bearer ${token}` }, // Include token in request
      })
      .then((response) => {
        setUser(response.data); // Save user data to state
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Failed to load user data.', { variant: 'error' });
        console.error('Error fetching user data:', error);
      });
  }, [navigate, enqueueSnackbar]);

  if (loading) return <Spinner />;
  
  return (
    <div className="container">
      <div className="profile-header">
        <div className="banner"></div>
        <div className="profile-info">
          <div className="avatar"></div>
          <div className="name">
            <h1>
              John Doe <span className="verified">✔</span>
            </h1>
            <p className="username">littlejohnnydoeyo420</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="main-content">
          <div className="favorites">
            <h2>Top Favorite Cuisines</h2>
            <ul>
              <li>✔ Korean</li>
              <li>✔ German</li>
              <li>✔ Caribbean</li>
            </ul>
            <br />
            <br />
            <h2>Top Favorite Restaurants</h2>
            <ul>
              <li>✔ Mikado</li>
              <li>✔ Heidelberg</li>
              <li>✔ Court Square Diner</li>
            </ul>
          </div>

          <div className="reviews">
            <h2>Most Popular Reviews</h2>
            <div className="review-card">
              <div className="review-info">
                <div className="avatar-small"></div>
                <div>
                  <h3>Cho Dang Gol</h3>
                  <p>Rating: ⭐⭐⭐⭐⭐</p>
                  <p>Price Range: $30-$50</p>
                </div>
              </div>
              <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <p className="likes">1250 people liked this</p>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="badges">
            <h2>Badges</h2>
            <ul>
              <li>⭐ Top Reviewer</li>
              <li>📅 3-year Veteran</li>
            </ul>
          </div>

          <div className="contributions">
            <h2>771 contributions in the last year</h2>
            <div className="contribution-graph">
              {/* Placeholder for contribution graph */}
            </div>
          </div>
        </div>
      </div>
    </div>

  

  );
};

export default Dashboard;
