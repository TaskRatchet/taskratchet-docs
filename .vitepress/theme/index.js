import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Video from "./components/Video.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Video", Video);
  },
};
