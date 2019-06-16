<template>
  <q-item clickable tag="router-link" :to="link.path" exact>
    <q-item-section avatar>
      <q-icon :name="link.icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{link.header}}</q-item-label>
      <q-item-label caption>{{link.text}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'DrawerItem',
  props: {
    link: {
      path: {
        type: String,
        required: true,
      },
      icon: {
        type: String,
        required: true,
      },
      header: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  },
};
</script>

<style scoped>

</style>
