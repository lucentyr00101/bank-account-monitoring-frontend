<template lang="pug">
  v-navigation-drawer(app v-if="this.$auth.isAuthenticated()" clipped v-model="drawer" color="secondary lighten-2" expand-on-hover :mini-variant="true")
    v-list(dense)
      v-list-item(@click="" :to="{ name: 'home' }")
        v-list-item-icon
          v-icon mdi-home
        v-list-item-content
          v-list-item-title Home
      v-list-group(active-class="menu-active-list" v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action color="white")
        template(v-slot:activator)
          v-list-item-content
            v-list-item-title(v-text="item.title")
        v-list-item(active-class="menu-active-sub-list" v-for="subItem in item.items" :key="subItem.title" @click="" :to="subItem.link")
          v-list-item-content
            v-list-item-title(v-text="subItem.title")
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
            { title: 'Profile Settings', link: { name: 'show-profile' } },
          ],
        },
        {
          action: 'mdi-cash-multiple',
          title: 'Funds Management',
          items: [
            { title: 'Add Funds', link: { name: 'add-funds' } }
          ]
        }
      ]
    }
  }
}
</script>