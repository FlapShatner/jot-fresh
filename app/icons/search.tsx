import { SVGProps } from 'react'

function CiSearchMagnifyingGlass(props: SVGProps<SVGSVGElement>) {
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
    d='m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14'></path>
  </svg>
 )
}
const SearchIcon = CiSearchMagnifyingGlass
export default SearchIcon
