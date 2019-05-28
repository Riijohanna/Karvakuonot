import React from 'react';

const Content = ({ imageUrl, title }) => {
  if (!imageUrl){
    return (<div className='card-container'>No more pet pictures, sorry!</div>)
  }
  return (
    <div className='card-container'>
    <img className='card-image'
      src={ imageUrl }
    />
    <h2 className='card-title'>
    { title }
    </h2>
    </div>
  );
};

export default Content;
