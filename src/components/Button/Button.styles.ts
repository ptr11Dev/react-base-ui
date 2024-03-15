import styled, { css } from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<Pick<ButtonProps, 'mode' | 'size'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  color: ${(props) => (props.mode ? 'white' : '#333')};
  box-shadow: ${(props) =>
    props.mode ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
  ${(props) => {
    switch (props.mode) {
      case 'primary':
        return css`
          background-color: white;
          border: 3px solid black;
        `
      case 'secondary':
        return css`
          background-color: yellow;
          border: 5px dashed #324234;
        `
      default:
        return css`
          background-color: blue;
          border: 2px dotted #333;
        `
    }
  }}
  ${(props) => {
    switch (props.size) {
      case 'small':
        return css`
          font-size: 14px;
          padding: 10px 16px;
        `
      case 'large':
        return css`
          font-size: 16px;
          padding: 12px 24px;
        `
      case 'crazy-large':
        return css`
          font-size: 32px;
          padding: 24px 48px;
        `
      default:
        return css`
          font-size: 14px;
          padding: 11px 20px;
        `
    }
  }}
`
