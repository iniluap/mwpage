import React from 'react';
import styled from 'styled-components';
import ResourceLinks from './ResourceLinks';

const CardStyles = styled.section`
  border: 2px solid var(--primary-yellow);
  box-shadow: var(--layered-shadow);
  padding: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  h4 {
    color: var(--secondary-rose);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  .date {
    color: var(--secondary-blue);
    font-size: 1.2rem;
  }
`;

export default function Card({
  title,
  subtitle,
  date,
  content,
  link1Url,
  link1AltText,
  link1,
  link2Url,
  link2AltText,
  link2,
}) {
  return (
    <CardStyles>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p className="date">{date}</p>
      <div>{content}</div>
      <ResourceLinks
        link1Url={link1Url}
        link1AltText={link1AltText}
        link1={link1}
        link2Url={link2Url}
        link2AltText={link2AltText}
        link2={link2}
      ></ResourceLinks>
    </CardStyles>
  );
}
