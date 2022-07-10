import React from 'react';
import styled from 'styled-components';

const OpeningTableStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.2rem;
`;

export default function OpeningHours() {
  return (
    <div>
      <h4>Godziny otwarcia</h4>
      <OpeningTableStyles className="m-ver-2">
        <span>poniedziałek:</span>
        <strong>12:00 – 20:00</strong>
        <span>wtorek:</span>
        <strong>12:00 – 20:00</strong>
        <span>środa:</span>
        <strong>9:00 – 17:00</strong>
        <span>czwartek:</span>
        <strong>9:00 – 17:00</strong>
        <span>piątek:</span>
        <strong>8:00 – 14:00</strong>
      </OpeningTableStyles>
    </div>
  );
}
