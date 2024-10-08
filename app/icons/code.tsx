import { SVGProps } from 'react'

export function CiCode(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 24 24'
   {...props}>
   <path
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    d='m15 7l5 5l-5 5m-6 0l-5-5l5-5'></path>
  </svg>
 )
}
