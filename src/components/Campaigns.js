import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/campaigns/')
      .then(response => setCampaigns(response.data))
      .catch(error => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign.id}>{campaign.name} - {campaign.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Campaigns;