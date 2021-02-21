<template>
  <div class="contacts">
    <div class="contacts__text">
      A big request to you, with all questions only on weekdays, on weekends the
      developer fills in his own mind and goes to admire the beautiful autumn
      sunset
    </div>
    <div class="contacts__links">
      <div class="contacts__link-item">
        <a href="https://t.me/glxmind"
          ><img src="@/assets/telegram.png" alt="img" class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://instagram.com/glxmind?igshid=f7z9cn093uer"
          ><img
            src="@/assets/instagram.png"
            alt="img"
            class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://github.com/moon-light-night"
          ><img src="@/assets/github.png" alt="img" class="contacts__link-img"
        /></a>
      </div>
      <div class="contacts__link-item">
        <a href="https://join.skype.com/invite/mpa8oesTx08d"
          ><img src="@/assets/skype.png" alt="img" class="contacts__link-img"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.contacts {
  &__text {
    font-size: 28px;
    width: 80%;
    padding: 15% 0;
    margin: 0 auto;
    color: white;
    text-shadow: 2px 2px 3px black, 1em 1em 1em black;
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  &__links {
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 20%;
    @media (max-width: 450px) {
      padding-bottom: 40%;
    }
  }
  &__link-img {
    width: 72px;
    @media (max-width: 450px) {
      width: 48px;
    }
  }
}
</style>
