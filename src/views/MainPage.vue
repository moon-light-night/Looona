<template>
  <div class="desc">
    <p class="desc__text">
      Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
      reiciendis molestias consectetur atque sed beatae. Neque repellendus
      veniam hic, qui nemo nihil velit quos! Iusto odit minus voluptatibus
      voluptates soluta!
    </p>
    <a class="desc__btn" @click="$router.push({ name: 'Looona' })"
      >Get started</a
    >
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.desc {
  color: white;

  &__text {
    display: flex;
    justify-content: center;
    width: 800px;
    padding-top: 150px;
    font-size: 24px;
    margin: 0 auto;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: 2px 2px 3px black, 1em 1em 1em black;
    @media (max-width: 850px) {
      width: 90%;
    }
    @media (max-width: 400px) {
      font-size: 18px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-family: 'Oxygen', sans-serif;
    margin: 100px 0;
    text-decoration: none;
    color: white;
    &:hover {
      color: rgb(92, 129, 250);
      text-shadow: 1px 1px 2px black, 0 0 1em blue;
      cursor: pointer;
    }
  }
}
</style>
