<template>
  <div id="app" class='body-wrap'>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='sass'>
  @import 'src/assets/styles/app.scss'
</style>

<style scoped>
    .body-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
</style>
