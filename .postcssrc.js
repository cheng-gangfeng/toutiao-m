module.exports = {
    plugins: {
        // postcss的插件
        'postcss-pxtorem': {
            // lib-flexable rem适配方案 一行分十份
            //所以rootValue应为设计稿的宽度的10分之一。
            // vent 设计基于375 所以是除以10 37.5 
            // 我们的设计图是750 ，所以要设置为75.所以要写成函数
            // 这样就可以根据设计图量多少写多少。
            //  插件会自己判断文件是否是vant  进行css处理
            // rootValue: 37.5,
            rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
            },
            // *代表所以css属性都会进行转换。rem
            propList: ['*'],
        },
    },
};