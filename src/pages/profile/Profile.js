import './profile.css';
import { useEffect } from 'react';

function Profile() {

  useEffect(() => {
      document.querySelector('.header')
  }, []);


  return (
    <div className='profile'>

        <div className='profile__header'>
           
        </div>
        <div className='profile__main'>
           
        </div>
    </div>
  );
}

export default Profile;
