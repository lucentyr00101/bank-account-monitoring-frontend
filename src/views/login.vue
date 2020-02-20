<template lang="pug">
  v-row.h-100(align="center" justify="center")
    v-col(lg="4")
      v-form(ref="loginForm" @submit.prevent="submitLogin")
        v-card.pa-5
          v-card-text
            v-alert(:type="alert.type" :value="alert.show" transition="scale-transition") {{ alert.message }}
            v-text-field(width="50%" label="Username" outlined v-model="username" :readonly="loading")
            v-text-field(label="Password" outlined v-model="password" type="password" :readonly="loading")
            .d-flex.justify-space-between.pt-0.pb-3.align-center
              a.mb-0.tertiary--text Forgot your password?
              v-btn.px-8(color="primary" type="submit" :loading="loading") Login
</template>

<script>
import axios from 'axios'
import * as api from '@/utils/api'

export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      alert: {
        type: 'success',
        message: '',
        show: false
      }
    }
  },
  methods: {
    showAlert(type, message) {
      this.alert.type = type
      this.alert.message = message
      this.alert.show = true
    },
    async submitLogin() {
      this.loading = true
      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('password', this.password)
        formData.append('grant_type', 'password')
        formData.append('client_id', 2)
        formData.append('client_secret', process.env.VUE_APP_CLIENT_SECRET)

        const res = await axios.post(api.login(), formData)
        this.$auth.setToken(res.data.access_token, res.data.expires_in + Date.now())
        this.showAlert('success', 'Successfully logged in! Redirecting to home page...')
        setTimeout(() => {
          this.$router.go({ name: 'home' })
        }, 1000)
        // console.log(res)
      } catch (error) {
        this.loading = false
        this.showAlert('error', error.response.data.message)
      }
    }
  }
}
</script>