import React from 'react';

import HeaderDiv from './style';
import { motion } from "framer-motion";
import Logo1 from '../../assets/icons/retanguloLogo.png';
import Logo2 from '../../assets/icons/retanguloLogo2.png';

const Header: React.FC = () => {
  return (
      <>    
        <HeaderDiv>
          <motion.div
            className='div-logo'
            animate={{ scale: 2 }}
            transition={{ duration: 0.5 }}
          >
            <div className='container'>
                <div className="container-logo">
                  <img className='imagem-logo' src={Logo1} alt='Logo' />
                  <img className='imagem-logo2' src={Logo2} alt='Logo' />
                </div>
                <div className="container-links">
                  
                </div>
            </div>
            <div className='container-button'>
                <div className="container-logo">
                  
                </div>
            </div>
          </motion.div>
        </HeaderDiv >
      </>
  );
}

export default Header;