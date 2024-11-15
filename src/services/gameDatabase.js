// const API_KEY = `04e72ab6b4e845e78ced3291aacc2c2d`

// const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

// const show = async (game) => {
//     try {
//         const res = await fetch(`${BASE_URL}&q=${game}`, { method: 'GET' });

//         if (!res.ok) {
//             throw new Error(`Failed to fetch games: ${res.statusText}`);
//         }

//         const data = await res.json();
        
//         console.log(data);
//     } catch (err) {
//         console.error('Error fetching game data:', err);
//     }
// }

// export default { show };


// const API_KEY = `04e72ab6b4e845e78ced3291aacc2c2d`;
// const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

// const show = async (game) => {
//     try {
       
//         const res = await fetch(`${BASE_URL}&q=${encodeURIComponent(game)}`, { method: 'GET' });

//         if (!res.ok) {
//             throw new Error(`Failed to fetch games: ${res.statusText}`);
//         }

//         const data = await res.json();
        
//         console.log(data);  

//         return data; 
        
//     } catch (err) {
//         console.error('Error fetching game data:', err);
//         throw err;  
//     }
// };

// export default { show };  



export const show = async (game) => {
    const API_KEY = `04e72ab6b4e845e78ced3291aacc2c2d`;
    const BASE_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    try {
        const res = await fetch(`${BASE_URL}&q=${encodeURIComponent(game)}`, { method: 'GET' });

        if (!res.ok) {
            throw new Error(`Failed to fetch games: ${res.statusText}`);
        }

        const data = await res.json();
        console.log(data);
        return data;  // Return the fetched data

    } catch (err) {
        console.error('Error fetching game data:', err);
        throw err;  // Throw an error if fetch fails
    }
};

