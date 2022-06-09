<template>
  <div>index.js 动态路由 / 嵌套路由 (网址路径有多级) </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <button @click = "routeToPageEight">嵌套路由/pageEight_Nine_Ten/:id/pageEight</button>
  <br>
  <button @click = "routeToPageNine">嵌套路由/pageEight_Nine_Ten/:id/pageNine</button>
  <br>
  <button @click = "routeToPageTen">嵌套路由/pageEight_Nine_Ten/:id/pageTen</button>
  <br>

  <router-view></router-view>
</template>

<script>
import {useRoute,useRouter} from "vue-router";

export default {
  name: "PageEight_Nine_Ten",
  setup (){
    const router = useRouter();
    const route = useRoute();
    const routeBack = () => {
      //会遇到路由拦截
      router.replace('/pageSeven')
    }

    const routeToPageEight = () => {
      router.push({
        path:'/pageEight_Nine_Ten/'+route.params.id+'/pageEight'
      })
    }
    const routeToPageNine = () => {
      router.push({
        path:'/pageEight_Nine_Ten/'+route.params.id+'/pageNine'
      })
    }
    const routeToPageTen = () => {
      router.push({
        path:'/pageEight_Nine_Ten/'+route.params.id+'/pageTen'
      })
    }

    return {
      routeBack,
      routeToPageEight,
      routeToPageNine,
      routeToPageTen
    }
  }
}
</script>

<style scoped>

</style>