import React from 'react';


function GameList({ games }) {
  return (
    <section id="games" className="py-12 bg-gray-800">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-white mb-6">All SSX Games</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div key={game.name} className="bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <img src={game.coverImage} alt={game.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-white">{game.name}</h4>
                <p className="text-gray-400">Released in {game.releaseYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameList;
