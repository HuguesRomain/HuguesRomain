import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { breakPoint, fontSize, GradientText, TextGradientAnimated } from '../../../../../styles/const'
import { TitleGradient } from './titleGradient'


export const IntroductorySection = () => {
  return (
    <IntroductorySectionWrapper>
      <TitleGradient />
        <TextItem>
            <IntroducyText>Hello,</IntroducyText>
            <IntroducyText>
              I&apos;m <GradientText>Hugues</GradientText>
            </IntroducyText>
          <IntroducySubtitleText>Developer & Designer</IntroducySubtitleText>
        </TextItem>
    </IntroductorySectionWrapper>
  )
}
   
const TextItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  z-index: 1;
  @media (min-width: ${breakPoint.desktop}) {
   margin-right: 400px;
  }
`

const IntroductorySectionWrapper = styled.div`  
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  height: 100vh;
`

const IntroducyText = styled.p`
  width: fit-content;
  font-size: ${fontSize.xxl};
  @media (min-width: ${breakPoint.desktop}) {
    font-size: ${fontSize.xxxl};
  }
`

const IntroducySubtitleText = styled.p`
  width: fit-content;
  font-size: ${fontSize.xl};
  @media (min-width: ${breakPoint.desktop}) {
    font-size: ${fontSize.xxl};
  }
`
