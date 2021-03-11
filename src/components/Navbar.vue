<template>
  <div class="nav">
    <div class="nav__row">
      <div class="nav__row-logo">
        <img
          src="@/assets/moon.png"
          @click="$router.push({ name: 'MainPage' })"
        />
      </div>
      <div class="nav__row-items">
        <div
          class="nav__row-item"
          @click="$router.push({ name: 'Documentation' })"
        >
          Documentation
        </div>
        <div class="nav__row-item" @click="$router.push({ name: 'About' })">
          About
        </div>
        <div class="nav__row-item" @click="$router.push({ name: 'Contacts' })">
          Contacts
        </div>
        <div class="nav__row-item" @click.prevent="logout">
          Logout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__row {
    display: flex;
    justify-content: space-between;
    min-height: 10vh;
    background-color: blue;
    width: 100%;
  }
  &__row-logo {
    display: flex;
    align-items: center;
    margin: 5px;
    img {
      transition: all 0.3s linear;
      width: 48px;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
      @media (max-width: 350px) {
        width: 40px;
      }
    }
  }
  &__row-items {
    display: flex;
    font-size: 22px;
    align-self: center;
    margin: 0 10px 0 0;
    @media (max-width: 650px) {
      font-size: 16px;
    }
    @media (max-width: 450px) {
      font-size: 14px;
    }
  }
  &__row-item {
    display: flex;
    align-items: center;
    margin: 5px 20px;
    padding: 10px 10px;
    color: white;
    transition: all 0.3s linear;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
      border: 1px black;
      transform: scale(1.1);
      color: black;
      text-shadow: 1px 1px 2px black, 0 0 1em blue;
    }
    @media (max-width: 850px) {
      margin: 5px 0;
    }
    @media (max-width: 450px) {
      margin-right: 0;
      padding: 0 2px;
    }
  }
}
</style>
