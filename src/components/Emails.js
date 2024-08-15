import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Emails() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/emails/')
      .then(response => setEmails(response.data))
      .catch(error => console.error('Error fetching emails:', error));
  }, []);

  return (
    <div>
      <h2>Emails</h2>
      <ul>
        {emails.map(email => (
          <li key={email.id}>{email.subject} - Campaign: {email.campaign}</li>
        ))}
      </ul>
    </div>
  );
}

export default Emails;
