import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({
  variant = 'primary',
  size = 'md',
  text,
  onClick,
  ...props
}: ButtonProps) => {
  console.log('props', props)
  return (
    <StyledButton variant={variant} size={size} onClick={onClick} {...props}>
      {text}
    </StyledButton>
  )
}
