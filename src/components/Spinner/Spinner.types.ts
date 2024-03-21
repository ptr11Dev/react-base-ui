import { CSSProperties } from 'styled-components'

export type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  type?: 'basic' | 'dual' | 'dots' | 'fadingDots'
  color?: CSSProperties['color']
  offColor?: CSSProperties['color']
  backgroundColor?: CSSProperties['color']
}
