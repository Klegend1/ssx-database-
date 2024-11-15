import React, { useState } from 'react';
import { show } from '../services/gameDatabase';  

const GameSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const fetchedGames = await show(searchQuery);
      setGames(fetchedGames);
    } catch (err) {
      setError('Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container p-6">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for a game..."
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {games.length === 0 && !loading && !error && <p>No games found.</p>}
        <ul>
          {games.map((game) => (
            <li key={game.id} className="my-4">
              <div className="bg-gray-800 p-4 rounded-md">
                <h3 className="text-xl text-white">{game.name}</h3>
                <img src={game.background_image} alt={game.name} className="mt-2 w-full h-64 object-cover" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameSearch;

