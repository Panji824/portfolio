import React from "react";
import { Link } from 'react-router-dom';
import ArticlesData from '../data/articles.json'; 

export const Articles = ArticlesData;

const ArticlesPage = () => {
  return (
    <div className="articles-page container">
      <header className="page-header">
        <h1>📚 My Articles</h1>
        <p> my journal learning from Web development, Machine Learning embedded to Quality Assurance and Software Testing</p>
      </header>

      <section className="article-list">
        {Articles.map((article) => (
          <article key={article.id} className="article-card">
            <div className="article-content">
              <h2>
                <Link to={`/articles/${article.slug}`} className="article-title">
                      {article.title}
                </Link>
              </h2>
              <p className="article-summary">{article.summary}</p>

              <div className="article-meta">
                <span className="article-date">📅 {article.date}</span>
                <div className="article-tags">
                  {article.tag.map((tag, index) => (
                    <span key={index} className="tag-pill">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

     </div>
  );
};

export default ArticlesPage;
