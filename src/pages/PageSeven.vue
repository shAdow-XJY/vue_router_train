<template>
  <div>watch监听接收query参数 / useRoute接收params参数 / </div>
  <br>
  <button @click = "routeBack">路由返回Button</button>
  <br>
  {{pageInfo}}
  <br>
  <input type="text" v-model="pageInfo" placeholder="输入传给pageSix的参数">
  <br>
  <button @click = "routeQueryTo">路由query传参Button</button>
  <br>

  <img alt="five" src="../assets/7.png" style="width: 400px;height: 400px;">
</template>

<script>
export default {
  name: "PageSeven"
}
</script>

<style scoped>

</style>