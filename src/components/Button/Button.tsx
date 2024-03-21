import { Spinner } from '../Spinner/Spinner'
import { ButtonContent, StyledButton } from './Button.styles'
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
      <ButtonContent>
        <p>{text}</p>
        <Spinner $color='#fff' $offColor='rgba(255,255,255,0.1)' />
      </ButtonContent>
    </StyledButton>
  )
}
