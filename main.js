import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import fs from 'node:fs/promises';
import axios from 'axios';

async function main() {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.news_key}`).then(res => {
        // console.log(res);
        return res.data;
    }).then(data =>{
        // console.log(data.articles);
        for(article of data.articles){
            console.log(article.title);
        }
    }).catch(err => {
        console.log(`Error: ${err.message}`);
    });
}

main();

console.log("So what's going on with this...?");