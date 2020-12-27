import React from 'react';

import {ScrowDiv, ScrowDivTitle,ScrowDivTitleCard, ScrowDivTitleLink} from './style';
import PeopleScrow from './PeopleScrow/index';
import PeopleImage from '../../assets/icons/PeopleImage.png';


const Scrow: React.FC = () => {
  function ClickSlider1 () {
    var scrow = document.querySelector(".ScrowDivTitleCard");
    console.log(scrow?.animate);
  }
  return (
      <ScrowDiv>
          <br />
          <ScrowDivTitle>
              Testimonials
              <ScrowDivTitleCard className='ScrowDivTitleCard'>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
                  <div className="ScrowDivTitleCardDiv">
                    <PeopleScrow urlImage={PeopleImage} name='John Fang' email='wordfaang.com' text='Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor 
                    ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'/>
                  </div>
              </ScrowDivTitleCard>
              <ScrowDivTitleLink>
                <a className='slide-1' href="#slide-1" onClick={ClickSlider1}>.</a>
                <a className='slide-1' href="#slide-2" onClick={ClickSlider1}>.</a>
                <a className='slide-1' href="#slide-3" onClick={ClickSlider1}>.</a>
                <a className='slide-1' href="#slide-4" onClick={ClickSlider1}>.</a>
              </ScrowDivTitleLink>
          </ScrowDivTitle>
      </ScrowDiv>
  );
}

export default Scrow;