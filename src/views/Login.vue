<template>
  <div id="modal-div">
    <form class="col s12 card auth-card" @submit.prevent="submitHandler">
      <div class="card-content">
        <div class="input-field col s12">
          <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{
              invalid:
                ($v.email.$dirty && !$v.email.required) ||
                ($v.email.$dirty && !$v.email.email),
            }"
          />
          <label for="email">Email</label>
          <small class="invalid" v-if="$v.email.$dirty && !$v.email.required"
            >Email can't be empty</small
          >
          <small class="invalid" v-else-if="$v.email.$dirty && !$v.email.email"
            >Enter the correct email</small
          >
        </div>
        <div class="input-field col s12">
          <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{
              invalid:
                ($v.password.$dirty && !$v.password.required) ||
                ($v.password.$dirty && !$v.password.minLength) ||
                ($v.password.$dirty && !$v.password.maxLength),
            }"
          />
          <label for="password">Password</label>
          <small
            class="invalid"
            v-if="$v.password.$dirty && !$v.password.required"
            >Enter the password</small
          >
          <small
            class="invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Min. - {{ $v.password.$params.minLength.min }}; now -
            {{ password.length }} characters</small
          >
          <small
            class="invalid"
            v-else-if="$v.password.$dirty && !$v.password.maxLength"
            >Max. - {{ $v.password.$params.minLength.min }}; now -
            {{ password.length }} characters</small
          >
        </div>
        <div class=" input-field col">
          <button class="btn waves-effect waves-light blue" type="submit">
            Login
            <i class="material-icons right">input</i>
          </button>
        </div>
        <div id="sending" class="input-field col s12">
          <p>Don't have an account yet?</p>
          <a @click="$router.push('/registration')">Registration</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    email: '',
    password: '',
  }),
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6), maxLength: maxLength(30) },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        //if condition system $v is invalid
        this.$v.$touch() //call method touch which activated validate
        return // for what logic of this method isnt called
      }
      const formData = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/main')
      } catch (error) {}
    },
  },
}
</script>

<style lang="scss" scoped>
#modal-div {
  .invalid {
    color: #f44336;
  }
  .input-field {
    margin-bottom: 0;
  }
  position: relative;
  width: 500px;
  background-color: rgb(87, 79, 79);
  border-radius: 5px;
  height: max-content;
  margin: 9% auto;
  @media (max-width: 550px) {
    width: 90%;
    margin: 30px auto;
  }
  .card-content {
    @media (max-width: 550px) {
      padding: 0;
    }
  }
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
