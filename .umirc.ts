import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'PainterEngine',
  favicon: './logo.png',
  logo: './logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  hash: true,
  base: `/PainterEngineDoc`,
  publicPath: `/PainterEngineDoc/`,
  navs: {
    'zh-CN': [
      null, // null 值代表保留约定式生成的导航，只做增量配置
      {
        title: 'GitHub',
        path: 'https://github.com/matrixcascade/PainterEngine',
      },
    ],
  },
});
