import {
  DualRingSpinnerContainer,
  FadingDotsSpinnerContainer,
  PrimarySpinnerContainer,
  WavingDotsSpinnerContainer,
} from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

const WavingDotsSpinner = ({
  size = 'md',
  $color,
  $backgroundColor,
}: {
  size?: SpinnerProps['size']
  $color?: SpinnerProps['$color']
  $backgroundColor?: SpinnerProps['$backgroundColor']
}) => {
  return (
    <WavingDotsSpinnerContainer size={size} $color={$color} $backgroundColor={$backgroundColor}>
      <div></div>
      <div></div>
      <div></div>
    </WavingDotsSpinnerContainer>
  )
}

const FadingDotsSpinner = ({
  size = 'md',
  $color,
  $backgroundColor,
}: {
  size?: SpinnerProps['size']
  $color?: SpinnerProps['$color']
  $backgroundColor?: SpinnerProps['$backgroundColor']
}) => {
  return (
    <FadingDotsSpinnerContainer size={size} $color={$color} $backgroundColor={$backgroundColor}>
      <div></div>
      <div></div>
      <div></div>
    </FadingDotsSpinnerContainer>
  )
}

const getSpinnerType = ({ type, size, $color, $offColor, $backgroundColor }: SpinnerProps) => {
  switch (type) {
    case 'fadingDots':
      return <FadingDotsSpinner size={size} $color={$color} $backgroundColor={$backgroundColor} />
    case 'dual':
      return (
        <DualRingSpinnerContainer
          size={size}
          $color={$color}
          $offColor={$offColor}
          $backgroundColor={$backgroundColor}
        />
      )
    case 'dots':
      return <WavingDotsSpinner size={size} $color={$color} $backgroundColor={$backgroundColor} />
    case 'basic':
    default:
      return (
        <PrimarySpinnerContainer
          size={size}
          $color={$color}
          $offColor={$offColor}
          $backgroundColor={$backgroundColor}
        />
      )
  }
}
export const Spinner = ({ type = 'basic', size = 'md', $color, $offColor, $backgroundColor }: SpinnerProps) => {
  return <div className='spinner'>{getSpinnerType({ type, size, $color, $offColor, $backgroundColor })}</div>
}
