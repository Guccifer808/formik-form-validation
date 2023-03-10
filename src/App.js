import { SignUp } from './components/SignUp';

import regImg from './assets/registerImage.svg';

import './App.css';

function App() {
  return (
    <div className='container mt-3 d-flex justify-content-center min-vh-100 align-items-center'>
      <div className='row'>
        {/* Left side form */}
        <div className='form col-12 col-md-6'>
          <SignUp />
        </div>
        {/* Image */}
        <div className='image col-12 col-md-6 d-flex flex-wrap align-items-center'>
          <img className='image w-80' src={regImg} alt='register form' />
        </div>
      </div>
    </div>
  );
}

export default App;
