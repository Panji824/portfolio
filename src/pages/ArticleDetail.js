// src/pages/ArticleDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
    const { articleSlug } = useParams();

    const article = articles.find(a => a.slug === articleSlug);

    if (!article) {
        return (
            <section className="article-detail-section">
                <h2>404 - Article Not Found</h2>
                <p>Sorry Articles is missing or somewhere idk.</p>
                <Link to="/articles">Back to Article's list</Link>
            </section>
        );
    }
    
    const renderImage = (path, title) => {
        if (!path) return null;
        return (
            <div className="article-image-container">
                <img src={path} alt={title} className="article-image" />
            </div>
        );
    };

    return (
        <section className="article-detail-section">
            <Link to="/articles" className="back-link">← Back to Article's list</Link>
            
            <header className="article-detail-header">
                <p className="article-date">📅 {article.date}</p>
                <h1>{article.title}</h1>
                
                <div className="article-tags">
                    {article.tag.map((tag, index) => (
                        <span key={index} className="tag-pill">#{tag}</span>
                    ))}
                </div>
            </header>
            
            <article className="article-body">
                <p className="article-summary-detail">{article.summary}</p>
                
                {article.contentPart1 && (
                    <div className="article-content-part">
                        <p>{article.contentPart1}</p>
                    </div>
                )}
                
                {renderImage(article.imagePart1, article.title + ' - Part 1')}

                {article.contentPart2 && (
                    <div className="article-content-part">
                        <p>{article.contentPart2}</p>
                    </div>
                )}

                {renderImage(article.imagePart2, article.title + ' - Part 2')}

                <div className="article-end-note" style={{ marginTop: '40px', borderTop: '1px dashed #ddd', paddingTop: '20px' }}>
                    <p>thanks for stopping by and read it, i hope your day is always monday!</p>
                </div>

            </article>
        </section>
    );
};

export default ArticleDetail;