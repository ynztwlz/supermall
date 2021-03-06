const path = require('path')
module.exports = {
  configureWebpack:{
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
  },
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg')
  //   // 清除已有的所有 loader,否则接下来的 loader 会附加在该规则现有的 loader 之后。
  //   svgRule.uses.clear()
  //   svgRule
  //     .test(/\.svg$/)
  //     .include.add(path.resolve(__dirname, './src/assets/img/tabbar'))// 配置icons的目录
  //     .end()
  //     .use('svg-sprite-loader')
  //     .loader('svg-sprite-loader')
  //     .options({
  //       symbolId: 'icon-[name]'
  //     })
  //   const fileRule = config.module.rule('file')
  //   fileRule.uses.clear()
  //   fileRule
  //     .test(/\.svg$/)
  //     .exclude.add(path.resolve(__dirname, './src/assets/img/tabbar')) // 配置icons的目录
  //     .end()
  //     .use('file-loader')
  //     .loader('file-loader')
  // }
}
