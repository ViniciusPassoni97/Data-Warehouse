import React from 'react';

import {CardsFeatures}  from './style';

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
            <div className="card-image">
                <img className='card-image-img' src={url} alt='img'></img>
            </div>
          </div>
          <div className="card-info">
                <p>{info}</p>
                <p>{title}</p>
          </div>
      </CardsFeatures>
      </>
  );
}

export default Cards;

