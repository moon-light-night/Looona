<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  background-color: rgb(0, 0, 0);
  opacity: 80%;
  position: fixed;
  width: 100%;
  height: 100%;
  router-view {
    z-index: 100;
  }
}
</style>
