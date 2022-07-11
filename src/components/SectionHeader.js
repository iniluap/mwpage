import React from 'react';
import styled from 'styled-components';

const SectionHeaderStyles = styled.h2`
  font-size: 3rem;
  margin: 0 0 var(--whitespace-secondary);
`;

export default function SectionHeader({ sectionTitle }) {
  return <SectionHeaderStyles>{sectionTitle}</SectionHeaderStyles>;
}
