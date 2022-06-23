import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-area: footer;
  background-color: var(--primary-yellow);
  text-align: center;
  color: var(--white);

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--light-grey);
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>
          Treść tej wizytówki nie stanowi reklamy, w szczególności reklamy
          osobistej, ani oferty w rozumieniu obowiązujących przepisów prawa.
        </p>
        <p>
          &copy; <a href="https://paulina.s-j.me">Paulina Sędłak-Jakubowska</a>{' '}
          {new Date().getFullYear()}
        </p>
        <p>
          Zdjęcie{' '}
          <a href="https://unsplash.com/@beatriz_perez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Beatriz Pérez Moya
          </a>{' '}
          /{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </p>
      </div>
    </FooterStyles>
  );
}
