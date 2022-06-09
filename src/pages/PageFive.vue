<template>
  <div>created接收query参数 / useRoute接收params参数 / index.js中进入PageSix单路由守卫/拦截</div>

  <br>pageFiveQueryInfo:{{pageFiveQueryInfo}}
  <br>pageFiveParamsInfo:{{pageFiveParamsInfo}}

  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <button @click = "routePathTo">路由Button:使用path被拦截</button>
  <br>
  <button @click = "routeNameTo">路由Button:使用name可通过</button>
  <br>

  <img alt="five" src="../assets/5.png" style="width: 800px;height: 500px;">
</template>

<script>
import {useRoute,useRouter} from "vue-router";
import {ref} from "vue";
export default {
  name: "PageFive",
  data () {
    return {
      pageFiveQueryInfo: ""
    }
  },
  created() {
    this.pageFiveQueryInfo = this.$route.query.queryPass
  },
  setup () {
    const route = useRoute();
    const router = useRouter();
    const pageFiveParamsInfo = ref(route.params.paramsPass);

    const routeBack = () => {
      router.back()
    }
    const routePathTo = () => {
      router.push({
        path:'/pageSix',
        query:{
          no:"no"
        }
      })
    }
    const routeNameTo = () => {
      router.push({
        name:'pageSix',
      })
    }
    return {
      pageFiveParamsInfo,
      routeBack,
      routePathTo,
      routeNameTo
    }
  }
}
</script>

<style scoped>

</style>