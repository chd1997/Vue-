<template>
  <div id="app">    
    <!-- 显示组件的内容 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
