import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [authorization, setAuthorization] = useState('');
  const [chatID, setChatID] = useState('');
  const [message, setMessage] = useState('');

  const makeAPICall = async () => {
    try {
      const response = await axios.post(
        `https://discord.com/api/v9/channels/${chatID}/messages`,
        {
          content: message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authorization,
          },
        }
      );
      console.log('API Response send message successful: ', response.data.id);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSendMessage = () => {
    makeAPICall();
    // You can add additional logic or reset the message input after sending.
  };

  return (
    <div className="App">
      <label>
        Enter Authorization:
        <input
          type="text"
          value={authorization}
          onChange={(e) => setAuthorization(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter chatID:
        <input
          type="text"
          value={chatID}
          onChange={(e) => setChatID(e.target.value)}
        />
      </label>
      <br />
      <label>
        Enter Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default App;
