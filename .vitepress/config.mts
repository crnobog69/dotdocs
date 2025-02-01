import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dotdocs",
  description: "Dotfiles Документација",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Почетна", link: "/" },
      { text: "Постављање", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Постављање",
        items: [
          { text: "О Dotfiles", link: "/o-dotfiles" },
          { text: "GNU Stow", link: "/gnu-stow" },
          { text: "Скрипте", link: "/skripte" },
          { text: "Пречицe", link: "/precice" },
          { text: "DotWin", link: "/dotwin" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/crnobog69/dotfiles" },
    ],
  },

  appearance: true, // Enable dark mode if you want
});
