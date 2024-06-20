import '@/drizzle/envConfig'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
 schema: './drizzle/schema.ts',
 dialect: 'postgresql',
 out: './drizzle/gen',
 dbCredentials: {
  url: process.env.POSTGRES_URL!,
 },
})
