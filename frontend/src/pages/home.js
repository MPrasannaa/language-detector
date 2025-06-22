import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #8fd3f4, #84fab0)',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#ff6b6b',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px'
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '48px' }}>🌍 Language Detector</h1>
      <button style={buttonStyle} onClick={() => navigate('/detect')}>
        Get Started 🚀
      </button>
    </div>
  );
}

export default Home;
