import React,{useState} from 'react';

import {ScrowDiv, ScrowDivTitle,ScrowDivTitleCard, ScrowDivTitleLink} from './style';
import {motion} from 'framer-motion';
import PeopleScrow from './PeopleScrow/index';
import PeopleImage from '../../assets/icons/PeopleImage.png';
import PeopleImage1 from '../../assets/icons/PeopleImage1.png';
import PeopleImage2 from '../../assets/icons/PeopleImage2.png';


const Scrow: React.FC = () => {
  const [scrowTranslateX,setScrowTranslateX] = useState(0);
  function ClickSlider1 () {
    setScrowTranslateX(0);
  }
  function ClickSlider2 () {
    setScrowTranslateX(-330);
  }
  function ClickSlider3 () {
    setScrowTranslateX(-630);
  }
  function ClickSlider4 () {
    setScrowTranslateX(-960);
  }
  return (
      <ScrowDiv>
          <br />
          <ScrowDivTitle>
              Testimonials
              <ScrowDivTitleCard className='ScrowDivTitleCard'>
                <motion.div className='ScrowDivTitleCardMotion'
                   animate={{ translateX:scrowTranslateX}}
                   transition={{ duration: 2 }}
                >
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage1} name='Jeny Doe' email='UX Engineer' text='Suspendisse ultrices at diam lectus nullam.
                     Nisl, sagittis viverra enim erat tortor.'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage2} name='William' email='Web Designer' text='Suspendisse ultrices at diam lectus nullam. 
                    Nisl, sagittis viverra enim erat tortor'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
                </motion.div>
              </ScrowDivTitleCard>
              <ScrowDivTitleLink>
                <a className='slide-1' id='radio1' href="#slide-1" onClick={ClickSlider1}>.</a>
                <a className='slide-1' id='radio2' href="#slide-2" onClick={ClickSlider2}>.</a>
                <a className='slide-1' id='radio3' href="#slide-3" onClick={ClickSlider3}>.</a>
                <a className='slide-1' id='radio4' href="#slide-4" onClick={ClickSlider4}>.</a>
              </ScrowDivTitleLink>
          </ScrowDivTitle>
      </ScrowDiv>
  );
}

export default Scrow;