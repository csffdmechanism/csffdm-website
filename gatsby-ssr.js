import * as React from 'react';

// Example of preload fonts
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />,
    <script src="//d.bablic.com/snippet/664cad41638e990014362734.js"></script>,
  ]);
};
