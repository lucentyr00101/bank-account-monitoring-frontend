<template lang="pug">
  v-row.h-100(align="center" justify="center")
    v-col(lg="4")
      v-form(ref="loginForm" @submit.prevent="submitLogin")
        v-card.pa-5
          v-card-text
            v-text-field(width="50%" label="Username" outlined v-model="username")
            v-text-field(label="Password" outlined v-model="password" type="password")
            .d-flex.justify-space-between.pt-0.pb-3.align-center
              a.mb-0.tertiary--text Forgot your password?
              v-btn.px-8(color="primary" type="submit") Login
</template>

<script>
import axios from 'axios'
import * as api from '@/utils/api'

export default {
  data() {
    return {
      username: 'admin@email.com',
      password: 'password',
    }
  },
  methods: {
    async submitLogin() {
      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)
        formData.append('grant_type', 'password')
        formData.append('client_id', 2)
        formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)

        const res = await axios.post(api.login(), formData)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>