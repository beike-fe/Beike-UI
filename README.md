# Beike-ui

> A Ui project based on Vue.js
> 一套为开发者准备的基于 Vue 2.0 的桌面端组件库
  
## Project Structure

├── build   
├── config  
├── src  
│   ├── components  可复用组件  
│   ├── directive   自定义指令  
│   ├── core        核心功能代码  
│   ├── data        数据  
│   ├── pages       页面  
│   ├── router      路由   
│   ├── style       全局样式   
│   ├── App.vue     入口页面  
│   └── main.js     主要配置  
├── static  
├── index.html  
├── package-lock.json  
├── package.json  
└── README.md

## Development Processes
* 快速迭代的前期统一在 `develop 分支` 开发
* 之后开发新的组件先在 `feature/[组件名] 分支` 进行开发
* 修 bug 在 `[原分支名]/fix 分支` 进行
* 然后合并到 `develop 分支` 
* 最后合并到 `master 分支`，必须提交 **merge request** 进行合并。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

