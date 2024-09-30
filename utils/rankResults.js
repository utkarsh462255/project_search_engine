function rankResults(results) {
    // Rank by views (for YouTube), relevance, and likes
    return results.sort((a, b) => {
        const aScore = (a.views || 0) + (a.likes || 0) + (a.relevanceScore || 0);
        const bScore = (b.views || 0) + (b.likes || 0) + (b.relevanceScore || 0);
        return bScore - aScore;
    });
}

module.exports = rankResults;
