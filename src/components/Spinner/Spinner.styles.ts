import styled, { css, keyframes } from 'styled-components'
import { SpinnerProps } from './Spinner.types'

const COLORS = {
  basicColor: '#0085ff',
  basicOffColor: 'rgba(0,0,0,0.1)',
}

/* Helpers */
const getSizeStyle = (size: SpinnerProps['size']) => {
  const sizes = { sm: 12, md: 16, lg: 24 }
  return css`
    width: ${sizes[size as keyof typeof sizes]}px;
    height: ${sizes[size as keyof typeof sizes]}px;
  `
}

const getDotSizeStyle = (size: SpinnerProps['size']) => {
  const sizes = { sm: 6, md: 8, lg: 14 }
  return css`
    width: ${sizes[size as keyof typeof sizes]}px;
    height: ${sizes[size as keyof typeof sizes]}px;
  `
}

/* Primary spinner */
const primaryAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const PrimarySpinnerContainer = styled.div<
  Pick<SpinnerProps, 'size' | 'color' | 'offColor' | 'backgroundColor'>
>`
  border: 4px solid;
  border-color: ${(props) => props.offColor || COLORS.basicOffColor};
  border-radius: 50%;
  border-top-color: ${(props) => props.color || COLORS.basicColor};
  animation: ${primaryAnimation} 1s ease-in-out infinite;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  ${(props) => getSizeStyle(props.size)};
`

/* Dual spinner */
const dualAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const DualRingSpinnerContainer = styled.div<
  Pick<SpinnerProps, 'size' | 'color' | 'offColor' | 'backgroundColor'>
>`
  display: inline-block;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  border-radius: 50%;

  &:after {
    content: '';
    display: block;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${(props) => props.offColor || 'transparent'};
    border-top-color: ${(props) => props.color || COLORS.basicColor};
    border-bottom-color: ${(props) => props.color || COLORS.basicColor};
    animation: ${dualAnimation} 1.2s linear infinite;
    ${(props) => getSizeStyle(props.size)}
  }
`

/* Fading dots spinner */
const fadingDotsAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`

export const FadingDotsSpinnerContainer = styled.div<Pick<SpinnerProps, 'size' | 'color' | 'backgroundColor'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  div {
    ${(props) => getDotSizeStyle(props.size)}
    border-radius: 50%;
    background: ${(props) => props.color || COLORS.basicColor};
    animation: ${fadingDotsAnimation} 1.4s infinite ease-in-out both;
  }

  div:nth-child(1) {
    animation-delay: -0.32s;
  }

  div:nth-child(2) {
    animation-delay: -0.16s;
  }

  div:nth-child(3) {
    animation-delay: 0;
  }
`

/* Waving dots spinner */
const wavingDotsAnimation = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }
  30% {
    transform: translateY(-10px);
  }
`

export const WavingDotsSpinnerContainer = styled.div<Pick<SpinnerProps, 'size' | 'color' | 'backgroundColor'>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  & > div {
    ${(props) => getDotSizeStyle(props.size)}
    background: ${(props) => props.color || COLORS.basicColor};
    border-radius: 50%;
    animation: ${wavingDotsAnimation} 1s linear infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`
