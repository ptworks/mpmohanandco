// IncomeTaxTicker.jsx

import React, { useEffect, useState } from "react";
import "./IncomeTaxTicker.css";

const IncomeTaxTicker = () => {
  const [news, setNews] = useState([]);

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
    } catch (error) {
      console.error("Error fetching Income Tax news:", error);
    }
  };

  useEffect(() => {
    fetchNews();

    // Auto refresh every 15 minutes
    const interval = setInterval(() => {
      fetchNews();
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker-wrapper">
      {/* Left Label */}
      <div className="ticker-label">
        <span className="live-dot"></span>
        Income Tax Updates
      </div>

      {/* Scrolling News */}
      <div className="ticker-container">
        <div className="ticker-track">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="ticker-item"
            >
              🔹 {item.title}
            </a>
          ))}

          {/* Duplicate for seamless scrolling */}
          {news.map((item, index) => (
            <a
              key={`duplicate-${index}`}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="ticker-item"
            >
              🔹 {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxTicker;