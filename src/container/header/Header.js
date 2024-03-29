import './header.css';
import { useRef, useEffect } from 'react';
import logo from '../../assets/icons/Logo.svg'
import { Link } from 'react-router-dom';

function Header() {
  let nav = useRef(null);
  let burger = useRef(null);
  function openNav(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    nav.current.classList.toggle('active');
    burger.current.classList.toggle('active');
    console.log(1);
  }

  useEffect(() => {
    // Здесь мы добавляем обработчик на каждый пункт меню
    document.querySelectorAll('.header__right-nav-item a').forEach(item => {
      item.addEventListener('click', () => {
        nav.current.classList.remove('active');
        burger.current.classList.remove('active');
      });
    });

    // Возвращаем функцию для удаления обработчика при размонтировании компонента
    return () => {
      document.querySelectorAll('.header__right-nav-item a').forEach(item => {
        item.removeEventListener('click', () => {
          nav.current.classList.remove('active');
          burger.current.classList.remove('active');
        });
      });
    };
  }, []);


  useEffect(() => {
    // Функция, которая будет добавлять или удалять класс "scrolled" в зависимости от прокрутки страницы
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const scrolled = window.scrollY > 0; // Если пользователь прокрутил вниз, вернет true, иначе false
      if (scrolled) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    // Добавляем обработчик события scroll при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Убираем обработчик события scroll при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__left'>
          <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" width="182.53" height="67.57" viewBox="0 0 182.53 67.57">
              <defs>
                <style>{`.cls-1{fill:#e63d33;}`}</style>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    className="cls-1"
                    d="M46.77,0a.92.92,0,0,0-1.11.84C44.38,5.9,31.24,55,30.44,58.1c-.15-.44-.26-.67-.31-.89-2.21-7.76-4.4-15.49-6.59-23.25a.76.76,0,0,0-.86-.66c-1.46,0-2.9,0-4.36,0a.75.75,0,0,0-.86.64c-1.71,6.13-3.45,12.27-5.18,18.4-.51,1.82-1,3.66-1.57,5.49l-.18,0C10.09,56.17,8.8,51,7.21,44.71c-.17-.66-.46-.84-1.12-.82-1.77,0-3.52,0-5.29,0-.23,0-.49,0-.8.05,3.16,11.22,3.49,11.77,6.61,22.9h7.57C16.26,59.56,18.34,52.3,20.4,45l.17,0Q23.71,56,26.82,66.86H34.4C37.54,55.69,49.69,11.28,52.85,0,50.77,0,48.76.06,46.77,0Z"
                  />
                  <path
                    d="M148.17,45.6l-.32-.27c-3.22-3.65-9.24-3.91-13.16-1.53-7.15,4.34-8.12,15-1.92,20.76,4.46,4.13,11.72,3.89,15.2-.22l.24,0v2.53h6.13V43h-6.17Zm-6.66,16a6.45,6.45,0,0,1-6.66-6.69,6.66,6.66,0,1,1,13.32,0A6.39,6.39,0,0,1,141.51,61.62Z"
                  />
                  <path
                    className="cls-1"
                    d="M62.79,45.6a2.39,2.39,0,0,1-.33-.29c-3.21-3.63-9.16-3.87-13-1.59C41.92,48.18,41.13,59.47,48,65c4.47,3.65,11.31,3.21,14.56-.62a1.08,1.08,0,0,1,.33-.18v2.59H69V42.94H62.81C62.79,43.83,62.79,44.65,62.79,45.6Zm-6.66,16a6.37,6.37,0,0,1-6.62-6.69,6.64,6.64,0,1,1,13.28-.08A6.42,6.42,0,0,1,56.13,61.62Z"
                  />
                  <path
                    d="M182.52,52.94a24.11,24.11,0,0,0-.13-2.56,9.56,9.56,0,0,0-2.61-5.67c-3.43-3.52-10.55-3.19-13.25.51,0,.05-.13.05-.27.15V43h-6.15V66.84h6.15V53.91a6.51,6.51,0,0,1,1.09-4,5.32,5.32,0,0,1,5.6-1.75,4.2,4.2,0,0,1,3.31,3.94,11.5,11.5,0,0,1,.07,1.31V66.86h6.2v-.93Q182.52,59.42,182.52,52.94Z"
                  />
                  <path
                    d="M122.43,53.85a40.46,40.46,0,0,0-4.16-1.51c-1.15-.41-2.32-.73-3.45-1.17a1.53,1.53,0,0,1-1.08-1.55A1.77,1.77,0,0,1,115,48a4.25,4.25,0,0,1,4.87,1.4c.16.22.33.46.51.73,1.75-.94,3.47-1.87,5.24-2.84-.2-.33-.35-.57-.52-.8-2.88-4.17-9.12-5.57-13.81-3.09A6.9,6.9,0,0,0,107.39,50a6.12,6.12,0,0,0,4.09,5.88c1.18.53,2.42.87,3.65,1.31s2.41.79,3.59,1.26A1.56,1.56,0,0,1,119.8,60a1.6,1.6,0,0,1-1.3,1.57,11.23,11.23,0,0,1-3.21.24,4.3,4.3,0,0,1-3.56-3l-5.29,3a2.59,2.59,0,0,0,.07.31,5.22,5.22,0,0,0,.26.47A8.92,8.92,0,0,0,112,66.81a13.19,13.19,0,0,0,11-1C127.12,63.38,127.54,56.24,122.43,53.85Z"
                  />
                  <path
                    className="cls-1 test"
                    d="M98.7,36.21c-1.82.54-3.55,1.09-5.29,1.56-.69.19-1,.46-.93,1.23.07,1.27,0,2.57,0,3.9H88.39v0H83V36.19c-1.9.56-3.71,1.13-5.52,1.62a.83.83,0,0,0-.71,1c0,1.33,0,2.68,0,4.1H72.63v5.93h4.12v1c0,2.92,0,5.86,0,8.78a20.61,20.61,0,0,0,.31,3.32,5.62,5.62,0,0,0,4.09,4.63,17.66,17.66,0,0,0,7.17.33V61.28c-1,0-2,0-2.94,0C83.67,61.15,83,60.42,83,58.7c0-3.06,0-6.11,0-9.17,0-.2,0-.39.05-.7h9.47v2.61c0,3.14,0,6.28.17,9.4a5.74,5.74,0,0,0,3.48,5.38c2.57,1.1,5.26.88,7.92.64V61.28c-1,0-1.93,0-2.86,0-1.81-.09-2.5-.86-2.5-2.67v-9c0-.22,0-.46,0-.77h5.31v-6H98.67C98.7,40.62,98.7,38.45,98.7,36.21Z"
                  />
                </g>
              </g>
            </svg>
          </Link >
        </div>
        <div  className='header__right'>
            <nav ref={nav} className='header__right-nav'>
                <ul className='header__right-nav-list'>
                  
                  <li className='header__right-nav-item'>
                    <Link className='header__right-nav-link' to='/'>Home</Link>

                  </li>

                  <li className='header__right-nav-item'>
                    <Link className='header__right-nav-link' to='/'>Equipment</Link>
                    <div className='header__right-nav-drop'>
                      <ul className='header__right-nav-drop-list'>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                        <li className='header__right-nav-drop-item'>
                          <a className='header__right-nav-drop-link' href='#'>
                            Laser Machines
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li className='header__right-nav-item'>
                    <Link className='header__right-nav-link' to='/laser'>Services</Link>
                  </li>

                  <li className='header__right-nav-item'>
                    <Link className='header__right-nav-link' to='/2'>Company</Link>
                  </li>
                </ul>
            </nav>
        </div>
        <div ref={burger} onClick={openNav} className='nav-burger'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
