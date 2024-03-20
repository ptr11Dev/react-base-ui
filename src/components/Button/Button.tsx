import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({
  disabled,
  onClick,
  size = 'md',
  text,
  variant = 'primary',
  type = 'button',
  customStyles,
  ...props
}: ButtonProps) => {
  console.log('props', props)
  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={customStyles}
      {...props}>
      {text}
    </StyledButton>
  )
}
