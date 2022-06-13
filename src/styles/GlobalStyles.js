import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #181611;
    --dark-grey: #666f7d;
    --light-grey: #e4ecf4;
    --primary-green: #1c544D;
    --primary-yellow: #cca21b;
    --secondary-blue: #8a9a9c;
    --secondary-rose: #c4625a;
    --whitespace-primary: 2rem;
    --whitespace-secondary: 3rem;
    --layered-shadow: 0 1px 1px rgb(46 41 51 / 8%),
              0 2px 2px rgb(46 41 51 / 8%),
              0 4px 4px rgb(46 41 51 / 8%),
              0 8px 8px rgb(46 41 51 / 8%);
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;
  }
  
  main {
    height: 100vh;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 4vw 2vw;
  }

  article {
    padding: var(--whitespace-secondary) 0;
  }

  .m-top-3 {
    margin-top: var(--whitespace-secondary);
  }

  .m-top-4 {
    margin-top: 4rem;
  }

  .sr-only {
    position:absolute;
    left:-10000px;
    top:auto;
    width:1px;
    height:1px;
    overflow:hidden;
  }
`;

export default GlobalStyles;
