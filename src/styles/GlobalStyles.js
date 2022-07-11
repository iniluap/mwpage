import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #181611;
    --grey: #666f7d;
    --primary-color: #2D4263;
    --secondary-color: #191919;
    --accent-color: #C84B31;
    --light-accent-color: #ECDBBA;
    --whitespace-primary: 2rem;
    --whitespace-secondary: 3rem;
    --whitespace-ternary: 4rem;
    --header-height: 500px;
    --main-container-width: 1000px;
    --main-container-padding: 5vw;
    --layered-shadow:
      0 1px 1px rgb(46 41 51 / 8%),
      0 2px 2px rgb(46 41 51 / 8%),
      0 4px 4px rgb(46 41 51 / 8%),
      0 8px 8px rgb(46 41 51 / 8%);
    --border-radius: 5px;
    @media screen and (min-width: 768px) {
      --main-container-padding: 2vw;
    }
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
    margin: 0 auto;
    padding: 0;
  }

  article {
    padding: var(--whitespace-secondary) 0;
  }

  .m-ver-2 {
    margin-top: var(--whitespace-primary);
    margin-bottom: var(--whitespace-primary);
  }

  .m-top-3 {
    margin-top: var(--whitespace-secondary);
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
