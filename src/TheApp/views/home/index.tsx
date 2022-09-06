import React from 'react'
import styled, { keyframes } from 'styled-components'
import { color, space } from '../../../styles/const'
import { ThemePicker } from '../../components/atoms/themePicker'
import { BackgroundUiLayout } from '../../components/ui/backgroundLines'
import { IntroductorySection } from './sections/introduction'
import { PassionsSection } from './sections/passions'




export const Home = () => {
  return (
    <> 
      <BackgroundUiLayout />
			<ThemePicker />
      <IntroductorySection />
      <PassionsSection />
    </>
  )
}

