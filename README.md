# toutiao-m

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
### 1 项目初始化
```
脚手架创建项目 vue create toutioa

```
### 2 加入git管理

```
vue-cli 给初始化了一个本地git项目，只需要在git上新建一个git项目，推送上去即可。本地和远程项目可重名。

git log 可看提交日志
git remote add  origin 项目地址   关联远程仓库
git remote -v 可看是否关联成功

第一次提交  之后 git push 
git push --set-upstream origin master
```

### 3 调整目录结构
```
删除不用的 ，创建api utils styles (index.less)  文件夹

```
### 4 引入图标素材
iconfont  矢量图标库 
切图 图片 失真 提交请求较多

svg 图标转换为字体图标 iconfont

把设计师给的svg图，上传到iconfont,进行矢量图代码生成。

资源管理->我的项目->新建项目->可自定义字体类名->点击生产代码
->在项目中styles下icon.less中复制。在index.less引入icon.less

在项目中使用 i标签。样式名 加具体图标名。

assets 导入图片

public 项目标题图标 替换 favicon.ico 。使用了pwa 要vue.config.js 配置。记得重启服务器。

### 5 引入vent组件库

# Vue 2 项目，安装 Vant 2：
npm i vant@latest-v2 -S

按需引入（用的组件少）
全部引入（用的组件多）
main.js引入 
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
vent 组件官网解释  组件（左）  组件使用（中）  效果（右）

注册为全局组件 在任何组件都可直接使用。  

### 6  移动端rem 适配
进阶用法

一： 动态设置 rem基准值  (html 字体大小) 完成适配。
1， npm i -S amfe-flexible,
2// 引入rem 基准值 main.js
import 'amfe-flexible'
  
二：使用postcss-pxtorem 将px->rem  （注意：行内样式不会转换）
1,安装
npm i postcss-pxtorem@5.1.1 -D

2,根目录中创建 .postcssrc.js
复制代码 官网
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
### 7 了解postcss配置文件
Vue CLI 内部使用了 PostCSS。我们默认开启了 autoprefixer。如果要配置目标浏览器，可使用 package.json 的 browserslist 字段。
postcss 是处理css的工具
有很多的插件 用到插件要安装 然后配置。

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

autofix 插件脚手架已经集成 所以可直接在.browserslistrc 文件配置。 在上面文件中配置的话会产生冲突。
# 配置文档参考：https://github.com/browserslist/browserslist

# 兼容到超过百分之1的用户使用的浏览器
# > 1%

# 兼容到最近的两个版本
# last 2 versions

# ['Android >= 4.0', 'iOS >= 8']

[Android]
>=4.0

[iOS]
>= 8
### 8 封装请求模块
utils
安装
npm i axios 


