import { useState } from 'react';
import ServicesCardList from './serviceData';
import TitleS from './serviceTitle';

export default function ServicesShow() {
  const [buttonText, setButtonText] = useState('Two columns');

  function changeText() {
    return buttonText === 'Two columns'
      ? setButtonText('Three columns')
      : setButtonText('Two columns');
  }
  return (
    <section className='container'>
      <TitleS />

      <button className='btn' onClick={changeText}>
        {buttonText}
      </button>

      <ServicesCardList serviceCards={buttonText === 'Two columns' ? 'grid' : 'grid2'} />
    </section>
  );
}
