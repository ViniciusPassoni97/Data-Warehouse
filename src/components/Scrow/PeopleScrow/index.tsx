import React from 'react';
import {motion} from 'framer-motion';

import { PeopleScrowDiv, PeopleScrowDivImg, PeopleScrowDivInfo } from './style';

type pessoaScrow = {
    urlImage : string;
    name: string;
    email:string;
    text: string;
}

const PeopleScrow: React.FC<pessoaScrow> = ({email,name,text,urlImage }:pessoaScrow) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <PeopleScrowDiv>
          <PeopleScrowDivImg>
            <img className='PeopleScrowDivImgUrl' src={urlImage} alt='PeopleImage'/>
          </PeopleScrowDivImg>
          <PeopleScrowDivInfo>
            <p className='PeopleScrowDivInfoName'>{name}</p>
            <p className='PeopleScrowDivInfoEmail'>{email}</p>
            <p className='PeopleScrowDivInfoText'>{text}</p>
          </PeopleScrowDivInfo>
      </PeopleScrowDiv>
    </motion.div>
  );
}

export default PeopleScrow;