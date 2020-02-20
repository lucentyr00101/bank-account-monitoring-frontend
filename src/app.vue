<template lang="pug">
  v-app

    v-navigation-drawer(app v-if="this.$auth.isAuthenticated()" clipped v-model="drawer" color="secondary lighten-2" expand-on-hover :mini-variant="true")
      v-list(dense)
        v-list-item(@click="")
          v-list-item-icon
            v-icon mdi-home
          v-list-item-content
            v-list-item-title Home
        v-list-group(active-class="menu-active-list" v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action color="white")
          template(v-slot:activator)
            v-list-item-content
              v-list-item-title(v-text="item.title")
          v-list-item(v-for="subItem in item.items" :key="subItem.title" @click="")
            v-list-item-content
              v-list-item-title(v-text="subItem.title")

    v-app-bar(app color="primary" clipped-left v-if="this.$auth.isAuthenticated()")
      v-toolbar-title Title
      v-spacer
      v-btn(icon @click="logout()")
        v-icon mdi-logout
    v-content
      v-container.h-100(fluid)
        router-view
    v-footer(app color='primary' padless)
      v-col.text-center.overline(cols="12") &copy; {{ new Date().getFullYear() }}

</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          action: 'mdi-settings',
          title: 'Settings',
          items: [
            { title: 'Profile Settings' }
          ],
        }
      ]
    }
  },
  methods: {
    logout() {
      this.$auth.destroyToken()
      this.$router.go({ name: 'login' })
    }
  }
}
</script>

<style lang="stylus">
  home,  body
    margin: 0
    padding: 0
    .h-100
      height 100%
    .menu-active-list
      color #f7a7a6 !important
</style>