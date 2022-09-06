import React from 'react'
import styled from 'styled-components'
import { breakPoint, fontSize, space } from '../../../../../../../styles/const'

export const PassionBlock = ({img, text}: {img: string, text: React.ReactNode}) => {
    return (
      <PassionBlockWrapper>
        <GifStyle src={img} alt="" />
       <TextPassionBlock>{text}</TextPassionBlock> 
      </PassionBlockWrapper>
    )
}

const PassionBlockWrapper = styled.div`
  margin: ${space.m} 0;
`

const GifStyle = styled.img`
  width: 100%;
  height: 186px;
  border-radius: 14px;

  @media (min-width: ${breakPoint.desktop}) {
    width: 467px;
    height: 253px;
  }
`

const TextPassionBlock = styled.p`
  line-height: 20px;
  text-align: center;
  margin: ${space.s} 0;
  font-size: ${fontSize.m};
  @media (min-width: ${breakPoint.desktop}) {
    width: 467px;
    text-align: left;
  }
`