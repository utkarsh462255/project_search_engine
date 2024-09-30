const axios = require('axios');

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

exports.searchVideos = async (searchTerm) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchTerm)}&key=${YOUTUBE_API_KEY}&maxResults=10`;

    const { data } = await axios.get(url);
    return data.items.map((item) => ({
        type: 'YouTube',
        title: item.snippet.title,
        link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        views: Math.floor(Math.random() * 1000000), // Placeholder: Fetch views using another API request if needed
        likes: Math.floor(Math.random() * 10000) // Placeholder
    }));
};
