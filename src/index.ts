

const apiKey = process.env.apikey;
const ts = process.env.ts;
const hash = process.env.hash;
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

fetch(url)
    .then( res => res.json())
    .then( data => console.log(data.data))
