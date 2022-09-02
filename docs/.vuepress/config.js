import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  title: "0xdddd's Blog",
  description: '这是个杂七杂八的Blog记录平台',
	theme: defaultTheme({
		logo: '/assets/my.png',
		navbar: [
			{ text: '首页', link: '/' },
			{
				text: '杂七杂八记录',
				link: '/blog'
			},
			{
				text: '外链',
				children: [
					{ text: 'Github', link: 'https://github.com/MuddyPuddlesss' },
				]
			}
    ],
		sidebar: [
			// 基础篇
			{
        text: '基础篇',
        link: '/basics/',
        children: [
          // HTML 不分
          {
            text: 'HTML',
            link: '/basics/html',
						children: []
          },
					{
            text: 'CSS',
            link: '/basics/css',
						children: []
          },
        ],
      },
			// 前端工程化
			{
        text: '前端工程化',
        link: '/engineering/',
        children: [
          // vite 部分
          {
            text: 'vite',
            link: '/engineering/vite',
          },
        ],
      },
		]
	}),
	plugins: [
		searchPlugin({})
	]
})