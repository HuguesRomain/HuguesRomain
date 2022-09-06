import React, { CSSProperties } from 'react'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'
export class IconsMapping {
  sun = RiSunLine
  moon = RiMoonLine
}

export type IconName = keyof IconsMapping;
const iconsMapping = new IconsMapping()

export type IconProps = {
  name: IconName;
  color: string ;
  size?: number | string;
  onClick?: (e: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  style?: CSSProperties;
};

export const Icon = (props: IconProps) => {
  const CorrespondingIcon = iconsMapping[props.name]

  const style: CSSProperties = {
    ...props.style
  }

  return CorrespondingIcon
    ? (
    <CorrespondingIcon
      onClick={props.onClick}
      size={props.size}
      color={props.color}
      style={style}
    />
      )
    : null
}
