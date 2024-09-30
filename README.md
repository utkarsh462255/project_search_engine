# Search Function

## Overview

This project implements a search function that retrieves relevant YouTube videos, articles, blog posts, and academic papers based on a search term. The results are ranked by views, likes, and relevance.

## Technologies

- **Backend**: Node.js (Express.js)
- **APIs**:
  - YouTube Data API for fetching YouTube videos.
  - Google Custom Search API for fetching articles and blogs.
  - Google Scholar API for academic papers.

## Setup

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Set up your environment variables in a `.env` file:
   - `YOUTUBE_API_KEY`: Your YouTube Data API key.
   - `GOOGLE_SEARCH_API_KEY`: Your Google Custom Search API key.
   - `SEARCH_ENGINE_ID`: Your Custom Search Engine ID.
4. Run the server using `npm start`.
5. Open a browser and navigate to `http://localhost:3000`.

## Enhancements

- Add filters for narrowing results by content type (e.g., only YouTube videos, only academic papers).
- Improve ranking system to dynamically fetch views and likes.
- Add caching for improved performance.
