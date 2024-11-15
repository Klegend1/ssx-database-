// import React, { useState, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import gameDatabase from '../../services/gameDatabase';



// import GameSearch from "./GameSearch"; 
// //import GameDetails from "./GameDetails"; 

// const App = () => {
//   const [gameData, setGameData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await gameDatabase.show("SSX 3");
//       console.log("Fetched data:", data);
//       setGameData(data); 
//     } catch (error) {
//       console.error("Error fetching game data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/games" element={<GameSearch />} />
//         <Route
//           path="/game/:gameId"
//           element={<GameDetails gameData={gameData} />}
//         />
//       </Routes>

//       {gameData && (
//         <div>
//           <h1>{gameData.name}</h1>
//           <p>{gameData.description}</p>
//         </div>
//       )}

//       <button onClick={fetchData}>Fetch Game Data</button>
//     </div>
//   );
// };

// export default App;


// src/components/App/App.jsx
import React, { useState, useEffect } from 'react';  
import { show } from '../../services/gameDatabase';  
import { Route, Routes } from 'react-router-dom';  

const App = () => {
  const [gameData, setGameData] = useState(null);

  const fetchData = async () => {
    try {
      const data = await show("SSX 3");  
      console.log("Fetched data:", data);
      setGameData(data); 
    } catch (error) {
      console.error("Error fetching game data:", error);
    }
  };

  useEffect(() => {
    fetchData();  // Call fetchData when the component mounts
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameSearch />} />
        <Route path="/game/:gameId" element={<GameDetails gameData={gameData} />} />
      </Routes>

      {gameData && (
        <div>
          <h1>{gameData.name}</h1>
          <p>{gameData.description}</p>
        </div>
      )}

      <button onClick={fetchData}>Fetch Game Data</button>
    </div>
  );
};

export default App;

