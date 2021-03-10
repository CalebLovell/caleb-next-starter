/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require(`./next-i18next.config`);
const withMDX = require(`@next/mdx`)({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	i18n,
	pageExtensions: [`js`, `jsx`, `ts`, `tsx`, `md`, `mdx`],
});
