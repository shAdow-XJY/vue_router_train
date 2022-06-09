<template>
  <div>vue 2.0 / vue-router 3.x 路由跳转</div>
  <div>
    <button @click = "routeBack">路由返回Button</button>
    {{pageInfo}}
    <button @click = "routeTo">路由进入Button</button>
  </div>
  <img alt="one" src="../assets/1.png" style="width: 800px;height: 500px;">
</template>

<script>
export default {
  name: "PageOne",
  data(){
    return {
      pageInfo : "pageOne"
    }
  },
  methods:{
    routeBack(){
      this.$router.back()
    },
    routeTo(){
      this.$router.push("/pageTwo")
    }
  }
}
</script>

<style scoped>

</style>