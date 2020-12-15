import React from 'react';

import {CardsFeatures}  from './style';

type propsCard = {
  url:string;
  title:string;
  background:string;
  info:string;
}

const Cards: React.FC<propsCard>= ({background,info,title,url}:propsCard) => {
  return (
      <>  
      <CardsFeatures>
          <div className="div">
            {url}
            {background}
            {info}
            {url}
            {title}
          </div>
          <div className="div">
            
          </div>
      </CardsFeatures>
      </>
  );
}

export default Cards;

