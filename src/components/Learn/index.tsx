import React from 'react';

import  LearnDiv  from './style';
import LearnImage from '../../assets/icons/learnimage.jpg';
import {motion} from 'framer-motion';

const Learn: React.FC = () => {
  return (
    <LearnDiv>
        <div className="learn-div">
            <div className="learn-div-info">
                <p className='learn-div-info-title'>Save your data storage here.</p>
                <p className='learn-div-info-paramns'>Data Warehouse is a data storage area that has been tested for security,
                so you can store your data here safely but not be afraid of being stolen by others.</p>
                <motion.button
                    className='learn-div-info-button'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >Learn More</motion.button>
            </div>
            <div className="learn-div-image">
                <img className='learn-div-image-logo' src={LearnImage} alt='logo'/>
            </div>
        </div>
    </LearnDiv>
  );
}

export default Learn;