<template>
  <div>
    <h2>Redirect to website</h2>
    <p>
      In order to go to the site, you need to click once on the
      <code><b>Ask Looona</b></code> and confirm the permission to use the
      microphone in the browser and say for example
      <code><b>Looona go to finviz.com</b></code> or
      <code
        ><b>"Луна, перейди на <i>финвиз дот ком</i>"</b></code
      >.
      <b
        >It's necessary to pronounce the words loudly, clearly and with an
        arrangement</b
      >
    </p>
    <h2>Pronunciation of phrases</h2>
    <p>
      The current feature currently supports certain phrases for pronunciation.
      You should to click once on
      <code><b>Utter by Looona</b></code> then once on
      <code><b>Ask Looona</b></code> and say the phrase. If you manage to get
      into the desired phrase - congratulations＼(￣▽￣)／ the full list of
      phrases is periodically updated and you can find out from the developer of
      this service by contacting him through the
      <code @click="$router.push({ name: 'Contacts' })"><a>contacts</a></code>
    </p>
    <div id="footter">
      <h2>
        Stop Looona
      </h2>
      <p>
        This function stops the Looona from working. To resume it's work, you
        must reload the page
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
  text-shadow: 2px 2px 2px black, 0 0 1em black;
  h2 {
    color: rgb(192, 19, 48);
  }
  #footter {
    position: fixed;
    bottom: 20px;
  }
  #link {
    position: fixed;
    bottom: 20px;
    right: 20px;
    ul {
      // display: flex;
      li {
        list-style-type: none;
        color: rgb(192, 19, 48);
        font-size: 24px;
        padding-right: 10px;
        &:hover {
          color: rgb(255, 255, 255);
        }
      }
    }
  }
  font-size: 18px;
  color: rgb(88, 223, 155);
  cursor: default;
  code {
    color: rgb(58, 58, 233);
    font-size: 20px;
  }
  a {
    color: rgb(58, 58, 233);
    &:hover {
      cursor: pointer;
      color: rgb(255, 255, 255) !important;
    }
  }
}
</style>
