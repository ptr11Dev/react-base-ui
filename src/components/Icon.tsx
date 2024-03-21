import { SVGProps } from 'react'

interface ExtendedSVGProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const CheckIcon = ({ size = 24, color = 'black', className }: ExtendedSVGProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.5 1.5C4.18629 1.5 1.5 4.18629 1.5 7.5V16.5C1.5 19.8137 4.18629 22.5 7.5 22.5H16.5C19.8137 22.5 22.5 19.8137 22.5 16.5V7.5C22.5 4.18629 19.8137 1.5 16.5 1.5H7.5ZM16.5455 10.9205C16.9848 10.4812 16.9848 9.76884 16.5455 9.3295C16.1062 8.89017 15.3938 8.89017 14.9545 9.3295L11.25 13.034L9.4205 11.2045C8.98116 10.7652 8.26884 10.7652 7.8295 11.2045C7.39016 11.6438 7.39016 12.3562 7.8295 12.7955L10.1893 15.1553C10.7751 15.7411 11.7249 15.7411 12.3107 15.1553L16.5455 10.9205Z'
        fill={color}
      />
    </svg>
  )
}

export default CheckIcon
