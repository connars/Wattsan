import './authModule.css';
import google from '../../assets/icons/g-logo.svg'
import apple from '../../assets/icons/apple-logo.svg'

function AuthModule() {
  return (
    <div className='auth-module'>
        <div className='auth-module-item'>
            <img src={google}  alt="google-logo"/>
        </div>
        <div className='auth-module-item'>
            <img src={apple}  alt="apple-logo"/>
        </div>
    </div>
  );
}

export default AuthModule;
