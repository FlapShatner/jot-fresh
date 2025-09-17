/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: ['@node-rs/argon2'],
    eslint:{
        ignoreDuringBuilds: true,
    }
 
}

export default nextConfig
