import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { color, transitionTime } from '../styles/const'
import { AppContext } from './context'
import { isDarkStorage } from './utils/accessStorage'

export const AppFrame = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDarkContext] = useState<boolean>(isDarkStorage())

  const setIsDark = () => {
    setIsDarkContext(!isDark)
  }

  const theme = {
    color: isDark ? color.light.LightWhiteBlue : color.darker.DarkBlackBlue,
    backgroundColor: isDark ? color.darker.DarkBlackBlue : color.light.LightWhiteBlue
  }

  return (
    <AppContext.Provider
      value={{
        isDarkContext: [isDark, setIsDark]
      }}
    >
      <ThemeProvider theme={theme}>
        <BackgroundContext isDark={isDark}>{children}</BackgroundContext>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

const BackgroundContext = styled.div<{ isDark: boolean }>`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
  transition: ${transitionTime};
  z-index: -1000;
  height: 100%;
  position: relative;
  z-index: -1;
`
