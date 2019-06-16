<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card bg-secondary text-white">
      <q-card-section>
        <div class="text-h6">{{todo.header}}</div>
      </q-card-section>

      <q-card-section>
        {{ todo.text }}
      </q-card-section>

      <q-separator dark/>

      <q-card-actions>
        <q-btn flat clickable @click="onEdit">
          <q-item-section avatar>
            <q-icon name="edit"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Edit</q-item-label>
          </q-item-section>
        </q-btn>
        <q-btn flat clickable @click="onDelete">
          <q-item-section avatar>
            <q-icon name="delete"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Delete</q-item-label>
          </q-item-section>
        </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      id: {
        type: Number,
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
  methods: {
    onEdit() {
      this.$router.push(`/todo/${this.todo.id}`);
    },
    onDelete() {
      this.$api.delete(this.todo.id);

      this.$emit('updated');
    },
  },
};
</script>

<style scoped>
</style>
