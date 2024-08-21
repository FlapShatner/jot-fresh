import { SVGProps } from 'react'

export function Collapse(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 16 16'
   {...props}>
   <path
    fill='currentColor'
    d='M1 3.75A.75.75 0 0 1 1.75 3h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 3.75m7 3A.75.75 0 0 1 8.75 6h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 8 6.75m-3.22-.53a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72v4.69a.75.75 0 0 0 1.5 0V8.56l.72.72a.75.75 0 0 0 1.06-1.06z'></path>
  </svg>
 )
}
