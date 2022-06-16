import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderStyles = styled.header`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 4rem;
    align-items: end;
    margin-bottom: 6rem;
  }

  div {
    margin-top: 3rem;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      height: min-content;
    }
  }

  h1 {
    font-size: clamp(3rem, 7vw, 5rem);
    margin: 0.5rem 0;
    position: relative;
    z-index: 1;
  }

  h2 {
    color: var(--primary-yellow);
  }
`;

const HeaderImageWrapperStyles = styled.figure`
  position: relative;
  margin: 0 auto;
  max-width: 250px;

  @media (min-width: 768px) {
    margin: 0;
    max-width: 350px;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <HeaderImageWrapperStyles>
        <StaticImage src="" alt="" placeholder="blurred" loading="eager" />
      </HeaderImageWrapperStyles>
      <div>
        <h1>
          Marek
          <br />
          Wasilewski
        </h1>
        <h2>notariusz</h2>
      </div>
    </HeaderStyles>
  );
}
