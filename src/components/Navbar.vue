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
        <div class="nav__row-item" @click="$router.push({ name: 'Login' })">
          Logout
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: 2px solid black;
  &__row {
    display: flex;
    justify-content: space-between;
    height: 60px;
    background-color: blue;
    width: 100%;
  }
  &__row-logo {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      &:hover {
        cursor: pointer;
      }
      @media (max-width: 350px) {
        width: 40px;
      }
    }
  }
  &__row-items {
    display: flex;
    height: 50px;
    font-size: 22px;
    align-self: center;
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
    margin-right: 20px;
    padding: 0 5px;
    color: white;
    transition-duration: 0.5s;
    border: 1px solid blue;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
      background-color: rgb(5, 5, 168);
      border: 1px solid black;
    }
    @media (max-width: 450px) {
      margin-right: 0;
    }
  }
}
</style>
