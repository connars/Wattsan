import './login.css';
import AuthModule from '../../components/auth-module/AuthModule';

function Login() {

  function handleRegister() {

  }
  return (
    <div className='login'>
      <AuthModule/>
      <h2 style={{textAlign: 'center'}}>
        Sign In
      </h2>
        <div className='login__form'>
            <input placeholder='E-Mail' />
            <input placeholder='Password' />

            <button style={{width: '330px', marginTop: '20px',marginBottom: '20px'}} className='main-btn' onClick={handleRegister}>
              Login
            </button>
        </div>
    </div>
  );
}

export default Login;
