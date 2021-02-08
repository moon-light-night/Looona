<template>
  <div id="modal-div">
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <div class="row">
          <div id="sending" class="input-field col s12">
            <button
              class="btn waves-effect waves-light blue"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
            <p>Already have an account?</p>
            <a @click="$router.push('/')">Login</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#modal-div {
  .row {
    margin-bottom: 0;
  }
  position: relative;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  height: max-content;
  margin: 9% auto;
  p {
    color: rgb(0, 0, 0);
    font-size: 20px;
    cursor: default;
  }
  a {
    color: rgb(0, 0, 0);
    font-size: 20px;
    &:hover {
      color: rgb(38, 21, 187);
      cursor: pointer;
    }
  }
  #sending {
    display: flex;
    justify-content: space-between;
  }
}
</style>
