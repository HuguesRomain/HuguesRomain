import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { color } from '../../../styles/const';
import { AppContext } from '../../context';


const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

export const BackgroundUiLayout = () => {
  return (
  <WrapperUi>
    <UICharactersAndLine />
    <UICharactersAndLine />
    <UICharactersAndLine />
  </WrapperUi>
  )
}

const UICharactersAndLine = () => {
  const JapaneseCharacters = ['プ', 'ゼ', 'レ', 'ミ', '私', 'の', '情', '熱', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ']
  const returnRandomJapaneseCharacter = () => {
    return JapaneseCharacters[Math.round(getRandomArbitrary(0, JapaneseCharacters.length))]
  }

  const generateOrientation = () => {
    return {a: getRandomArbitrary(-90, 90), b: getRandomArbitrary(-90, 90)}
  }

  const Context = React.useContext(AppContext)
  const [isDark] = Context.isDarkContext

  return (
    <div>
      <Line isDark={isDark}/>
      <ClimbingText  orientation={generateOrientation()} climbingSpeed={getRandomArbitrary(5, 10)}>
        {returnRandomJapaneseCharacter()}
      </ClimbingText>
    </div>
  )
}

const scrollDesktop = (orientationA: number, orientationB: number) => keyframes`
    0% {
        transform : translate(0, 100%) rotate(${orientationA}deg);
    }
    100% {
        transform :translate(0, -1000%) rotate(${orientationB}deg);
    }
`;


const WrapperUi = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
`

const ClimbingText = styled.p<{climbingSpeed: number, orientation: {a: number, b: number}}>`
  font-size: 211px;
  font-family: YasashisaGothic;
  animation: ${props => scrollDesktop(props.orientation.a, props.orientation.b)} ${props => `${props.climbingSpeed}s linear infinite`} ;
  bottom: 0;
  opacity: 10%;
  position: absolute;
  overflow: hidden;
`

const Line = styled.div<{isDark: boolean}>`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: ${props => props.isDark ? color.light.LightWhiteBlue : color.darker.DarkBlackBlue };
  opacity: 10%;
  z-index: 1;
  overflow: hidden;
`

