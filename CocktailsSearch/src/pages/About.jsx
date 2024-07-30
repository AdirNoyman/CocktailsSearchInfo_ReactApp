import React from 'react';

import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/About';

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in nam
        consequuntur veniam perspiciatis reiciendis fugit ducimus delectus
        impedit iure dolore tempore veritatis nemo quod, quam ipsum illo,
        voluptatibus numquam?
      </p>
    </Wrapper>
  );
};

export default About;
