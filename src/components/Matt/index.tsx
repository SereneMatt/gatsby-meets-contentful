import React from 'react';

import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
  InfoContainer,
  StyledSubHeading,
  StyledContent,
  Role,
  StyledUl
} from './style';

const Matt = ({ name }: { name: string }): JSX.Element => (
  <StyledContainer>
    <StyledTitle>{name}</StyledTitle>
    <StyledSubTitle>Fullstack Developer</StyledSubTitle>
    <InfoContainer>
      <div>☏ +49 1635022948</div>
      <div>📧 serene1990@gmail.com</div>
      <div>📍 Berlin, Germany</div>
    </InfoContainer>
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
            <Role>Fullstack Developer at Babbel</Role>
            <InfoContainer>
              <div>🗓 09/2019 - Ongoing</div>
              <div>📍 Berlin</div>
              <div>🌎 https://about.babbel.com</div>
            </InfoContainer>
            <div>
              Roles and responsibilities:
              <StyledUl>
                <li>
                  Developing web applications for the language learning
                  platform.
                </li>
                <li>
                  Majorly works with React, Gatsby, Node.js, Typescript, AWS and
                  Ruby.
                </li>
                <li>Involved in designing APIs and software architectures.</li>
                <li>
                  Leads engineering solutions for marketing related content
                  management.
                </li>
                <li>
                  Played an important role in creating pages for subscription
                  and pricing plans for Babbel.
                </li>
                <li>
                  Ideated and worked on internal products that help SEO managers
                  optimize landing pages.
                </li>
                <li>Won twice at Babbel's annual hackday.</li>
              </StyledUl>
            </div>
          </div>
          <div>
            <Role>Fullstack Developer at TATA Consultancy Services (TCS)</Role>
            <InfoContainer>
              <div>🗓 02/2013 - 08/2019</div>
              <div>📍 Kochi</div>
              <div>🌎 https://www.tcs.com/</div>
            </InfoContainer>
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
