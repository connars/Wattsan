import './homeCard.css';
import { Link } from 'react-router-dom';

function HomeCard({index, img, title, link }) {
  return (
    <Link key={index} to={link} className='card'>
      <div className='card__inner'>
          <img src={img} />
           <div className='card__bottom'>
            <h1 className='card__title'>
              {title}
            </h1>
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.809308 1.67663C1.76414 0.743536 3.28848 0.740844 4.2466 1.67056L14 11.1348L23.7534 1.67056C24.7115 0.740845 26.2359 0.743536 27.1907 1.67663V1.67663C28.1821 2.64544 28.1793 4.24115 27.1845 5.20646L14 18L0.815544 5.20646C-0.179256 4.24115 -0.182077 2.64544 0.809308 1.67663V1.67663Z" fill="#E50B00"/>
            </svg>
          </div>
      </div>
    </Link>
  );
}

export default HomeCard;
