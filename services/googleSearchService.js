const axios = require('axios');

const GOOGLE_SEARCH_API_KEY = process.env.GOOGLE_SEARCH_API_KEY;
const SEARCH_ENGINE_ID = process.env.SEARCH_ENGINE_ID;

exports.searchArticles = async (searchTerm) => {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(searchTerm)}&key=${GOOGLE_SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}`;

    const { data } = await axios.get(url);
    return data.items.map((item) => ({
        type: 'Article/Blog',
        title: item.title,
        link: item.link,
        relevanceScore: Math.random() * 100, // Placeholder for relevance score
    }));
};
