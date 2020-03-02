<template lang="pug">
  v-app-bar(app color="primary" clipped-left)
    v-toolbar-title Title
    v-spacer
    v-btn(icon @click="logout()")
      v-icon mdi-logout
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.destroyToken()
      this.$router.go({ name: 'login' })
    }
  },
}
</script>