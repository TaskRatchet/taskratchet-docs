import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TaskRatchet",
  description:
    "TaskRatchet is a todo list that charges you real money if you don't complete your tasks on time. Define your task, set your deadline, and choose your stakes. TaskRatchet will make sure you follow through.",
  srcDir: "./src",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "FAQ", link: "/help/faq" },
      { text: "Privacy", link: "/privacy" },
      { text: "Terms", link: "/terms" },
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
            { text: "How It Works", link: "/help/works" },
            { text: "Working with Tasks", link: "/help/working-with-tasks" },
            { text: "Frequently Asked Questions", link: "/help/faq" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "API v1", link: "/help/api-v1" },
            { text: "API v2", link: "/help/api-v2" },
            { text: "Glossary", link: "/help/glossary" },
            { text: "Integrations", link: "/help/integrations" },
            { text: "Interfaces", link: "/help/interfaces" },
            { text: "Timezones", link: "/help/timezones" },
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
            { text: "Friends & Competitors", link: "/help/friends" },
            { text: "Open Source", link: "/help/open-source" },
            { text: "Transparency", link: "/help/transparency" },
          ],
        },
      ],
    },
    outline: "deep",
    footer: {
      message:
        "Built with ❤️ by <a href='https://ko-fi.com/narthur'>Narthur</a> and <a href='https://pinepeakdigital.com/'>Pine Peak Digital</a>.",
    },
  },
});
