import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/leads/')
      .then(response => setLeads(response.data))
      .catch(error => console.error('Error fetching leads:', error));
  }, []);

  return (
    <div>
      <h2>Leads</h2>
      <ul>
        {leads.map(lead => (
          <li key={lead.id}>{lead.first_name} {lead.last_name} - {lead.email} (Score: {lead.score})</li>
        ))}
      </ul>
    </div>
  );
}

export default Leads;