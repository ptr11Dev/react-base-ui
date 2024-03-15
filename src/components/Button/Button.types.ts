export type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  mode?: 'primary' | 'secondary'
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'crazy-large'
  /**
   * Button contents
   */
  label: string
  /**
   * Optional click handler
   */
  onClick?: () => void
}
