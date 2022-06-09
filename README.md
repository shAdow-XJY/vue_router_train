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
   PageFive -> PageSix : created接收query参数 / useRoute接收params参数 / index.js中进入PageSix单路由守卫/拦截
   PageSix -> PageSeven : index.js 全局路由守卫,跳转pageSeven / 路由懒加载 
   PageSeven -> PageSevenChildren: PageSeven 父子组件通过路由改变(可看网址完全改变) 非嵌套路由 
   PageSeven -> PageEight_Nine_Ten(PageEight/PageNine/PageTen) : index.js 动态路由 / 嵌套路由 (网址路径有多级) 
   ```

### reference

> vue-router路由传参方法详解
> https://juejin.cn/post/6999913464361648159

> Vue路由参数更新但是页面不刷新问题
> https://www.jianshu.com/p/a641033f1aa7

> vue中img的src动态赋值（本地图片的路径）
> https://www.jianshu.com/p/6ee27c825025

> vue监听路由变化的几种方式【Vue】
> https://blog.csdn.net/Umbrella_Um/article/details/107512056

> vue-router 动态路由
> https://router.vuejs.org/zh/guide/essentials/nested-routes.html

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