<template>
  <!-- <div id="drp__nav">
    <ul id="dropdown1" class="dropdown-content">
      <li><a class="green-text" href="#!">profile</a></li>
      <li><a class="red-text" href="#!">logout</a></li>
    </ul>
    <nav>
      <div id="nav" class="nav-wrapper #311b92 deep-purple darken-4">
        <img src="@/assets/moon_icon-icons.com_62253.png" class="brand-logo" />
        <ul class="right hide-on-med-and-down">
          <li>
            <a @click="$router.push({ name: 'Documentation' })"
              >Documentation</a
            >
          </li>
          <li><a @click="$router.push({ name: 'About' })">About service</a></li>
          <li><a @click="$router.push({ name: 'Contacts' })">Contacts</a></li>
          <li>
            <a class="dropdown-trigger" ref="dropdown" data-target="dropdown1"
              >UserName<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div> -->
  <div>
    <div class="nav__row">
      <div class="row__logo"><img src="@/assets/moon.png" /></div>
      <div class="row__items">
        <div class="item">Documentation</div>
        <div class="item">About</div>
        <div class="item">Contacts</div>
        <div class="item">Logout</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav__row {
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: blue;
  width: 100%;
  .row__logo {
    img {
      width: 48px;
    }
  }
  .row__items {
    display: flex;
    height: 50px;
    font-size: 22px;
    align-self: center;
    .item {
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
    }
  }
}
</style>
