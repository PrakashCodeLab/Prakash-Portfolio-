import React from 'react';
import './ProjectCard.scss';


const Line = ({heading}) => {
  return (
    <div className='line__section'>
        <div className='line'></div>
        <h2 className='heading heading__name'>{heading}</h2>
    </div>
  );
}

export default Line;

