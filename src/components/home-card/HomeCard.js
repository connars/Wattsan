import './homeCard.css';
import { Link } from 'react-router-dom';

function HomeCard({index, img, title, link }) {
  return (
    <Link key={index} to={link} className='card'>
      <div className='card__inner'>
          <img src={img} />
          <h1 className='card__title'>
            {title}
          </h1>
      </div>
    </Link>
  );
}

export default HomeCard;
