import React from 'react';

import FeaturesDiv from './style';
import Cards from './Cards/index';
import DataCard from '../../assets/icons/imageCard.png';
import DataCard2 from '../../assets/icons/imageCard3.png';
import DataCard3 from '../../assets/icons/imageCard4.png';
import DataCard4 from '../../assets/icons/imageCard5.png';

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
                <Cards  backgroundUrl='#d1f3ee' info='Search Data' title='Don’t worry if your data is very large, the Data Warehoue provides a search engine, 
                which is useful for making it easier to find data effectively saving time.' url={DataCard}/>
                <Cards backgroundUrl='#c7b7dd' info='24 Hours Access' title='Access is given 24 hours a full morning to night and meet again in the 
                morning, giving you comfort when you need data when urgent.' url={DataCard2}/>
            </div>
            <div className='features-div-cards-container'>
                  <br />
                  <Cards backgroundUrl='#e0b9c8' info='Print Out' title='Print out service gives you convenience if someday you need print data,
                   just edit it all and just print it.' url={DataCard3}/>
                  <Cards backgroundUrl='#cbdcec' info='Security Code' title='Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured
                   with a code or password that you created, so only you can open the file.' url={DataCard4}/>
            </div>
          </div>
        </FeaturesDiv>
      </>
  );
}

export default Features;