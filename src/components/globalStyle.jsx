import React from 'react';
import { Global, css } from '@emotion/react';

export const styles = css`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;800&display=swap');

:root {
    --orange       : rgb(255, 97, 88);
    --mobFontSize  : 2.2rem;
    --desFontSizeS : 2.7rem;
    --desFontSizeM : 3rem;
    --desFontSizeL : 3.5rem;
    }

*, *::after, *::before {
    margin      : 0;
    padding     : 0;
    box-sizing  : border-box;
    font-family : 'Work Sans', sans-serif;
    }

html {
    font-size : 62.5%;
    }

body {
    font-size : 1.6rem;
    }

a, a:visited, a:focus, a:hover {
    color : black;
    }

h2, h2  a, input[type="submit"]{
    font-size: var(--mobFontSize);
}
`;

export default function GlobalStyle() {
  return <Global styles={styles} />;
}
