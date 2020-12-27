import React from 'react';

import { PeopleScrowDiv, PeopleScrowDivImg, PeopleScrowDivInfo } from './style';

type pessoaScrow = {
    urlImage : string;
    name: string;
    email:string;
    text: string;
}

const PeopleScrow: React.FC<pessoaScrow> = ({email,name,text,urlImage }:pessoaScrow) => {
  return (
      <PeopleScrowDiv>
          <PeopleScrowDivImg>
            <img src={urlImage} alt='PeopleImage'/>
          </PeopleScrowDivImg>
          <PeopleScrowDivInfo>
            <p className='PeopleScrowDivInfoName'>{name}</p>
            <p className='PeopleScrowDivInfoEmail'>{email}</p>
            <p className='PeopleScrowDivInfoText'>{text}</p>
          </PeopleScrowDivInfo>
      </PeopleScrowDiv>
  );
}

export default PeopleScrow;