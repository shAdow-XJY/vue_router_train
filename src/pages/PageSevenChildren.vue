<template>
  <br>
  <div> PageSevenChildren 组件路由守卫 / img动态src / 监听路由变化 </div>
  <br>
  <img alt="sevenChildren" :src="require('../assets/'+ srcPath + '.png')" style="width: 400px;height: 400px;">
</template>

<script>
export default {
  name: "PageSevenChildren",
  beforeRouteEnter (to,from,next) {
    if(from.name !== 'pageSeven'){
      next(vm => {
        vm.$router.push('/')
      })
    }else {
      next(true)
    }
  },
  data () {
    return {
      srcPath : "1"
    }
  },
  created() {
    this.srcPath = this.$route.query.srcPath
    console.log(this.srcPath)
  },
  //监听路由变化，调用函数方法getPath
  watch:{
    '$route':'getPath'
  },
  methods:{
    getPath(){
      this.srcPath = this.$route.query.srcPath
    }
  }
}
</script>

<style scoped>

</style>