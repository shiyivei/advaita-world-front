const pxToViewport = require("postcss-px-to-viewport");
const vw = pxToViewport({
  // 视口宽度，一般就是 375（ 设计稿一般采用二倍稿，宽度为 375 ）
  viewportWidth: 375,
});

module.exports = {
  // 此处省略 webpack 配置
  webpack: {},
  // 这里补充style配置
  style: {
    // ◆ 旧写法，有兼容问题
    // postcss: {
    //   plugins: [vw]
    // },
    // ◆ postcss8的新写法（推荐）
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: [vw],
        },
      },
    },
  },
};
