import { createGlobalStyle } from 'styled-components'
import JosefinSansItalic from './assets/fonts/josefinSansItalic.ttf'
import JosefinSans from './assets/fonts/josefinSans.ttf'
import Avenir from './assets/fonts/AvenirLTStd-Medium.otf'
import YasashisaGothic from './assets/fonts/YasashisaGothicBold-V2.otf'

export const GlobalStyled = createGlobalStyle`
@font-face {
  font-family: "JosefinSans";
  font-style: normal;
  src: url(${Avenir}) format("truetype");
}
  *{
    box-sizing: border-box;
transition: fill 1s ease;
:focus {
    outline: none;
}
// Todo : init Normalize()
  a {
  color: grey;
  text-decoration: none; /* no underline */
  }
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
font-family: "JosefinSans";
  }
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
font-family: "JosefinSans";
}
ol, ul {
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
@keyframes pulse {
  0% {
    opacity: 0.5;
  }
  100%{
    transform: scale(3);
    opacity: 0;
  }
}
@font-face {
  font-family: "Josefin";
font-style: italic;
  src: url(${JosefinSansItalic}) format("truetype");
}
@font-face {
  font-family: "JosefinSans";
  src: url(${JosefinSans}) format("truetype");
}

@font-face {
  font-family: "YasashisaGothic";
  src: url(${YasashisaGothic}) format("truetype");
}
`
