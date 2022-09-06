import React from 'react'
import styled, { keyframes } from 'styled-components'
import TitleMobile from './introductionTitleMobile.png'
import TitleDesktop from './introductionTitleDesktop.png'
import { breakPoint, color, transitionTime } from '../../../../../styles/const'
import { AppContext } from '../../../../context'

export const TitleGradient = () => {
  const Context = React.useContext(AppContext)
  const [isDark] = Context.isDarkContext
    return (
      <>
        <ContainerMobile>
          <TitleImgMobile src={TitleMobile} alt="" />
          <TitleImgMobile src={TitleMobile} alt="" />
        </ContainerMobile>
        <ContainerDesktop>
          <TitleImgDesktop src={TitleDesktop} alt="" />
          <TitleImgDesktop src={TitleDesktop} alt="" />
        </ContainerDesktop>
        {/* <GradientTrasparent color={isDark ? color.darker.DarkBlackBlue : color.light.LightWhiteBlue}/> */}
      </>
     
    )
  }


  const GradientTrasparent = styled.div`
    height: 500px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-image: ${props => `linear-gradient(to bottom, rgba(255,0,0,0), ${props.color})`};
    z-index: 2;
  `
  
  export const scrollMobile = keyframes`
      from{
        transform: translate(0, 0);
      }
      to{
        transform: translate(-100%, 0);
      }
  `
  
  export const scrollDesktop = keyframes`
      from{
        transform: translate(0, 0);
      }
      to{
        transform: translate(0, -100%);
      }
  `
  const TitleImgDesktop = styled.img`
    width: 500px;
    animation: ${scrollDesktop} 15s linear infinite;
  `
  
  const ContainerDesktop = styled.div`
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 100px;
    height: 100vh;
    z-index: 1;
    @media (max-width: ${breakPoint.desktop}) {
      display: none;
    }
  `

  
  const TitleImgMobile = styled.img`
    width: 500px;
    animation: ${scrollMobile} 15s linear infinite;
  `
  
  
  const ContainerMobile = styled.div`
    overflow: hidden;
    width: 100%;
    position: absolute;
    display: flex;
    top: 100px;
    @media (min-width: ${breakPoint.desktop}) {
      display: none;
    }
  `