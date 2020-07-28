'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path') 

module.exports = {
	css: {
	  loaderOptions: {
	    postcss: {
	      plugins: [
	        require("postcss-px-to-viewport")({
			  unitToConvert: "px",
			  viewportWidth: 750,
			  unitPrecision: 3,
			  propList: [
				"*"
			  ],
			  viewportUnit: "vw",
			  fontViewportUnit: "vw",
			  selectorBlackList: [],
			  minPixelValue: 1,
			  mediaQuery: false,
			  replace: true,
			  exclude: /(\/|\\)(node_modules)(\/|\\)/,
			})
	      ]
	    }
	  }
	},
	// unitToConvert  (String) 要转换的单位，默认是'px'
	// viewportWidth (Number) viewport的宽度，默认是320，可根据设计稿来，750的设计稿就写750
	// unitPrecision  (Number) 指定`px`转换为视窗单位值的小数位数，默认是5
	// propList (Array) 指定可以转换的css属性，默认是['*']，代表全部属性进行转换
	// 精确匹配
	// * 代表全部属性
	// 在字符串前面或者后面用*，如 ['*position*'] 会匹配background-position-y
	// 用！则该属性排除. 如: ['*', '!letter-spacing']
	// Combine the "not" prefix with the other prefixes. Example: ['', '!font']
	// viewportUnit  (String)指定需要转换成的视窗单位，默认vw
	// fontViewportUnit  (String)指定字体需要转换成的视窗单位，默认vw
	// selectorBlackList  (Array) 指定不转换为视窗单位的类，保留px，值为string或正则regexp，建议定义一至两个通用的类名
	// 值为string类型， 检查字符是否包含
	// ['body'] 匹配 .body-class
	// 值为regexp类型，正则匹配.
	// [/^body$/] 匹配 body 而不是 .body
	// ​​​​​​​minPixelValue (Number) 默认值1，小于或等于`1px`不转换为视窗单位,
	// mediaQuery  (Boolean) 是否在媒体查询时也转换px，默认false
	// replace (Boolean)  replaces rules containing vw instead of adding fallbacks.
	// exclude (Array or Regexp) 设置忽略文件，如node_modules
	// 如果是regexp, 忽略全部匹配文件.
	// 如果是数组array, 忽略指定文件.
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
