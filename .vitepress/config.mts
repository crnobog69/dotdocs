import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dotdocs",
  description: "Dotfiles Документација",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Почетна", link: "/" },
      { text: "Постављање", link: "/postavljanje" },
      { 
        text: '<svg viewBox="0 0 24 24" style="width: 1em; height: 1em; vertical-align: middle; fill: currentColor;"><path fill="currentColor" d="M12.87 15.07l-2.54-2.51l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17C11.5 7.92 10.44 9.75 9 11.35C8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5l3.11 3.11l.76-2.04M18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12m-2.62 7l1.62-4.33L19.12 17h-3.24Z"/></svg>', 
        items: [
          { text: "Српски", link: "/" },
          { text: "Русский", link: "/ru/" },
          { text: "Español", link: "/es/" },
          { text: "日本語", link: "/ja/" },
          { text: "English", link: "/en/" },
          { text: "Français", link: "/fr/" }
        ]
      }
    ],

    sidebar: [
      {
        text: "Постављање",
        items: [
          { text: "О Dotfiles", link: "/o-dotfiles" },
          { text: "GNU Stow", link: "/gnu-stow" },
          { text: "Скрипте", link: "/skripte" },
          { text: "Пречицe", link: "/precice" },
          { 
            text: "Екстра", 
            items: [
              { text: "Екстра", link: "/ekstra" },
              { text: "brave-maps", link: "/extra/brave-maps" },
              { text: "brave", link: "/extra/brave" },
              { text: "cobaltium", link: "/extra/cobaltium" },
              { text: "firefox", link: "/extra/firefox" },
              { text: "gptium", link: "/extra/gptium" },
              { text: "kde", link: "/extra/kde" },
              { text: "mangadex", link: "/extra/mangadex" },
              { text: "miruro", link: "/extra/miruro" },
              { text: "notesnook", link: "/extra/notesnook" },
              { text: "spicetify", link: "/extra/spicetify" },
              { text: "tabliss", link: "/extra/tabliss" },
              { text: "violentmonkey", link: "/extra/violentmonkey" },
              { text: "whatsapp", link: "/extra/whatsapp" },
            ]
          },
          { text: "DotWin", link: "/dotwin" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/crnobog69/dotfiles" },
      { icon: "gitlab", link: "https://gitlab.com/crnobog/dotfiles" },
      { icon: "codeberg", link: "https://codeberg.org/crnobog/dotfiles" }
    ],
  },

  appearance: true, // Enable dark mode
});
