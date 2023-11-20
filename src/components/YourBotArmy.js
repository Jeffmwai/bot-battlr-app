import React, { useState } from "react";

const YourBotArmy = () => {
  const [army, setArmy] = useState([]);

  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
          {/* Add more bot details as needed */}
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
