import React from 'react'
import styled from 'styled-components'
import { GradientText, space } from '../../../../../styles/const'
import { PassionBlock } from './components/titlePassions/passionBlock'
import { TitlePassions } from './components/titlePassions/title'
import PokemonGif from './assets/pokemon.gif'
import MusicGif from './assets/music.gif'
import SportGif from './assets/sport.gif'
import CodingGif from './assets/coding.gif'

export const PassionsSection = () => {

	const passionBlocks = [
		{
		text: <><GradientText>Video Games</GradientText> rocked my childhood and followed me throughout my life and year after year have helped to build the person I am and the creativity that fills me.</>,
		img: PokemonGif
		},
		{
			text: <><GradientText>Music</GradientText> punctuates my daily life, I listen to it absolutely all the time, whether it&rsquo;s trap, rap, lofi, jazz or metal. 
						The style will adapt to my mood and help me with any task. It&rsquo;s really something important to me</>,
			img: MusicGif
		},
		{
			text: <><GradientText>Sport</GradientText> is very present in my daily life. feeling good in my body and my soul is essential. It also allows me to express my 
						desire to surpass myself and maintain my competitive spirit.</>,
			img: SportGif
		},
		{
			text: <><GradientText>Coding</GradientText> ! of course 😄 is one of my passions. But more than the code, creation is a passion for me.
						Creation is something that I work on all the time while learning every day which allows me to expand my zone of freedom</>,
			img: CodingGif
		}
	]

    return (
    <PassionsLayout>
      <TitlePassions />
      {passionBlocks.map((passionBlock, i) => <PassionBlock key={i} img={passionBlock.img} text={passionBlock.text}/>)}
		</PassionsLayout>
    )
}

const PassionsLayout = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin: 0 ${space.m}
`
