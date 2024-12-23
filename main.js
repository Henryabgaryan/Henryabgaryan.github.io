// main.js

document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
});

/**
 * Fetch AI-related news from configured sources.
 */
async function fetchNews() {
    const newsContainer = document.getElementById('news-feed');
    const sources = newsConfig.sources;
    const apiKey = newsConfig.apiKey; // If using an API that requires a key

    try {
        const promises = sources.map(source => {
            return fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&category=technology&apiKey=${apiKey}`)
                .then(response => response.json())
                .then(data => data.articles);
        });

        const results = await Promise.all(promises);
        const articles = results.flat();

        // Remove duplicate articles based on title
        const uniqueArticles = Array.from(new Set(articles.map(a => a.title)))
            .map(title => {
                return articles.find(a => a.title === title);
            });

        displayNews(uniqueArticles.slice(0, 10)); // Display top 10 news
    } catch (error) {
        console.error('Error fetching news:', error);
        newsContainer.innerHTML = '<p>Unable to fetch news at this time.</p>';
    }
}

/**
 * Display news articles in the news feed section.
 * @param {Array} articles 
 */
function displayNews(articles) {
    const newsContainer = document.getElementById('news-feed');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const title = document.createElement('a');
        title.href = article.url;
        title.target = '_blank';
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description || '';

        newsItem.appendChild(title);
        newsItem.appendChild(description);
        newsContainer.appendChild(newsItem);
    });
}
