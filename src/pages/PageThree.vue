<template>
  <div>width: 800px;height: 500px;</div>

  <button @click="routeBack">路由返回Button</button>

  <div>
    {{ pageInfo }}
    <input type="text" v-model="pageInfo" placeholder="输入传给pageFour的参数">
  </div>

  <router-link :to="{path:'/pageFour',query:{queryPass:pageInfo+queryString}}">点击标签router-link传参--path+query</router-link>
  <br>
  <router-link :to="{name:'pageFour',params:{paramsPass:pageInfo+paramsString}}">点击标签router-link传参--name+params</router-link>
  <br>
  <img alt="three" src="../assets/3.png" style="width: 800px;height: 500px;">
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "PageThree",
  data() {
    return {
      pageInfo: "",
      queryString:"query",
      paramsString:"params"
    }
  },
  setup() {
    const router = useRouter()

    const routeBack = () => {
      router.back()
    }

    return {
      routeBack,
    }
  }
}
</script>

<style scoped>

</style>