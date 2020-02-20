<template lang="pug">
  v-navigation-drawer(app clipped v-model="drawer" color="secondary lighten-2" expand-on-hover :mini-variant="true")
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
  }
}
</script>

<style lang="stylus">
  .menu-active-list
    color #f7a7a6 !important
</style>