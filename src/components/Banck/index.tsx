import React from 'react';

import BanckDiv from './style';
import {motion} from 'framer-motion';

const Banck: React.FC = () => {
  return (
      <>    
            <BanckDiv>
                <motion.div 
                    className='banck-div-motion'
                >   
                    <div className='banck-div-logo'>
                        <h1>Logo</h1>
                    </div>
                    <div  className='banck-div-info'>
                        <h1>Info</h1>
                    </div>
                </motion.div>
            </BanckDiv>
      </>
  );
}

export default Banck;