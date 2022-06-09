<template>
  <div>PageSeven 父子组件通过路由改变(可看网址完全改变) 非嵌套路由 </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  输入1~10(子页面的图片号)
  <br>
  {{pageInfo}}
  <br>
  <input type="text" v-model="pageInfo">
  <br>
  <button @click = "routeQueryTo">进入子页面——pageSevenChildren</button>
  <br>
  <button @click = "routeTo">进入新页面——pageEight</button>
  <br>
  <router-view></router-view>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "PageSeven",
  setup (){
    const router = useRouter();
    const pageInfo = ref(7);

    const routeBack = () => {
      router.back()
    }
    const routeQueryTo = () => {
      router.push({
        path:'/pageSevenChildren',
        query:{
          srcPath: pageInfo.value
        }
      })
    }
    const routeTo = () => {
      router.replace('/pageSeven')
      router.push({
        path:'/pageEight_Nine_Ten/id1',
      })
    }
    return {
      pageInfo,
      routeBack,
      routeQueryTo,
      routeTo
    }
  }
}
</script>

<style scoped>

</style>