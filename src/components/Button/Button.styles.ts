import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

export const STYLES_CONST = {
  buttonWidth: 120,

  primary: '#0085ff',
  secondary: '#0c6e7f',
  success: '#07bc0c',
  warning: '#ffba00',
  error: '#fa383e',

  basicShadow: `0 2px 4px 0 rgba(0, 0, 0, 0.2)`,

  activeStyles: {
    transform: 'translateY(1px)',
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    '-webkit-box-shadow': '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
    '-moz-box-shadow': '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  },
  focusStyles: {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(0, 123, 255, 0.5)',
    '-webkit-box-shadow': '0 0 0 2px rgba(0, 123, 255, 0.5)',
    '-moz-box-shadow': '0 0 0 2px rgba(0, 123, 255, 0.5)',
  },
  hoverStyles: {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
    '-webkit-box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
    '-moz-box-shadow': '0 4px 6px 0 rgba(0, 0, 0, 0.2)',
  },

  disabledBgc: '#ddd',
  disabledTextColor: '#a1a1a1',

  smMultiplier: 0.8,
  lgMultiplier: 1.2,
}

export const StyledButton = styled.button<Pick<ButtonProps, 'variant' | 'size'>>`
  cursor: pointer;
  color: #fff;
  border: none;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  -webkit-box-shadow: ${STYLES_CONST.basicShadow};
  -moz-box-shadow: ${STYLES_CONST.basicShadow};
  box-shadow: ${STYLES_CONST.basicShadow};

  &:focus {
    ${STYLES_CONST.focusStyles}
  }

  &:hover {
    ${STYLES_CONST.hoverStyles}
  }

  &:active {
    ${STYLES_CONST.activeStyles}
  }

  /* TODO - to remove This is example comment to check if it's moved to build */

  ${(props) => {
    const isOutlineVariant = props.variant?.includes('-outline')
    const color = STYLES_CONST[props.variant?.replace('-outline', '') as keyof typeof STYLES_CONST] as string

    if (isOutlineVariant) {
      return css`
        background-color: #fff;
        border: 2px solid ${color};
        color: ${color};
      `
    } else {
      return css`
        background-color: ${color};
      `
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'sm':
        return css`
          padding: 6px 12px;
          min-width: ${STYLES_CONST.buttonWidth * STYLES_CONST.smMultiplier}px;
          font-size: ${STYLES_CONST.smMultiplier}rem;
          min-height: 40px;
        `
      case 'md':
        return css`
          padding: 8px 16px;
          min-width: ${STYLES_CONST.buttonWidth}px;
          font-size: 1rem;
          min-height: 48px;
        `
      case 'lg':
        return css`
          padding: 12px 20px;
          min-width: ${STYLES_CONST.buttonWidth * STYLES_CONST.lgMultiplier}px;
          font-size: ${STYLES_CONST.lgMultiplier}rem;
          min-height: 60px;
        `
    }
  }}
  ${(props) => {
    if (props.disabled) {
      return css`
        cursor: not-allowed;
        background-color: ${STYLES_CONST.disabledBgc};
        color: ${STYLES_CONST.disabledTextColor};

        &:hover {
          background-color: ${STYLES_CONST.disabledBgc};
        }
      `
    }
  }}
`

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`
