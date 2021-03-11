<template>
  <div class="desc">
    <p class="desc__text">
      Hi ヽ(・∀・)ﾉ you're on my service. At the moment it includes the voice
      assistant "Looona" and brief documentation for her. In the direction of
      travel, if I have free time, I'll try to add new features. Pleasant use)
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
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-evenly;
  &__text {
    display: flex;
    justify-content: center;
    width: 800px;
    font-size: 24px;
    margin: 0 auto;
    font-family: 'Josefin Sans', sans-serif;
    text-shadow: 4px 4px 6px black, 2em 2em 2em black;
    @media (max-width: 850px) {
      width: 90%;
      font-size: 22px;
    }
    @media (max-width: 400px) {
      font-size: 16px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    width: max-content;
    font-size: 28px;
    font-family: 'Oxygen', sans-serif;
    text-decoration: none;
    color: white;
    margin: 0 auto;
    transition: all 0.3s linear;
    width: 200px;
    &:hover {
      text-shadow: 1px 1px 2px black, 0 0 1em blue;
      cursor: pointer;
      transform: scale(1.1);
      color: rgb(15, 19, 236);
    }
  }
}
</style>
