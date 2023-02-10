import React from "react";

import { StyledContainer, StyledTitle } from './style';

const Matt = ({ name }: { name: string; }): JSX.Element => <StyledContainer>
  <StyledTitle>{name}</StyledTitle></StyledContainer>;

export default Matt;