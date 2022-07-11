import React from 'react';
import styled from 'styled-components';
import Address from '../components/Address';
import OpeningHours from '../components/OpeningHours';

const FooterStyles = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-areas:
    'address'
    'opening'
    'note';
  padding: var(--whitespace-primary) var(--main-container-padding);
  background-color: var(--accent-color);
  color: var(--white);
  font-size: 1.3rem;

  @media screen and (min-width: 600px) {
    gap: var(--whitespace-primary);
    grid-template-columns: 1fr 1fr 1fr 1fr;
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
    margin-bottom: var(--whitespace-primary);
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
  }

  a {
    color: var(--white);
    text-decoration: none;

    &:hover {
      color: var(--light-accent-color);
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

const NoteStyles = styled.p`
  margin: 0 0 var(--whitespace-primary);
  font-size: 1.2rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <FooterColumnStyles>
        <h4>
          Kancelaria Notarialna
          <br />
          Marek Wasilewski
        </h4>
        <Address />
      </FooterColumnStyles>
      <FooterColumnStyles className="m-ver-2">
        <OpeningHours />
      </FooterColumnStyles>
      <FooterColumnStyles className="m-ver-2">
        <NoteStyles>
          Treść tej wizytówki nie stanowi reklamy, w&nbsp;szczególności reklamy
          osobistej, ani oferty w&nbsp;rozumieniu obowiązujących przepisów
          prawa.
        </NoteStyles>
        <NoteStyles>
          &copy; <a href="https://paulina.s-j.me">Paulina Sędłak-Jakubowska</a>{' '}
          {new Date().getFullYear()}
        </NoteStyles>
        <NoteStyles>
          Zdjęcie{' '}
          <a href="https://unsplash.com/@beatriz_perez?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Beatriz Pérez Moya
          </a>{' '}
          /{' '}
          <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        </NoteStyles>
      </FooterColumnStyles>
    </FooterStyles>
  );
}
