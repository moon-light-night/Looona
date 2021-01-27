<template>
  <div>
    <p>Hello from view about.vue</p>
    <button @click="$router.push({ name: 'MainPage' })">to mainpage</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
p {
  color: green;
}
</style>
