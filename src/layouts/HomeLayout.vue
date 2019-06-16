<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{routeName}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <t-drawer-item v-for="link of links" :link="link" :key="link.header"></t-drawer-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import DrawerLink from 'components/DrawerItem';

export default {
  name: 'HomeLayout',
  components: {
    't-drawer-item': DrawerLink,
  },
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      links: [
        {
          path: '/',
          icon: 'add',
          header: 'New todo',
          text: 'Manage your todos',
        },
        {
          path: '/todo',
          icon: 'list',
          header: 'Home',
          text: 'Add your todo',
        },
      ],
    };
  },
  computed: {
    routeName() {
      const wordReg = /($[a-z])|[A-Z][^A-Z]+/g;

      return this.$route.name.match(wordReg).join(' ');
    },
  },
};
</script>

<style>
</style>
