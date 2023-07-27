import React from 'react';
import './categoryPage.css';
import { Link } from 'react-router-dom';
import HomeCard from '../../components/home-card/HomeCard';
import CategoryHero from '../../components/category-hero/CategoryHero';

function CategoryPage({ title, subtitle, video, cardsData }) {
  return (
    <div className='category'>
      <CategoryHero title={title} subtitle={subtitle} video={video} />
      <section id='market' className='market'>
        <div className='market__inner container'>
          {/* <div className='market__title'>
            <h2>{title}</h2>
          </div> */}
          <div className='market__cards'>
            {cardsData.map((card, index) => (
              <HomeCard key={index} img={card.img} title={card.title} link={card.link} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;