import { motion } from 'framer-motion';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Logo from '../../assets/icons/Logo.png';
import Logo1 from '../../assets/icons/Logo1.png';
import Facebook from '../../assets/icons/facebook.png';
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';

import { FooterDiv, FooterDivData, FooterDivFree } from './style';

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
          <FooterDivData>
            <div className='dataWarehouse'>
              <div className='dataWarehouseTitle'>
                <div className='dataWarehouseTitleInfo'>
                  <img className='dataWarehouseTitleLogo' src={Logo} alt='Logo'/>
                  <img className='dataWarehouseTitleLogo1' src={Logo1} alt='Logo'/>
                  <p className='dataWarehouseTitleText'>DataWarehouse</p>
                </div>
                <div className='dataWarehouseTitleTexts'>
                  <p className='dataWarehouseTitleTexts1'>Warehouse Society,<br/> 234 Bahagia Ave Street PRBW 29281</p>
                  <p className='dataWarehouseTitleTexts2'>info@warehouse.project <br/>1-232-3434 (Main)</p>
                </div>
              </div>
            </div>
            <div className='about'>
              <p className='aboutTitle'>Title</p>
              <p className='aboutProfile'>Profile</p>
              <p className='aboutFeatures'>Features</p>
              <p className='aboutCarrers'>Carrers</p>
              <p className='aboutNews'>News</p>
            </div>
            <div className='help'>
              <p className='helpSupport'>Support</p>
              <p className='helpSign'>Sign</p>
              <p className='helpFeatures'>Guide</p>
              <p className='helpCarrers'>Reports</p>
              <p className='helpNews'>Q&A</p>
            </div>
            <div className='socialMedia'>
              <div className='socialMediaText'>
                  <p className='socialMediaTextTitle'>Social Media</p>
              </div>
              <div className='socialMediaIconsImage'>
                  <img className='socialMediaIconsImageImg' src={Facebook} alt='Facebook'/>
                  <img className='socialMediaIconsImageImg' src={Instagram} alt='Instagram'/>
                  <img className='socialMediaIconsImageImg' src={Twitter} alt='Twitter'/>
              </div>
            </div>
          </FooterDivData>
      </FooterDiv>
  );
}

export default Footer;