import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --soft-cyan:hsl(174, 77%, 80%);
    --soft-cyan:hsl(174, 77%, 80%);
    --dark-cyan-slider: hsl(174, 86%, 45%);
    --discount-background: hsl(14, 92%, 95%);
    --discount-text: hsl(15, 100%, 70%);
    --pale-blue-text: hsl(226, 100%, 87%);


    --component-background: hsl(0, 0%, 100%);
    --main-background: hsl(230, 100%, 99%);
    --color-empty-slider-bar: hsl(224, 65%, 95%);
    --toggle-background: hsl(223, 50%, 87%);
    --grayish-blue-text: hsl(225, 20%, 60%);
    --dark-blue: hsl(227, 35%, 25%);

   


  }
 
  html{
    font-size: 10px;
    font-family: 'Manrope', sans-serif;
    
  }

  body {
    width: 100vw;
    margin: 0 auto;
   
  }
  #root {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* ul,li{
    list-style: none;
  } */
  a{
    text-decoration: none;
  }
  img, svg{

    object-fit: cover;
  }
  button{
    outline: none
  }

/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      z-index: 101;
     
      .scrollbar-thumb-y {
        background: var(--gray-1);

      }
    }
  }
`;
export default GlobalStyles;
