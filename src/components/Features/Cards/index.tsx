import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import {CardsFeatures}  from './style';
import CardElipse from '../../../assets/icons/elipse.png';

type propsCard = {
  url:string;
  title:string;
  backgroundUrl:string;
  info:string;
}

const Cards: React.FC<propsCard>= ({backgroundUrl,info,title,url}:propsCard) => {
  return (
      <>  
        <CardsFeatures style={{background:backgroundUrl}}>
          <div className="card">
                <img className='card-image-img' src={url} alt='img'></img>
          </div>
          <div className="card-info">
                <p className="card-info-title">{info}</p>
                <p className="card-info-info">{title}</p>
                <div className='card-info-button'>
                  <motion.button
                    className='card-info-button-img'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >Learn More<AiOutlineArrowRight className='card-info-button-img-logo'/></motion.button>
                </div>
          </div>
          <img className='card-info-elipse' src={CardElipse} alt='elipse'/>
        </CardsFeatures>
      </>
  );
}

export default Cards;

