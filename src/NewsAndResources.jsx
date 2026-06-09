import React from "react";
import { Link, Outlet } from "react-router-dom";


function NewsAndResources() {
  return (
    <div className="news-layout">

      {/* Left Sidebar */}
      <aside className="news-sidebar">
        <h2>News & Resources</h2>

        <ul>
          <li>
            <Link to="income-tax-news">
              Income Tax News
            </Link>
          </li>

          <li>
            <Link to="tax-circulars">
              Tax Circulars
            </Link>
          </li>

          <li>
            <Link to="gst-updates">
              GST Updates
            </Link>
          </li>
        </ul>
      </aside>

      {/* Right Content */}
      <main className="news-content">
        <Outlet />
      </main>

    </div>
  );
}

export default NewsAndResources;