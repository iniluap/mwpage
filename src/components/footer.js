import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  grid-area: footer;
  text-align: center;
  color: var(--dark-grey);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>
          Treść tej wizytówki nie stanowi reklamy, w szczególności reklamy
          osobistej, ani oferty w rozumieniu obowiązujących przepisów prawa.
        </p>
        <p>&copy; Paulina Sędłak-Jakubowska {new Date().getFullYear()}</p>
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
