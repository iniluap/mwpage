import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  body {
    color: var(--black);
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 1.7;
    letter-spacing: 0.1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Shadows Into Light', sans-serif;
    font-weight: normal;
    margin: 0;
    line-height: 1.5;
  }

  a {
    color: var(--dark-grey);
    text-decoration-color: var(--primary-green);
    text-decoration-thickness: 0.2rem;

    &:hover {
      color: var(--black);
    }
  }

  .nav-link {
    display: inline-block;
    transition: all 0.2s ease-out;
    font-size: 1.5rem;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      text-decoration: underline var(--primary-green);
      text-decoration-thickness: 0.2rem;
    }
  }

  .center {
    text-align: center;
  }

  p {
    font-size: 1.4rem;
  }

  ul {
    list-style: square;
  }

  .ul-plain {
    margin: 0;
    margin-top: 1.5rem;
    padding: 0;
    list-style: none;
  }

  .ul-links {
    display: flex;
    flex-direction: row;
    gap: var(--whitespace-primary);
  }
`;

export default Typography;
