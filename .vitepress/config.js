import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TaskRatchet",
  description:
    "TaskRatchet is a todo list that charges you real money if you don't complete your tasks on time. Define your task, set your deadline, and choose your stakes. TaskRatchet will make sure you follow through.",
  srcDir: "./src",
  head: [["link", { rel: "icon", href: "https://fav.farm/🔧" }]],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "How It Works", link: "/works" },
      { text: "FAQ", link: "/faq" },
      { text: "API", link: "/api-v1" },
      { text: "Log In", link: "https://app.taskratchet.com/" },
    ],
    search: {
      provider: "local",
    },
    sidebar: {
      "/": [
        {
          text: "Getting Started",
          items: [
            { text: "How It Works", link: "/works" },
            { text: "Working with Tasks", link: "/working-with-tasks" },
            { text: "Frequently Asked Questions", link: "/faq" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "API v1 (Stable)", link: "/api-v1" },
            { text: "API v2 (Beta)", link: "/api-v2" },
            { text: "Glossary", link: "/glossary" },
            { text: "Integrations", link: "/integrations" },
            { text: "Interfaces", link: "/interfaces" },
            { text: "Timezones", link: "/timezones" },
          ],
        },
        {
          text: "Company",
          items: [
            { text: "Climate", link: "https://climate.stripe.com/JS6ptt" },
            {
              text: "Feature Suggestions",
              link: "https://taskratchet.consider.it/",
            },
            { text: "Friends & Competitors", link: "/friends" },
            { text: "Open Source", link: "/open-source" },
            { text: "Transparency", link: "/transparency" },
            { text: "Privacy", link: "/privacy" },
            { text: "Terms", link: "/terms" },
          ],
        },
      ],
    },
    outline: "deep",
    footer: {
      message:
        "Built with ❤️ by <a href='https://ko-fi.com/narthur'>Narthur</a> and <a href='https://pinepeakdigital.com/'>Pine Peak Digital</a>.",
    },
    socialLinks: [
      { icon: "twitter", link: "https://twitter.com/TaskRatchet" },
      { icon: "github", link: "https://github.com/TaskRatchet" },
    ],
  },
});
