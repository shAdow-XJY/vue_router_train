<template>

  <div>index.js 全局路由守卫,跳转pageSeven / 路由懒加载 </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <button @click = "routeTo">路由传参Button</button>
  <br>

  <img alt="six" src="../assets/6.png" style="width: 800px;height: 500px;">
</template>

<script>
import {useRouter} from "vue-router";
export default {
  name: "PageSix",
  setup () {
    const router = useRouter();

    const routeBack = () => {
      router.back()
    }
    const routeTo = () => {
      router.push({
        path:'/pageSeven',
      })
    }

    return {
      routeBack,
      routeTo,
    }
  }
}
</script>

<style scoped>

</style>