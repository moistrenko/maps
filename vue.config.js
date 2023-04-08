const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "./maps/" : "/",
  assetsDir: "assets",
  transpileDependencies: true,
  productionSourceMap: false,
});
