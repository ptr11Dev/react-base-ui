import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  mode,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  console.log('props', props)
  return (
    <StyledButton mode={mode} size={size} {...props}>
      {label}
    </StyledButton>
  )
}
