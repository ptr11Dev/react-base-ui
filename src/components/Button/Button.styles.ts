import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'
import { lighten } from 'polished'

const STYLE_CONSTS = {
  buttonWidth: 120,
}

const COLORS = {
  primary: '#0085ff',
  secondary: '#ff7e5f',
  success: '#60b731',
  warning: '#ffd300',
  error: '#ea4646',
}

export const StyledButton = styled.button<
  Pick<ButtonProps, 'variant' | 'size'>
>`
  cursor: pointer;
  color: white;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: 1s;
  background-size: 200% 100%;

  /* This is example comment to check if it's moved to build */

  ${(props) => {
    const isOutlineVariant = props.variant?.includes('-outline')
    const color =
      COLORS[props.variant?.replace('-outline', '') as keyof typeof COLORS]

    if (isOutlineVariant) {
      return css`
        background-color: #fff;
        border: 2px solid ${color};
        color: ${color};

        &:hover {
          background-color: ${lighten(0.25, color)};
        }
      `
    } else {
      return css`
        background-color: ${color};

        &:hover {
          background-color: ${lighten(0.15, color)};
        }
      `
    }
  }}

  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          padding: 6px 12px;
          min-width: ${STYLE_CONSTS.buttonWidth * 0.8}px;
          font-size: 0.8rem;
        `
      case 'md':
        return css`
          padding: 8px 16px;
          min-width: ${STYLE_CONSTS.buttonWidth}px;
          font-size: 1rem;
        `
      case 'lg':
        return css`
          padding: 12px 20px;
          min-width: ${STYLE_CONSTS.buttonWidth * 1.2}px;
          font-size: 1.2rem;
        `
    }
  }}
`
