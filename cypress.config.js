const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hngpba',
  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
  },
});
