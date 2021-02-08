<template>
  <div>
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
          <!-- Dropdown Trigger -->
          <li>
            <a class="dropdown-trigger" ref="dropdown" data-target="dropdown1"
              >UserName<i class="material-icons right">arrow_drop_down</i></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  mounted() {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
    })
  },
}
</script>

<style lnag="scss" scoped>
img {
  padding-left: 7px;
  padding-top: 7px;
}
a {
  text-decoration: none;
}
#nav {
}
</style>
