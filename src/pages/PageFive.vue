<template>
  <div>watch监听接收query参数 / useRoute接收params参数 / </div>

  <br>pageFiveQueryInfo:{{pageFiveQueryInfo}}
  <br>pageFiveParamsInfo:{{pageFiveParamsInfo}}

  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  {{pageInfo}}
  <br>
  <input type="text" v-model="pageInfo" placeholder="输入传给pageSix的参数">
  <br>
  <button @click = "routeQueryTo">路由query传参Button</button>
  <br>

  <img alt="five" src="../assets/5.png" style="width: 400px;height: 400px;">
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
  watch: {
    // eslint-disable-next-line no-unused-vars
    '$route' (to,from){
      this.getRouteData()
    }
  },
  methods: {
    getRouteData(){
      this.pageFiveQueryInfo = this.$route.query.queryPass
      this.$router.go(0)
    }
  },
  setup () {
    const route = useRoute();
    const router = useRouter();
    const pageFiveParamsInfo = ref(route.params.paramsPass);

    const routeBack = () => {
      router.back()
    }

    return {
      pageFiveParamsInfo,
      routeBack
    }
  }
}
</script>

<style scoped>

</style>