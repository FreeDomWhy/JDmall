module.exports={
  configureWebpack:{
    resolve:{
      extensions:[],//配置默认后缀名(可以省略不写某些后缀)

      //配置文件夹别名,已有一个“@=>src”的默认别名
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
