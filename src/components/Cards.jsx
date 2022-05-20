import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import imgblackout from '../img/blackout.png';
import imgportfolio from '../img/imgportfolio.png';
import imghf from '../img/imghf.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={imgportfolio}
              text='(this) Portfolio website!'
              label='web'
              path='/'
            />
            <CardItem
              src={imgblackout}
              text='Blackout - Nutrition App'
              label='mobile app'
              path='/blackout'
            />
            <CardItem
              src={imghf}
              text='Broken Histories'
              label='AR'
              path='/broken-histories'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;