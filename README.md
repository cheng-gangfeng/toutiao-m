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




