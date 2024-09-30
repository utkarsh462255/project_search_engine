const axios = require('axios');

const GOOGLE_SCHOLAR_API = 'https://api.somegooglescholarapi.com/search'; // Example, actual API will vary

exports.searchPapers = async (searchTerm) => {
    const url = `${GOOGLE_SCHOLAR_API}?query=${encodeURIComponent(searchTerm)}`;

    const { data } = await axios.get(url);
    return data.items.map((item) => ({
        type: 'Academic Paper',
        title: item.title,
        link: item.link,
        relevanceScore: Math.random() * 100, // Placeholder for relevance score
    }));
};
