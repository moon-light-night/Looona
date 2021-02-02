<template>
  <div id="content" class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-1 variant="dark"
          >Redirect to website</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text
            >In order to go to the site, you need to click once on the
            <code><b>Ask Looona</b></code> and confirm the permission to use the
            microphone in the browser and say for example
            <code><b>Looona go to finviz.com</b></code> or
            <code
              ><b>"Луна, перейди на <i>финвиз дот ком</i>"</b></code
            ><br />
            <b
              >It's necessary to pronounce the words loudly, clearly and with an
              arrangement</b
            ></b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1" variant="danger">
      <b-card-header
        header-tag="header"
        class="p-1"
        role="tab"
        variant="danger"
      >
        <b-button block v-b-toggle.accordion-2 variant="dark"
          >Pronunciation of phrases</b-button
        >
      </b-card-header>
      <b-collapse
        id="accordion-2"
        accordion="my-accordion"
        role="tabpanel"
        variant="danger"
      >
        <b-card-body variant="danger">
          <b-card-text
            >The current feature currently supports certain phrases for
            pronunciation. If you manage to get into the desired phrase -
            congratulations... the full list of phrases is periodically updated
            and you can find out from the developer of this service by
            contacting him through the
            <code @click="$router.push({ name: 'Contacts' })"
              ><a>contacts</a></code
            ></b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.accordion-3 variant="dark"
          >Stop Looona</b-button
        >
      </b-card-header>
      <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text
            >This function stops the moon from working. To resume it's work, you
            must reload the page</b-card-text
          >
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#content {
  width: 500px;
  position: fixed;
  right: 10px;
  top: 10px;
  cursor: default;
  code {
    color: rgb(27, 27, 145);
    font-size: 16px;
  }
  a {
    &:hover {
      cursor: pointer;
      color: black;
    }
  }
}
.card-body {
  background-color: rgb(124, 121, 121);
}
</style>
