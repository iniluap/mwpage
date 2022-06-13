import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.div`
  margin-bottom: var(--whitespace-secondary);

  h2 {
    font-size: 3rem;
    margin: 0 0 var(--whitespace-primary);
  }
`;

export default function SectionHeader({ sectionTitle, sectionLead }) {
  return (
    <SectionHeaderStyles>
      <h2>{sectionTitle}</h2>
      {sectionLead && <p>{sectionLead}</p>}
    </SectionHeaderStyles>
  );
}
