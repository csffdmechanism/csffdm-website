import * as React from 'react';

// Example of preload fonts
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
    />,
    <script
      key="bablic-script"
      dangerouslySetInnerHTML={{
        __html: `
          (function(bablic,cid){window.bablic=bablic=bablic||function(){(bablic.q=bablic.q||[]).push(arguments)};var l=document.createElement("script");l.async=1;l.src="https://cdn.bablic.com/js/bablic.3.1.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(l,s)}(window.bablic, '664cad41638e990014362734'));
        `,
      }}
    />,
  ]);
};
