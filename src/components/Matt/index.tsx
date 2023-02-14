import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  ContactContainer,
  StyledSubHeading,
  StyledContent
} from './style';

const Matt = ({ name }: { name: string }): JSX.Element => (
  <StyledContainer>
    <StyledTitle>{name}</StyledTitle>
    <StyledSubTitle>Fullstack Developer</StyledSubTitle>
    <ContactContainer>
      <div>☏ +49 1635022948</div>
      <div>📧 serene1990@gmail.com</div>
      <div>📍 Berlin, Germany</div>
    </ContactContainer>
    <div>
      <article>
        <StyledSubHeading>Summary</StyledSubHeading>
        <StyledContent>
          Software Engineer with experience in designing and building products
          for web and mobile space. Enjoys building APIs in Node.js, Ruby on
          Rails and front end user interfaces using Javascript frameworks.
        </StyledContent>
      </article>
      <article>
        <StyledSubHeading>EXPERIENCE</StyledSubHeading>
        <div>
          <div>
            <div>Fullstack Developer</div>
            <div>
              <div>🗓 09/2019 - Ongoing</div>
              <div>📍 Berlin</div>
            </div>
            <div>Fullstack Developer</div>
          </div>
          <div>
            <div>Fullstack Developer</div>
          </div>
        </div>
      </article>
    </div>
    <div>
      <article>
        <StyledSubHeading>EXPERTISE</StyledSubHeading>
      </article>
      <article>
        <StyledSubHeading>OTHER SKILLS</StyledSubHeading>
      </article>
      <article>
        <StyledSubHeading>FIND ME ONLINE</StyledSubHeading>
      </article>
    </div>
  </StyledContainer>
);

export default Matt;
