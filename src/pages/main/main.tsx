import React from 'react';

 import Main  from './index';
 import Header from '../../components/Header/index';
 import Learn from '../../components/Learn/index';
 import Banck from '../../components/Banck/index';
 import Features from '../../components/Features/index';
import Scrow from '../../components/Scrow/index';
import Footer from '../../components/Footer/index';
import Bottom from '../../components/Bottom/index';

const main: React.FC = () => {
  return (
    <>
        <Main>
            <Header />
            <Learn />
            <Banck />
            <Features />
            <Scrow />
            <Footer />
            <Bottom />
        </Main >
    </>
  );
}

export default main;