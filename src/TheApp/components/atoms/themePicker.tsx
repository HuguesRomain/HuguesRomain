import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { breakPoint, color, iconSize, space } from '../../../styles/const'
import { AppContext } from '../../context'
import { Icon } from './icon'

export const ThemePicker = () => {
  const Context = React.useContext(AppContext)
  const [isDark, setIsDark] = Context.isDarkContext

  const [darkMode, setDarkMode] = useState<boolean>(isDark)
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])

  return (
    <ThemePickerStyled
      onClick={() => {
        setDarkMode((prevState) => !prevState)
        setIsDark()
      }}
    >
      <IconWrapper>
        <Icon
          color={isDark ? color.light.PureWhite : color.darker.DarkBlackBlue}
          name={!isDark ? 'sun' : 'moon'}
          size={iconSize.m}
        />
      </IconWrapper>
    </ThemePickerStyled>
  )
}

const ThemePickerStyled = styled.a<{ isLocation?: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 100;
  cursor: pointer;
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.s};
    background: ${(props) => props.isLocation && '#F8F8F8'};
    border-radius: 10px;
  }
  @media (min-width: ${breakPoint.desktop}) {
    max-width: 200px;
  }
`
const IconWrapper = styled.div`
  @media (min-width: ${breakPoint.tabletPortrait}) {
    padding: ${space.xs};
  }
`
