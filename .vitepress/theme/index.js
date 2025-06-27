import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Video from "./components/Video.vue";
import ContactForm from "./components/ContactForm.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Video", Video);
    app.component("ContactForm", ContactForm);
  },
};
