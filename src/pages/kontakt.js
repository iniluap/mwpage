import React from 'react';
import styled from 'styled-components';
import SectionHeader from '../components/SectionHeader';
import Address from '../components/Address';
import OpeningHours from '../components/OpeningHours';

const ContactStyles = styled.div`
  .card-wrapper {
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    @media screen and (min-width: 768px) {
      div:last-child {
        grid-column: 1 / span 2;
      }
    }
  }

  h4 {
    text-decoration: underline;
    text-decoration-color: var(--primary-yellow);
    font-weight: bolder;
  }
`;

export default function KontaktPage() {
  return (
    <ContactStyles>
      <SectionHeader sectionTitle="Kontakt" />
      <h3>Kancelaria Notarialna Marek Wasilewski</h3>
      <div className="card-wrapper">
        <div className="contact-page-address">
          <h4 className="m-ver-2">Dane kontaktowe</h4>
          <Address />
        </div>
        <OpeningHours />
        <div>
          <p>NIP: 6692481911</p>
          <p>REGON: 521139370</p>
          <p>
            Nr bieżącego rachunku bankowego: 36 1050 1025 1000 0092 9333 4992
          </p>
          <p>
            Nr depozytowego rachunku bankowego: 52 1050 1025 1000 0092 9333 5577
          </p>
        </div>
      </div>
    </ContactStyles>
  );
}
