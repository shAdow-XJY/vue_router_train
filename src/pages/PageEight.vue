<template>
  <div> 子路由 PageEight </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  <img alt="eight" src="../assets/8.png" style="width: 800px;height: 500px;">
</template>

<script>
export default {
  name: "PageEight",
  methods:{
    routeBack(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

</style>