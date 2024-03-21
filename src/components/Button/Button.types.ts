import { CSSProperties, ReactNode } from 'react'

export type ButtonProps = {
  /**
   * Button contents
   */
  text: string
  /**
   * Is this the principal call to action on the page?
   */
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'primary-outline'
    | 'secondary-outline'
    | 'success-outline'
    | 'warning-outline'
    | 'error-outline'
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * Optional click handler
   */
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  isLoading?: boolean
  customStyles?: CSSProperties
  LeftIcon?: ReactNode
  RightIcon?: ReactNode
}
