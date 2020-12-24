import React from 'react';

import {ScrowDiv, ScrowDivTitle,ScrowDivTitleCard} from './style';
import PeopleScrow from './PeopleScrow/index';


const Scrow: React.FC = () => {
  return (
      <ScrowDiv>
          <br />
          <ScrowDivTitle>
              Testimonials
              <ScrowDivTitleCard>
                  <PeopleScrow urlImage='' name='' email='' text=''/>
                  <PeopleScrow urlImage='' name='' email='' text=''/>
                  <PeopleScrow urlImage='' name='' email='' text=''/>
                  <PeopleScrow urlImage='' name='' email='' text=''/>
                  <PeopleScrow urlImage='' name='' email='' text=''/>
              </ScrowDivTitleCard>
          </ScrowDivTitle>
      </ScrowDiv>
  );
}

export default Scrow;