<template>
  <div>
    {{pageInfo}}
    <button @click = "routeTo">路由进入Button</button>
  </div>
  <img alt="home" src="../assets/logo.png">
</template>

<script>
export default {
  name: "HomePage",
  data(){
    return {
      pageInfo : "HomePage",
    }
  },
  methods: {
    routeTo(){
      this.$router.push("pageOne")
    }
  }
}
</script>

<style scoped>

</style>