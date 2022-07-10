import React from 'react';
import styled from 'styled-components';
import Address from '../components/Address';
import OpeningHours from '../components/OpeningHours';

const FooterStyles = styled.footer`
  grid-area: footer;
  padding: var(--whitespace-primary) var(--main-container-padding);
  background-color: var(--primary-yellow);
  color: var(--white);
  font-size: 1.2rem;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--whitespace-primary);
    justify-content: center;
    grid-template-areas:
      'address address opening opening'
      'note note note note';
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: minmax(150px, 300px) minmax(150px, 300px) minmax(
        150px,
        300px
      );
    grid-template-areas: 'address opening note';
  }

  h4 {
    text-decoration: underline;
    text-decoration-color: var(--secondary-blue);
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
  &:first-of-type {
    grid-area: address;
  }

  &:nth-child(2) {
    grid-area: opening;
  }

  &:last-of-type {
    grid-area: note;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FooterColumnStyles>
        <h4>Kancelaria Notarialna Marek Wasilewski</h4>
        <Address />
      </FooterColumnStyles>
      <FooterColumnStyles>
        <OpeningHours />
      </FooterColumnStyles>
      <FooterColumnStyles>
        <p>
          Treść tej wizytówki nie stanowi reklamy, w&nbsp;szczególności reklamy
          osobistej, ani oferty w&nbsp;rozumieniu obowiązujących przepisów
          prawa.
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
