import React from 'react'
import styled from 'styled-components'
import { space } from '../../../../../../../styles/const'
import TitleImg from '../../assets/titlePassionsImg.png'

export const  TitlePassions = () => {
    return (
        <Title src={TitleImg} alt="" />
    )
}

const Title = styled.img`
  width: 204px;
	margin: ${space.l} 0;
`