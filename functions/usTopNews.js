// import dotenv from 'dotenv';
// dotenv.config();
// // import fs from 'node:fs/promises';
// import axios from 'axios';

// async function usTopNews() {
//     axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.news_key}`).then(res => {
//         let theGoods = res.data;
//         return theGoods;
//     }).catch(err => {
//         console.log(`Error: ${err.message}`);
//     });
// }

// export { usTopNews };