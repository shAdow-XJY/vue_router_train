<template>
  <div>vue 3.0 / vue-router 4.x 路由跳转</div>
  <div>
    <button @click = "routeBack">路由返回Button</button>
    {{pageInfo}}
    <button @click = "routeTo">路由进入Button</button>
  </div>
  <img alt="two" src="../assets/2.png" style="width: 800px;height: 500px;">
</template>

<script>
import {useRouter} from "vue-router"
export default {
  name: "PageTwo",
  data(){
    return {
      pageInfo : "pageTwo"
    }
  },
  setup () {
    const router = useRouter()

    const routeBack = () => {
      router.back()
    }
    const routeTo = ()=>{
      router.push("/pageThree")
    }

    return {
      routeBack,
      routeTo
    }
  }
}
</script>

<style scoped>

</style>