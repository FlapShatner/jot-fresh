import { SVGProps } from 'react'

export function Expand(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 16 16'
   {...props}>
   <path
    fill='currentColor'
    d='M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75m7 3A.75.75 0 0 1 8.75 6h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 6.75m-1.22 5.03l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V6.75a.75.75 0 0 1 1.5 0v4.69l.72-.72a.75.75 0 0 1 1.06 1.06'></path>
  </svg>
 )
}