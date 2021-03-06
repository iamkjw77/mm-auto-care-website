import React from 'react';
import styled, { css } from 'styled-components';
import { fontSizes, calcRem, device, colors } from 'theme/theme';

const StyledSubPageContainer = styled.section``;

const FullContainer = styled.div`
  max-width: ${calcRem(1200)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${calcRem(55)} 0 ${calcRem(80)};
  ${({ type }) => type !== 'img' && css``}

  h1 {
    font-weight: 800;
    font-family: Montserrat;
    font-size: ${fontSizes.titleLarge};
  }

  p {
    font-weight: 700;
    font-size: ${fontSizes.xl};
    margin-top: ${calcRem(30)};
  }

  ${device.tablet} {
    padding: ${calcRem(13)} ${calcRem(15)};
    h1 {
      font-size: ${fontSizes.xl};
      font-weight: 700;
    }
    p {
      margin-top: ${calcRem(5)};
      font-size: ${fontSizes.small};
      color: ${colors.gray};
      text-align: center;
    }
    img {
      width: 100%;
    }
  }
`;

const SubPageTitle = ({ type, imagePath, title, desc }) => {
  return (
    <StyledSubPageContainer>
      <FullContainer>
        <h1>{type === 'img' ? <img src={imagePath} alt={title} /> : title}</h1>
        <p>{desc}</p>
      </FullContainer>
    </StyledSubPageContainer>
  );
};

export default SubPageTitle;
