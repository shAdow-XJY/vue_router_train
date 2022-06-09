<template>
  <div> 子路由 PageNine </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <img alt="nine" src="../assets/9.png" style="width: 800px;height: 500px;">
</template>

<script>
export default {
  name: "PageNine",
  methods:{
    routeBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>