// IncomeTaxNews.jsx

import React, { useEffect, useState } from "react";
import "./IncomeTaxNews.css";

const IncomeTaxNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Official Income Tax News RSS Feed
  const RSS_URL =
    "https://www.incometaxindia.gov.in/press-release-rss-feed/-/asset_publisher/bxhj/rss";

  const fetchNews = async () => {
    try {
      const response = await fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
          RSS_URL
        )}`
      );

      const data = await response.json();

      setNews(data.items || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tax news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();

    // Auto refresh every 15 mins
    const interval = setInterval(() => {
      fetchNews();
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="income-tax-news-container">
      {/* Header */}
      <div className="news-header">
        <div>
          <h2>Income Tax News & Updates</h2>
          <p>Latest official announcements and press releases</p>
        </div>

        <div className="live-badge">LIVE</div>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading latest updates...</p>
        </div>
      ) : (
        <div className="news-grid">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="news-card"
            >
              {/* Date */}
              <div className="news-date">
                {new Date(item.pubDate).toDateString()}
              </div>

              {/* Title */}
              <h3>{item.title}</h3>

              {/* Description */}
              <p>
                {item.description
                  ?.replace(/<[^>]+>/g, "")
                  .substring(0, 180)}
                ...
              </p>

              {/* Footer */}
              <div className="card-footer">
                <span>Read Full Update</span>
                <span>→</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default IncomeTaxNews;