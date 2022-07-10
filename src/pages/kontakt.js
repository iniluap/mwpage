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
  }

  h4 {
    margin-top: var(--whitespace-primary);
    margin-bottom: var(--whitespace-primary);
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
          <h4>Dane kontaktowe</h4>
          <Address />
        </div>
        <OpeningHours />
        <div>
          <h4>NIP</h4>
          <p>6692481911</p>
          <h4>REGON</h4>
          <p>521139370</p>
        </div>
        <div>
          <h4>Nr bieżącego rachunku bankowego</h4>
          <p>36 1050 1025 1000 0092 9333 4992</p>
          <h4>Nr depozytowego rachunku bankowego</h4>
          <p>52 1050 1025 1000 0092 9333 5577</p>
        </div>
      </div>
    </ContactStyles>
  );
}
