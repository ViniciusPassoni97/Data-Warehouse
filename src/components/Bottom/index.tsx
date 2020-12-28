import React from 'react';
import { BottomDiv } from './style';
import Chat from '../../assets/icons/chat.png';
import {motion} from 'framer-motion';

const Bottom: React.FC = () => {
  return (
    <BottomDiv>
        <div className='bottomDivInfo'>
            <p className='bottomDivInfoText'>© Datawarehouse™, 2020. All rights reserved.<br/> Company Registration Number: 21479524.</p>
        </div>
        <div className='bottomDivImg'>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <img className='bottomDivImgImage' src={Chat} alt='Chat' />
            </motion.div>
        </div>
    </BottomDiv>
    );
}

export default Bottom;