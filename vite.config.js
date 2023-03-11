import { defineConfig } from "vite";
import sass from "sass";

export default defineConfig({
  // base: '/valentine2023',
  root: "src",
  build: {
    outDir: "../dist",
  },

  assets: {
    include: [
      "**/*.mp3",
      "**/*.jpg",
      "**/*.JPG",
      "**/*.png",
      "**/*.PNG",
      "**/*svg",
    ],
  },

  plugins: [
    {
      name: "sass",
      renderChunk: (code) => sass.renderSync({ data: code }).css.toString(),
    },
  ],
});
