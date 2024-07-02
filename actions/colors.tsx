'use server'

import colors from 'nice-color-palettes'

function getColorHash(input: string): number {
 let hash = 0
 for (let i = 0; i < input.length; i++) {
  const char = input.charCodeAt(i)
  hash = (hash << 5) - hash + char
  hash |= 0 // Convert to 32bit integer
 }

 // Ensure the hash is non-negative, then scale it to the 1-100 range
 const scaledHash = (Math.abs(hash) % 100) + 1
 return scaledHash
}

export async function getColors(username: string) {
 const colorHash = getColorHash(username ?? '')
 return colors[colorHash]
}
