import React, { useEffect, useState } from "react";
import "./TaxCirculars.css";

const TaxCirculars = () => {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);

  const RSS_URL =
    "https://www.incometaxindia.gov.in/circular-rss-feed/-/asset_publisher/bxhj/rss";

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        RSS_URL
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCirculars(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching circulars:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="tax-circulars-container">
      <div className="header-section">
        <h2>Income Tax Circulars</h2>
        <span className="live-indicator">LIVE</span>
      </div>

      {loading ? (
        <div className="loader">Loading circulars...</div>
      ) : (
        <div className="circulars-grid">
          {circulars.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="circular-card"
            >
              <div className="date">
                {new Date(item.pubDate).toDateString()}
              </div>

              <h3>{item.title}</h3>

              <p>
                {item.description
                  ?.replace(/<[^>]+>/g, "")
                  .substring(0, 180)}
                ...
              </p>

              <button>View Circular</button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaxCirculars;