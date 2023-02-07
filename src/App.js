import { SignUp } from './components/SignUp';

import regImg from './assets/registerImage.svg';

import './App.css';

function App() {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5'>
          <SignUp />
        </div>
        {/* Image */}
        <div className='col-md-7'>
          <img className='img-fluid w-100' src={regImg} alt='register form' />
        </div>
      </div>
    </div>
  );
}

export default App;
