/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mikanani.me',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

module.exports = nextConfig
