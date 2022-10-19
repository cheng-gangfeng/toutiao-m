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

### 2 加入 git 管理

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

iconfont 矢量图标库
切图 图片 失真 提交请求较多

svg 图标转换为字体图标 iconfont

把设计师给的 svg 图，上传到 iconfont,进行矢量图代码生成。

资源管理->我的项目->新建项目->可自定义字体类名->点击生产代码
->在项目中 styles 下 icon.less 中复制。在 index.less 引入 icon.less

在项目中使用 i 标签。样式名 加具体图标名。

assets 导入图片

public 项目标题图标 替换 favicon.ico 。使用了 pwa 要 vue.config.js 配置。记得重启服务器。

### 5 引入 vent 组件库

# Vue 2 项目，安装 Vant 2：

npm i vant@latest-v2 -S

按需引入（用的组件少）
全部引入（用的组件多）
main.js 引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
vent 组件官网解释 组件（左） 组件使用（中） 效果（右）

注册为全局组件 在任何组件都可直接使用。

### 6 移动端 rem 适配

进阶用法

一： 动态设置 rem 基准值 (html 字体大小) 完成适配。
1， npm i -S amfe-flexible,
2// 引入 rem 基准值 main.js
import 'amfe-flexible'

二：使用 postcss-pxtorem 将 px->rem （注意：行内样式不会转换）
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

### 7 了解 postcss 配置文件

Vue CLI 内部使用了 PostCSS。我们默认开启了 autoprefixer。如果要配置目标浏览器，可使用 package.json 的 browserslist 字段。
postcss 是处理 css 的工具
有很多的插件 用到插件要安装 然后配置。

module.exports = {
plugins: {
// postcss 的插件
'postcss-pxtorem': {
// lib-flexable rem 适配方案 一行分十份
//所以 rootValue 应为设计稿的宽度的 10 分之一。
// vent 设计基于 375 所以是除以 10 37.5
// 我们的设计图是 750 ，所以要设置为 75.所以要写成函数
// 这样就可以根据设计图量多少写多少。
// 插件会自己判断文件是否是 vant 进行 css 处理
// rootValue: 37.5,
rootValue({ file }) {
return file.indexOf('vant') !== -1 ? 37.5 : 75;
},
// _代表所以 css 属性都会进行转换。rem
propList: ['_'],
},
},
};

autofix 插件脚手架已经集成 所以可直接在.browserslistrc 文件配置。 在上面文件中配置的话会产生冲突。

# 配置文档参考：https://github.com/browserslist/browserslist

# 兼容到超过百分之 1 的用户使用的浏览器

# > 1%

# 兼容到最近的两个版本

# last 2 versions

# ['Android >= 4.0', 'iOS >= 8']

[Android]

> =4.0

[iOS]

> = 8

### 8 封装请求模块

utils
安装
npm i axios

### 9 登陆与注册介绍

基础布局 （组件+样式）
基本逻辑（登陆逻辑）
进一步的逻辑的补充（登陆状态提示，表单验证，验证码处理）

### 10 登陆组件结构布局处理

1,自己写
2，vent 组件拼装修改样式
我们选 2
navBar 导航栏
表单
views login index.vue 配置路由 （路径可以直接在地址栏中使用，查看组件）

### 11 登录样式调整

公共样式 写在 index.less less 可以嵌套 抽取单独的类名 多个使用。

1，导航栏的样式调整
styles ->index.less->

.page-nav-bar{
background-color: #3296fa !important;
.van-nav-bar\_\_title{
color: #fff;
}
}

2，登录表单样式调整
filed 输入框
图标： vent 官网试试看
input 支持自己的图标 （left-icon="smile-o" right-icon="warning-o"）
或者 插槽（外部引入的图标）

图标字体大小 主要是高
<van-field    name="" type="password" placeholder="请输入验证码" >
<i slot="left-icon" class="toutiao toutiao-yanzhengma"></i>
</van-field>

发送验证码

field 插入按钮
调整 样式 添加类
在元素中，右击转到 组件名就是类名但是一般取个类名防止全局改变。
less 的话就是嵌套。

### 12 登录最基本的逻辑

根据接口 绑定数据（根据参数 body 传入对象。）
定义前端网络请求函数(utils 创建 axios 实例，api 创建对应的函数)
组件中，引入函数，async await 根据接口返回的数据进行 try catch 判断处理进行进一步操作。

### 13 登录状态提示

// 3.1 登录提示 vent toast 轻提示
// 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用。
        this.$toast.loading({
message: '登录中',
forbidClick: true,
duration:0//吐司持续时间 0 一直持续。
});

        this.$toast.success('登录成功')

this.$toast.fail('手机号或验证码错误')
