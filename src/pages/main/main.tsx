import React from 'react';

 import Main  from './index';
 import Header from '../../components/Header/index';
 import Learn from '../../components/Learn/index';
 import Banck from '../../components/Banck/index';


const main: React.FC = () => {
  return (
    <>
        <Main>
            <Header />
            <Learn />
            <Banck />
        </Main >
    </>
  );
}

export default main;