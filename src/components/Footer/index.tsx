import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

import { FooterDiv, FooterDivFree } from './style';

const Footer: React.FC = () => {
  return (
      <FooterDiv>
          <FooterDivFree>
            <div className='footerDivFreeInfo'> 
                <p className='footerDivFreeInfoTitle'>Try for free!</p>
                <p className='footerDivFreeInfoTitleWeek'>Get limited 1 week free try our features!</p>
            </div>
            <div className='footerDivFreeButton'> 
              <div className='container-button'>
                <motion.button
                  className='container-button-img'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >Learn More</motion.button>
              </div>
              <div className='container-button'>
                <motion.button
                  className='container-button-img'
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >Request Demo <AiOutlineArrowRight className='container-button-img-logo'/></motion.button>
              </div>
            </div>
          </FooterDivFree>
      </FooterDiv>
  );
}

export default Footer;