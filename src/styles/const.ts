import styled, { css, keyframes } from "styled-components"

export const color = {
  light: {
    PureWhite: '#ffffff',
    LightWhiteBlue: '#EEF0FC'
  },
  medium: {
    LightGreyBlue: '#DADCE9',
    DarkGreyBlue: '#353954'
  },
  darker: {
    DarkBlackBlue: '#212541'
  },
  gradient: 'linear-gradient(90deg, rgba(42,163,255,1) 0%, rgba(198,59,255,1) 100%)'
}

export const breakPoint = {
  mobileOnly: '599px',
  tabletPortrait: '600px',
  tabletLandscape: '1199px',
  desktop: '1200px'
}

export const font = {
  avenir: 'Avenir',
  josefin: 'Josefin Sans'
}

export const fontWeight = {
  avenir: {
    m: 500,
    l: 800
  },
  josefin: {
    s: 600,
    m: 'normal',
    l: 'bold'
  }
}

export const fontSize = {
  xs: '12px',
  s: '14px',
  m: '16px',
  l: '18px',
  xl: '24px',
  xxl: '32px',
  xxxl: '40px',
  xxxxl: '42px'
}

export const titeFontsize = {
  s: '20px',
  m: '46px',
  l: '90px'
}

export const space = {
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '48px',
  xl: '80px'
}

export const iconSize = {
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px'
}

export const boxShadows = {
  light: '-2px 9px 21px 0px rgba(255,255,255,0.79) inset;'
}

export const transitionTime = '0.7s'

export const TextGradientAnimated = keyframes`
    from{
      background-position: 0%
    }
    to{
      background-position: 100%
    }
`


export const GradientText = styled.span`
  font-weight: bold;
  background-image: linear-gradient(90deg, rgba(42,163,255,1) 0%, rgba(198,59,255,1) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent; 
  background-size: 300%;
  background-position: -200%;
  animation: ${TextGradientAnimated} 2s infinite alternate-reverse;
`;


