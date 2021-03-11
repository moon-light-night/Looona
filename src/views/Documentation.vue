<template>
  <div class="docs">
    <div class="docs__sidebar">
      <div class="docs__sidebar-item" id="redirect" @click="getId">
        Redirect
      </div>
      <div class="docs__sidebar-item" id="pronounce" @click="getId">
        Pronunciation
      </div>
      <div class="docs__sidebar-item" id="stop" @click="getId">Stop Looona</div>
    </div>
    <div class="docs__content">
      <div class="docs__content-item" v-if="this.id === 'redirect'">
        <h2 class="docs__content-item-title">Redirect to website</h2>
        <p class="docs__content-item-text">
          In order to go to the site, you need to click once on the
          <code><b>Ask Looona</b></code> and confirm the permission to use the
          microphone in the browser and say for example
          <code><b>"Looona go to finviz.com"</b></code> or
          <code
            ><b>"Луна, перейди на <i>финвиз дот ком</i>"</b></code
          >.
          <b
            >It's necessary to pronounce the words loudly, clearly and with an
            arrangement</b
          >
        </p>
      </div>

      <div class="docs__content-item" v-if="this.id === 'pronounce'">
        <h2 class="docs__content-item-title">Pronunciation of phrases</h2>
        <p class="docs__content-item-text">
          The current feature currently supports certain phrases for
          pronunciation. You should to click once on
          <code><b>Utter by Looona</b></code> then once on
          <code><b>Ask Looona</b></code> and say the phrase. If you manage to
          get into the desired phrase - congratulations＼(￣▽￣)／ the full list
          of phrases is periodically updated and you can find out from the
          developer of this service by contacting him through the
          <code @click="$router.push({ name: 'Contacts' })"
            ><a class="links">contacts</a></code
          >
        </p>
      </div>

      <div class="docs__content-item" v-if="this.id === 'stop'">
        <h2 class="docs__content-item-title">Stop Looona</h2>
        <p class="docs__content-item-text">
          This function stops the Looona from working. To resume it's work, you
          must reload the page
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: '',
  }),
  methods: {
    getId() {
      this.id = ''
      this.id = event.target.id
    },
  },
}
</script>

<style lang="scss" scoped>
.docs {
  display: flex;
  color: rgb(255, 255, 255);
  height: 100%;
  &__sidebar {
    width: 200px;
    height: 90vh;
    display: flex;
    flex-direction: column;
    background: linear-gradient(135deg, blue, rgb(83, 240, 167) 100%);
    @media (max-width: 650px) {
      width: 100px;
    }
  }
  &__sidebar-item {
    font-size: 20px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.6s;
    &:hover {
      cursor: pointer;
      text-shadow: 1px 1px 2px black, 0 0 1em blue;
      transform: scale(1.1);
      color: black;
    }
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  &__content {
    width: 100%;
  }
  &__content-item {
    margin: 30px;
    text-shadow: 2px 2px 3px black, 1em 1em 1em black;
  }
  &__content-item-text {
    font-size: 20px;
    @media (max-width: 650px) {
      font-size: 14px;
    }
  }
  &__content-item-title {
    color: blue;
    @media (max-width: 650px) {
      font-size: 20px;
    }
  }
}
.links {
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
}
</style>
