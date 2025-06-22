import React, { useState } from 'react';
import axios from 'axios';

function Detect() {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('');

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #ffecd2, #fcb69f)',
    fontFamily: 'Arial, sans-serif',
    color: '#222'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#6a82fb',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginTop: '20px'
  };

  const textareaStyle = {
    width: '60%',
    minHeight: '120px',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '10px',
    border: '2px solid #ddd',
    resize: 'none',
    outline: 'none'
  };

  return (
    <div style={pageStyle}>
      <h1>✍️ Enter your text</h1>
      <textarea
        style={textareaStyle}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
      />
      <button style={buttonStyle} onClick={async () => {
        try {
          const response = await axios.post('http://localhost:5000/detect', { text });
          setLanguage(response.data.language);
        } catch (err) {
          alert("Error detecting language.");
        }
      }}>
        Detect 🌐
      </button>
      {language && <h2 style={{ marginTop: '20px' }}>🌟 Detected Language: <strong>{language}</strong></h2>}
    </div>
  );
}

export default Detect;
