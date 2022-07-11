import * as React from 'react';
import { Link } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Strona nie istnieje</title>
      <h1 style={headingStyles}>Nie znaleziono strony</h1>
      <p style={paragraphStyles}>
        Przepraszamy, nie mogliśmy znaleźć strony, której szukasz.
        <br />
        <Link to="/">Strona główna</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
