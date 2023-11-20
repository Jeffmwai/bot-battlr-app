import React, { useState, useEffect } from "react";
import { fetchBots } from "../services/api";

const BotCollection = () => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchBots();
      setBots(response);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img src={bot.avatar_url} alt={bot.name} />
          <p>{bot.name}</p>
          {/* Add more bot details as needed */}
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
