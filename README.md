# vue-router

### introduce
1. DEMO项目，针对性地为了上手一下vue-router。
2. 环境：
> 编辑器：webstorm
> vue-router： vue-router@4
3. pages:
```
PageOne -> PageTwo : vue 2.0 / vue-router 3.x 路由跳转
PageTwo -> PageThree : vue 3.0 / vue-router 4.x 路由跳转
PageThree -> PageFour : vue 2.0 v-model / router-link path+query 传参 / router-link name+params 传参
PageFour -> PageFive : this.$route.query/params.参数名 接收参数 / vue 3.0 v-model / userRouter 传参
PageFive -> PageSix : 
PageSix -> PageSeven : 
PageSeven -> PageEight : 
PageEight -> PageNine : 
PageNine -> PageTen : 
```

### reference
> vue-router路由传参方法详解
> https://juejin.cn/post/6999913464361648159

> Vue路由参数更新但是页面不刷新问题
> https://www.jianshu.com/p/a641033f1aa7
### document
1. webstorm创建Vue.js工程
2. 安装vue-router
```
npm install vue-router@4
或者
yarn add vue-router@4
```
3. route 目录 及 index.js 创建
> 按照目录src下route创建index.js
> 具体内容看工程里面
4. 创建用于跳转的页面
> 位于src/pages下
5. main.js
> 添加： import router from "./route";
> 
> 将
> 
> createApp(App).mount('#app')
> 
> 修改为
> 
> const app = createApp(App)
> 
> app.use(router)
> 
> app.mount('#app')

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```