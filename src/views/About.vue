<template>
  <div class="about">
    <div class="about__text">
      This service is free and cross-platform as it works when connected to the
      network. Remind you that for the speech recognizer to work correctly, you
      should <b>only</b> use the latest version of the
      <code>Google Chrome</code> or <code>Opera</code>. As the project develops,
      new features will be added and possibly an official application for the
      Looona, which you can find in Google Store or App Store. For assistance in
      project support or suggestions for improvement, application modernization,
      you can contact the developer by
      <a @click="$router.push('/contacts')">contacts</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  margin: 0 auto;
  padding: 50px 0;
  &__text {
    color: white;
    font-size: 28px;
    text-shadow: 2px 2px 3px black, 1em 1em 1em black;
    @media (max-width: 700px) {
      font-size: 18px;
    }
    a:hover {
      cursor: pointer;
      color: rgb(83, 240, 167);
    }
  }
}
</style>
