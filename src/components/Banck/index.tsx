import React from 'react';

import BanckDiv from './style';
import ImageBanck from '../../assets/icons/image.png';
import {motion} from 'framer-motion';

const Banck: React.FC = () => {
  return (
      <>    
            <BanckDiv>
                <motion.div 
                    className='banck-div-motion'
                >   
                    <div className='banck-div-logo'>
                        <img className='banck-image' src={ImageBanck} alt='imagebanck'/>
                    </div>
                    <div  className='banck-div-info'>
                        <p className='banck-div-info-title'>We are a high-level data storage bank</p>
                        <p className='banck-div-info-info'>The place to store various data that you can access at any time through the internet and where you can carry it.
                         This very flexible storage area has a high level of security. To enter into your own 
                        data you must enter the password that you created when you registered in this Data Warehouse.</p>
                    </div>
                </motion.div>
            </BanckDiv>
      </>
  );
}

export default Banck;