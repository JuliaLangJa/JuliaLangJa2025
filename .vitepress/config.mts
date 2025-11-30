import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/julialangja2025/',
  srcDir: 'src',
  title: "JuliaLang Japan 2025",
  description: "こちらは JuliaLang Japan 2025 のホームページです。2025年12月13日(土)に東京科学大学 大岡山キャンパスにて開催いたします。皆様のご参加をお待ちしております。",
  head: [
    ["link", { rel: "icon", href: "https://julialangja.github.io/assets/julialangja-biglogo.png" }],
    ["meta", { property: "og:title", content: "JuliaLang Japan 2025" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:url", content: "https://julialangja.github.io/julialangja2025/" }],
    ["meta", { property: "og:image", content: "https://julialangja.github.io/assets/julialangja-biglogo.png" }],
    ["meta", { property: "og:site_name", content: "JuliaLang Japan 2025" }],
    ["meta", { property: "og:description", content: "こちらは JuliaLang Japan 2025 のホームページです。2025年12月13日(土)に東京科学大学 大岡山キャンパスにて開催いたします。皆様のご参加をお待ちしております。" }],
    ["meta", { property: "og:locale", content: "ja_JP" }],
    ["meta", { name: "twitter:card", content: "summary" }],
    ["meta", { name: "twitter:title", content: "JuliaLang Japan 2025" }],
    ["meta", { name: "twitter:description", content: "こちらは JuliaLang Japan 2025 のホームページです。2025年12月13日(土)に東京科学大学 大岡山キャンパスにて開催いたします。皆様のご参加をお待ちしております。" }],
    ["meta", { name: "twitter:image", content: "https://julialangja.github.io/assets/julialangja-biglogo.png" }],
  ],
    
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '#概要' },
      { text: 'Register', link: '#参加登録' },
      { text: 'Program', link: '#プログラム' },
      { text: 'Access', link: '#アクセス' },
      { text: 'Contact', link: '#お問い合わせ' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      // { icon: 'x', link: 'https://x.com/JuliaLangJa' },
      { icon: 'github', link: 'https://github.com/ohno/JuliaLangJa2025' }
    ]
  }
  
})
