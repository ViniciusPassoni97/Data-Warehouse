import React from 'react';

import HeaderDiv from './style';
import { motion } from "framer-motion";
import Logo1 from '../../assets/icons/retanguloLogo.png';
import Logo2 from '../../assets/icons/retanguloLogo2.png';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Header: React.FC = () => {
  return (
      <>    
        <HeaderDiv>
              <div className="container-info">
                <div className="container-logo">
                  <img className='imagem-logo' src={Logo1} alt='Logo' />
                  <img className='imagem-logo2' src={Logo2} alt='Logo' />
                </div>
                <div className="container-links">
                    <motion.p
                    className='container-button-request'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >About</motion.p>
                    <motion.p
                    className='container-button-request'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Help</motion.p>
                    <motion.p
                    className='container-button-request'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Features</motion.p>
                    <motion.p
                    className='container-button-request'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >Signup</motion.p>
                </div>
              </div>
              <div className='container-button'>
                <motion.p
                  className='container-button-img'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >Request Demo <AiOutlineArrowRight className='container-button-img-logo'/></motion.p>
              </div>
        </HeaderDiv >
      </>
  );
}

export default Header;