// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['cdn.sanity.io'],
//   },
// };

// module.exports = nextConfig;
// next.config.js
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io', "st.hzcdn.com", "images.squarespace-cdn.com", "images.seattletimes.com","lh3.googleusercontent.com"]
	}
};