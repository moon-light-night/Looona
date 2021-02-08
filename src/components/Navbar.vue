<template>
  <div>
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div id="nav" class="nav-wrapper #1976d2 blue darken-2">
        <img src="@/assets/moon_icon-icons.com_62253.png" class="brand-logo" />
        <ul class="right hide-on-med-and-down">
          <li>
            <a @click="$router.push({ name: 'Documentation' })"
              >Documentation</a
            >
          </li>
          <li><a @click="$router.push({ name: 'About' })">About service</a></li>
          <li><a @click="$router.push({ name: 'Contacts' })">Contacts</a></li>
          <!-- Dropdown Trigger -->
          <li>
            <a class="dropdown-trigger" data-target="dropdown1"
              >UserName<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style lnag="scss" scoped>
img {
  padding-left: 7px;
  padding-top: 7px;
}
</style>
