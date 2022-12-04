import React from 'react';
import styled from 'styled-components';

const CardStyles = styled.section`
  border-left: 2px solid var(--light-accent-color);
  box-shadow: var(--layered-shadow);
  padding: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  h4 {
    color: var(--secondary-color);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
  }

  .date {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: var(--accent-color);
    font-size: 1.2rem;
  }

  a {
    margin-top: 2rem;
    display: block;
  }
`;

export default function Card({ title, subtitle, date, sneakPeak, linkUrl }) {
  return (
    <CardStyles>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p className="date">{date}</p>
      <div>{sneakPeak}</div>
      <a href={linkUrl}>Przeczytaj więcej</a>
    </CardStyles>
  );
}
