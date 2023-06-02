// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "Waku Docs Portal",
	url: "https://waku.guide/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},
	presets: [
		[
			"@acid-info/logos-docusaurus-preset",
			({
				businessUnit: "Waku",
				customSiteConfig: true,
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/waku-org/waku.guide/tree/develop/"
				},
				theme: {
					name: "default",
					options: {
						customCss: [require.resolve("./src/css/custom.scss")]
					}
				}
			})
		]
	],
	staticDirectories: ["static"],
	themeConfig: ({
		docs: {
			sidebar: {
				hideable: false
			}
		},
		navbar: {
			hideOnScroll: true,
			items: [
				{
					type: 'search'
				},
				{
					type: "docSidebar",
					position: "left",
					sidebarId: "main",
					label: "About Waku"
				},
				{
					type: "dropdown",
					label: "Guides",
					position: "right",
					items: [
						{
							label: "Nodes and SDKs",
							to: "/guides/nodes-and-sdks"
						},
						{
							label: "Run a Nwaku Node",
							to: "guides/run-nwaku-node"
						}
					]
				},
				{
					to: "/powered-by-waku",
					label: "Powered by Waku",
					position: "left"
				},
				{
					type: "dropdown",
					label: "Community",
					position: "right",
					items: [
						{
							label: "Join Our Community",
							to: "/community"
						},
						{
							label: "Contribute to Waku",
							to: "/contribute"
						},
						{
							label: "Watch Our Presentations",
							to: "/presentations"
						},
						{
							label: "Bug Bounty Program",
							href: "https://hackenproof.com/status-dot-im/waku"
						}
					]
				},
				{
					href: "https://github.com/waku-org",
					position: "right",
					className: "header-github-link",
					title: "Waku GitHub repository"
				},
			]
		},
		footer: {
			links: [
				{
					title: "Guides",
					items: [
						{
							to: "/guides/nodes-and-sdks",
							label: "Nodes and SDKs"
						},
						{
							label: "Run a Nwaku Node",
							to: "guides/run-nwaku-node"
						}
					]
				},
				{
					title: "Community",
					items: [
						{
							href: "https://discord.waku.org/",
							label: "Discord"
						},
						{
							href: "https://twitter.com/waku_org",
							label: "Twitter"
						},
						{
							href: "https://t.me/waku_org",
							label: "Telegram"
						},
						{
							href: "https://forum.vac.dev/",
							label: "Vac Forum"
						}
					]
				},
				{
					title: "Resources",
					items: [
						{
							href: "https://github.com/waku-org",
							label: "GitHub"
						},
						{
							href: "https://vac.dev/research",
							label: "Blog"
						},
						{
							href: "https://rfc.vac.dev/",
							label: "Vac RFCs"
						}
					]
				},
				{
					title: "Legal",
					items: [
						{
							href: "https://waku.org/terms-of-use",
							label: "Terms of Use"
						},
						{
							href: "https://waku.org/privacy-policy",
							label: "Privacy Policy"
						},
						{
							html: "<link rel='stylesheet' href='/custom.css' />"
						}
					]
				}
			]
		},
		// colorMode: {
		// 	defaultMode: "dark",
		// 	disableSwitch: false,
		// 	respectPrefersColorScheme: false
		// }
	}),
	themes: ["@docusaurus/theme-mermaid"],
	markdown: {
		mermaid: true
	}
};

module.exports = config;
