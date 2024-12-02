import crypto from 'crypto'

export const passwordsMatch = (password: string, confirmPassword: string) => {
 return password === confirmPassword
}

export const truncate = (str: string, maxLength: number) => {
 if (str.length <= maxLength) return str
 return str.slice(0, maxLength) + '...'
}

export const generateResetToken = () => {
 return crypto.randomBytes(32).toString('hex')
}

export const generateResetTokenExpiry = () => {
 return new Date(Date.now() + 3600000)
}
