import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs))
}
export const passwordsMatch = (password: string, confirmPassword: string) => {
 return password === confirmPassword
}

export const truncate = (str: string, maxLength: number) => {
 if (str.length <= maxLength) return str
 return str.slice(0, maxLength) + '...'
}
