<template>
  <div> 子路由 PageTen </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <img alt="ten" src="../assets/10.png" style="width: 800px;height: 500px;">
</template>

<script>
export default {
  name: "PageTen",
  methods:{
    routeBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>