import styled from 'styled-components';

export const StyledContainer = styled.div`
  border: grey solid 1px;
  background-color: white;
  margin: 20px;
  padding: 30px;
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  margin-bottom: 0px;
`;

export const StyledSubTitle = styled.div`
  font-weight: 500;
  color: rgb(0, 140, 255);
  font-size: 21px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledSubHeading = styled.h2`
  text-transform: uppercase;
  color: rgb(0, 0, 0);
  border-bottom: 3px solid rgb(0, 0, 0);
`;

export const StyledContent = styled.div`
  padding: 0 0 6px;
`;

export const Role = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const StyledUl = styled.ul`
  margin-top: 0px;
  padding-inline-start: 20px;
`;
