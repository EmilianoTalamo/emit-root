const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	experimental: {
		appDir: false,
		scrollRestoration: true,
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
		prependData: `
			@import './vendors/emit-mediaquery';
			@import './_variables.scss';
			@import './_fonts.scss';
		`,
	},
}

module.exports = nextConfig
