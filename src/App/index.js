import React from 'react';
import getDirectMessages from '../helpers/data/directMessageData';
import './App.scss';

function App() {
  const handleClick = () => {
    getDirectMessages().then((response) => console.warn(response));
  };

  return (
    <div className='App'>
        <button
          id='that-button'
          className='btn btn-primary mt-3'
          onClick={handleClick}
        >
          I am THAT button
        </button>
    </div>
  );
}

export default App;
