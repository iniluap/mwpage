import React from 'react';
import styled from 'styled-components';
import Address from '../components/Address';
import OpeningHours from '../components/OpeningHours';

const FooterStyles = styled.footer`
  grid-area: footer;
  padding: 2rem 6rem;
  background-color: var(--primary-yellow);
  color: var(--white);
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--light-grey);
    }
  }

  svg {
    margin-right: 0.5rem;
  }
`;

const FooterColumnStyles = styled.div`
  flex: 1 1 33%;
  max-width: 450px;
`;

const FooterHeadlineStyles = styled.h4`
  text-decoration: underline;
  text-decoration-color: var(--secondary-blue);
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FooterColumnStyles>
        <FooterHeadlineStyles>
          Kancelaria Notarialna Marek Wasilewski
        </FooterHeadlineStyles>
        <Address />
      </FooterColumnStyles>
      <FooterColumnStyles>
        <OpeningHours />
      </FooterColumnStyles>
      <FooterColumnStyles>
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
      </FooterColumnStyles>
    </FooterStyles>
  );
}
