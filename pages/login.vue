<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
          Username {{ $auth.user }}
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-6">
        <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************">

      </div>
      <div class="flex items-center justify-between">
        <button @click="login"
                class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
          Sign In
        </button>
      </div>
    </form>
    <p class="text-center text-grey text-xs">
      ©2019 Acme Corp. All rights reserved.
    </p>
  </div>
</template>

<script>
  export default {
    layout: 'login',
    methods: {
      async login() {

        try {

          await this.$auth.loginWith('local', {
            data: {
              username: this.email,
              password: this.password
            }
          })

          alert('successful')


        } catch (error) {

        }
      }
    },
    data(){
      return {
        email : '',
        password : ''
      }
    }
  }
</script>
