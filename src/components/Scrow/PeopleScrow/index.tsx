import React from 'react';

import { PeopleScrowDiv } from './style';

type pessoaScrow = {
    urlImage : string;
    name: string;
    email:string;
    text: string;
}

const PeopleScrow: React.FC<pessoaScrow> = ({email,name,text,urlImage }:pessoaScrow) => {
  return (
      <PeopleScrowDiv>
          
      </PeopleScrowDiv>
  );
}

export default PeopleScrow;