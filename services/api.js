const BASE_URL = "http://localhost:8001"; 

export const fetchBots = async () => {
  const response = await fetch(`${BASE_URL}/bots`);
  const data = await response.json();
  return data;
};


