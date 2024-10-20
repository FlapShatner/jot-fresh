import { SVGProps } from 'react'

export function SidebarExpand(props: SVGProps<SVGSVGElement>) {
 return (
  <svg
   xmlns='http://www.w3.org/2000/svg'
   width='1em'
   height='1em'
   viewBox='0 0 24 24'
   {...props}>
   <path
    fill='currentColor'
    d='M10 19.5v-15q0-.213.144-.356T10.501 4t.356.144T11 4.5v15q0 .213-.144.356t-.357.144t-.356-.144T10 19.5m3.385-4.873V9.392q0-.293.252-.398t.444.106l2.258 2.335q.223.242.223.565t-.223.566L14.08 14.9q-.192.212-.444.11t-.252-.383'></path>
  </svg>
 )
}
