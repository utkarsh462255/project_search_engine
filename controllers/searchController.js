const youtubeService = require("../services/youtubeService");
const googleSearchService = require("../services/googleSearchService");
const googleScholarService = require("../services/googleScholarService");
const rankResults = require("../utils/rankResults");

exports.search = async (req, res) => {
    const searchTerm = req.body.searchTerm;

    try {
        const [youtubeResults, articleResults, paperResults] = await Promise.all([
            youtubeService.searchVideos(searchTerm),
            googleSearchService.searchArticles(searchTerm),
            googleScholarService.searchPapers(searchTerm),
        ]);

        // Combine and rank results based on views, likes, and relevance
        const combinedResults = rankResults([
            ...youtubeResults,
            ...articleResults,
            ...paperResults,
        ]);

        res.status(200).json({
            success: true,
            data: combinedResults,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching search results",
            error: error.message,
        });
    }
};
