import React from 'react';

import FeaturesDiv from './style';
import Cards from './Cards/index';

const Features: React.FC = () => {
  return (
      <>
        <FeaturesDiv>
          <div className='features-div-header'>
            <p className='features-div-header-title'>Features</p>
            <p className='features-div-header-info'>Some of the features and advantages that we provide 
            for those of you who store data in this Data Warehouse.</p>
          </div>
          <div className='features-div-cards'>
            <div className='features-div-cards-container'>
                <Cards backgroundUrl='#a04c4c' info='Meu titulo info' title='meu titulo' url='url'/>
                <Cards backgroundUrl='#a04c4c' info='Meu titulo info' title='meu titulo' url='url'/>
            </div>
            <div className='features-div-cards-container'>
                  <Cards backgroundUrl='#a04c4c' info='Meu titulo info' title='meu titulo' url='url'/>
                  <Cards backgroundUrl='#a04c4c' info='Meu titulo info' title='meu titulo' url='url'/>
            </div>

          </div>
        </FeaturesDiv>
      </>
  );
}

export default Features;