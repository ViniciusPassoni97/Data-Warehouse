import React from 'react';

 import Main  from './index';
 import Header from '../../components/Header/index';
 import Learn from '../../components/Learn/index';

const main: React.FC = () => {
  return (
    <>
        <Main>
            <Header />
            <Learn />
        </Main >
    </>
  );
}

export default main;