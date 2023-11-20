import React from "react";

const BotSpecs = ({ bot, enlistBot }) => {
  return (
    <div>
      <h2>{bot.name} Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      {/* Display bot details */}
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
    </div>
  );
};

export default BotSpecs;
