import React from 'react';
import './home.css';
import intro from '../../assets/videos/intro02.mp4';
import { Link } from 'react-router-dom';
import HomeCard from '../../components/home-card/HomeCard';

import icon1 from '../../assets/icons/about/ic1.svg'
import icon2 from '../../assets/icons/about/ic2.svg'
import icon3 from '../../assets/icons/about/ic3.svg'
import icon4 from '../../assets/icons/about/ic4.svg'

import homecard1 from '../../assets/images/home/p1.webp'

const cardsData = [
  {
    img: `${homecard1}`,
    title: 'Лазерные граверы и резаки',
    link: '/1',
  },
  {
    img: `${homecard1}`,
    title: 'Заголовок 2',
    link: '/2',
  },
  {
    img: `${homecard1}`,
    title: 'Заголовок 3',
    link: '/ссылка_2',
  },
  {
    img: `${homecard1}`,
    title: 'Заголовок 4',
    link: '/ссылка_2',
  },
  {
    img: `${homecard1}`,
    title: 'Заголовок 5',
    link: '/ссылка_2',
  },
  {
    img: `${homecard1}`,
    title: 'Заголовок 6',
    link: '/ссылка_2',
  },
  // Добавьте другие элементы массива для дополнительных карточек
];

function Home() {
  return (
    <div className='homepage__wrapper'>
      <section id='hero' className='hero '>
        <div className='hero__inner container'>
          <div className='hero__left'>
              <h1>
                Лазерные и фрезерные станки Wattsan
              </h1>
              <p>
                Компания Wattsan производит профессиональное лазерное и фрезерное оборудование с ЧПУ и сопутствующие комплектующие
              </p>

              <Link to={'/login'} className='main-btn'>Каталог</Link>
          </div>
          <div className='hero__right'>
              <ul>
                <li>nav 1</li>
                <li>nav 2</li>
                <li>nav 3</li>
                <li>nav 4</li>
                <li>nav 5</li>
                <li>nav 6</li>
              </ul>
          </div>

        </div>
        <video src={intro} autoPlay loop muted />

    
      </section>
      <section id='about' className='about'>
        <div className='about__inner container'>
          <div className='about__left'>
            <h2>
              <span style={{color: 'var(--red)'}}>Цель Wattsan </span> — быть предпочтительным поставщиком благодаря наилучшему балансу качественных компонентов и 
               высокого уровня обслуживания и поддержки клиентов.
            </h2>
            <p>
              Wattsan — китайский производитель станков с ЧПУ. Сейчас наши машины представлены в 23 странах мира. Wattsan разрабатывает и производит лазерные, фрезерные и металлообрабатывающие станки с ЧПУ, которые широко используются в отраслях:
            </p>
            <ul className='about__list'>
              <li className='about__list-item'>
                <img src={icon1} alt='' className='about__list-img'/>
                <p className='about__list-text'>
                  Деревообработка
                </p>
              </li>
              <li className='about__list-item'>
                <img src={icon2} alt='' className='about__list-img'/>
                <p className='about__list-text'>
                  Деревообработка
                </p>
              </li>
              <li className='about__list-item'>
                <img src={icon3} alt='' className='about__list-img'/>
                <p className='about__list-text'>
                  Деревообработка
                </p>
              </li>
              <li className='about__list-item'>
                <img src={icon4} alt='' className='about__list-img'/>
                <p className='about__list-text'>
                  Деревообработка
                </p>
              </li>
            </ul>
          </div>
          <div className='about__right'>

          </div>
        </div>
      </section>
        <section id='market' className='market'>
            <div className='market__inner container'>
              <div className='market__title'>
                <h2>
                    Our Production
                </h2>
              </div>
              <div className='market__cards'>
                  {/* Используем map() для создания карточек на основе массива данных */}
                    {cardsData.map((card, index) => (
                      <HomeCard key={index} img={card.img} title={card.title} link={card.link} />
                    ))}
              </div>
            </div>
        </section>
    </div>
  );
}

export default Home;