<template>
  <div id="modal-div">
    <div class="row">
      <form class="col s12" @submit.prevent="submitHandler">
        <div class="row">
          <div class="input-field col s6">
            <input
              id="first_name"
              v-model.trim="name"
              type="text"
              :class="{
                invalid:
                  ($v.name.$dirty && !$v.name.required) ||
                  ($v.name.$dirty && !$v.name.alpha),
              }"
            />
            <label for="first_name">Name</label>
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
              >Enter your name</small
            >
            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.alpha"
              >Name should contains only alpha symbols</small
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="email"
              v-model.trim="email"
              type="text"
              :class="{
                invalid:
                  ($v.email.$dirty && !$v.email.required) ||
                  ($v.email.$dirty && !$v.email.email),
              }"
            />
            <label for="email">Email</label>
            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
              >Enter your email</small
            >
            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.email"
              >Enter the correct email</small
            >
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input
              id="password"
              v-model.trim="password"
              type="password"
              :class="{
                invalid:
                  ($v.password.$dirty && !$v.password.required) ||
                  ($v.password.$dirty && !$v.password.minLength),
              }"
            />
            <label for="password">Password</label>
            <small
              class="helper-text invalid"
              v-if="$v.password.$dirty && !$v.password.required"
              >Pick a password</small
            >
            <small
              class="helper-text invalid"
              v-if="$v.password.$dirty && !$v.password.minLength"
              >Min. length password - {{ $v.password.$params.minLength.min }},
              now - {{ password.length }}</small
            >
          </div>
        </div>
        <div class="row">
          <div id="sending" class="input-field col s12">
            <button class="btn waves-effect waves-light blue" type="submit">
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
import { email, minLength, required, alpha } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
  }),
  validations: {
    name: { required, alpha },
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/main')
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
#modal-div {
  .row {
    margin-bottom: 0;
    padding: 0 24px;
    @media (max-width: 550px) {
      padding: 0;
    }
  }
  position: relative;
  width: 500px;
  background-color: white;
  border-radius: 5px;
  height: max-content;
  margin: 9% auto;
  @media (max-width: 550px) {
    width: 90%;
    margin: 30px auto;
  }
  p {
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-align: center;
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
.invalid {
  color: red !important;
}
</style>
