import React from 'react';
import './News.css';

function News() {
  const articles = [
    {
      date: '12 Jan',
      title: 'Elements of Content in Epoxy Paint',
      excerpt: 'Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin... Read more',
      image: '/images/Mask Group (1).png'
    },
    {
      date: '12 Jan',
      title: '5 Right Steps in Warehouse Planning and Construction',
      excerpt: 'Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully. When the planning is done properly, the construction is... Read more',
      image: '/images/Mask Group (2).png'
    },
    {
      date: '12 Jan',
      title: 'The Right Solution to Build a Sturdy Type 45 House',
      excerpt: 'Having a solid home is certainly everyone\'s dream. How not, the house is a place where the residents can rest and take shelter from the bad weather... Read more',
      image: '/images/Mask Group (8).png'
    }
  ];

  return (
    <section id="articles" className="news">
      <div className="container">
        <div className="section-header">
          <h2>News & Update</h2>
        </div>
        <div className="news-grid">
          {articles.map((article, index) => (
            <div key={index} className="news-card">
              <img src={article.image} alt={article.title} className="news-image" />
              <div className="news-date">{article.date}</div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default News;
