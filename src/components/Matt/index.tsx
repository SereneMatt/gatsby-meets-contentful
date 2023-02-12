import React from "react";

import { StyledContainer, StyledTitle } from './style';

const Matt = ({ name }: { name: string; }): JSX.Element => <StyledContainer>
  <StyledTitle>{name}</StyledTitle>
  <div>Fullstack Developer</div>
  <div>
    <div>☏ +49 1635022948</div>
    <div>📧 serene1990@gmail.com</div>
    <div>📍 Berlin, Germany</div>
  </div>
  <div>
    <article>
      <div>
        Summary
      </div>
      <div>
        Software Engineer with experience in designing and building products in e-commerce and mobile space. Enjoys building APIs in Node.js, Ruby on Rails and front end user interfaces using Javascript frameworks.
      </div>
    </article>
    <article>
      <div>
        EXPERIENCE
      </div>
      <div>
        <div>
          <div>
            Fullstack Developer
          </div>
          <div>
            <div>
              🗓 09/2019 - Ongoing
            </div>
            <div>
              📍 Berlin
            </div>
          </div>
          <div>
            Fullstack Developer
          </div>
        </div>
        <div>
          <div>
            Fullstack Developer
          </div>
        </div>
      </div>
    </article>
  </div>
  <div>
    <article>
      <div>
        EXPERTISE
      </div>
    </article>
    <article>
      <div>
        OTHER SKILLS
      </div>
    </article>
    <article>
      <div>
        FIND ME ONLINE
      </div>
    </article>
  </div>
</StyledContainer>;

export default Matt;