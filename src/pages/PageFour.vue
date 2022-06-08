<template>
  <div>this.$route.query/params.参数名 接收参数 / vue 3.0 v-model / userRouter 传参</div>

  <br>pageFourQueryInfo:{{pageFourQueryInfo}}
  <br>pageFourParamsInfo:{{pageFourParamsInfo}}

  <br>
    <button @click = "routeBack">路由返回Button</button>
  <br>
    {{pageInfo}}
  <br>
    <input type="text" v-model="pageInfo" placeholder="输入传给pageFive的参数">
  <br>
    <button @click = "routeQueryTo">路由query传参Button</button>
  <br>
    <button @click = "routeParamTo">路由param传参Button</button>
  <br>

  <img alt="three" src="../assets/4.png" style="width: 400px;height: 400px;">
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
export default {
  name: "PageFour",
  data(){
    return {
      pageFourQueryInfo : "",
      pageFourParamsInfo: ""
    }
  },
  created() {
    this.pageFourQueryInfo = this.$route.query.queryPass
    this.pageFourParamsInfo = this.$route.params.paramsPass
  },
  setup(){
    const router = useRouter();

    const pageInfo = ref("")

    const routeBack = () => {
      router.go(-1)
    }

    const routeQueryTo = () => {
      router.push({
        path:"/pageFive", //或者 name:"pageFive",
        query:{
          queryPass:"传给PageFive的query参数:"+pageInfo.value
        }
      })
    }

    const routeParamTo = () => {
      router.push({
        name: "pageFive",
        params:{
          paramsPass:"传给PageFive的params参数:"+pageInfo.value
        }
      })
    }

    return {
      pageInfo,
      routeBack,
      routeQueryTo,
      routeParamTo
    }

  }
}
</script>

<style scoped>

</style>