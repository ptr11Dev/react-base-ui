import { CSSProperties } from 'react'
import { Spinner } from '../Spinner/Spinner'
import { ButtonContent, STYLES_CONST, StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({
  disabled = false,
  onClick,
  size = 'md',
  text,
  variant = 'primary',
  type = 'button',
  isLoading = false,
  customStyles,
  LeftIcon,
  RightIcon,
  ...props
}: ButtonProps) => {
  console.log('props', props)

  const getColor = (variant: string): CSSProperties['color'] => {
    const colorKey = variant.replace('-outline', '') as keyof typeof STYLES_CONST
    return variant.includes('outline') ? (STYLES_CONST[colorKey] as CSSProperties['color']) : '#fff'
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      onClick={onClick}
      disabled={disabled || isLoading}
      type={type}
      style={customStyles}
      {...props}>
      <ButtonContent>
        {isLoading ? (
          <Spinner $color={getColor(variant)} $offColor='rgba(255,255,255,0.1)' size={size} />
        ) : (
          <>
            {LeftIcon}
            <span>{text}</span>
            {RightIcon}
          </>
        )}
      </ButtonContent>
    </StyledButton>
  )
}
