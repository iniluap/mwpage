import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const HeaderStyles = styled.header`
  background: linear-gradient(
      180deg,
      rgba(45, 66, 99, 0.65) 0%,
      rgba(221, 223, 225, 0.76) 30%,
      rgba(236, 219, 186, 0.15) 60%
    ),
    rgba(256, 256, 256, 1) 80%;

  @media screen and (min-width: 768px) {
    background: none;
    height: var(--header-height);
    display: flex;
    align-items: center;
  }

  & > div {
    margin: 12rem 2em 4rem 2rem;
    z-index: 1;

    @media screen and (min-width: 768px) {
      margin: 20rem auto 0;
      padding: 0 var(--main-container-padding);
      height: min-content;
      max-width: 1000px;
      flex-grow: 1;
    }
  }

  h1 {
    font-size: clamp(3rem, 7vw, 5rem);
    margin: 0.5rem 0;
    position: relative;
    z-index: 1;
  }

  h2 {
    color: var(--accent-color);
  }
`;

const HeaderImageWrapperStyles = styled.figure`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: var(--header-height);
    margin: 0;
    position: absolute;
    top: 0;
    left: auto;
    right: 0;
    overflow-y: clip;
    z-index: 0;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div>
        <h1>
          Marek
          <br />
          Wasilewski
        </h1>
        <h2>notariusz</h2>
      </div>
      <HeaderImageWrapperStyles>
        <StaticImage
          src="../images/header-image.jpg"
          alt=""
          placeholder="blurred"
          loading="eager"
        />
      </HeaderImageWrapperStyles>
    </HeaderStyles>
  );
}
