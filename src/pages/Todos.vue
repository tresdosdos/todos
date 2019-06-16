<template>
  <q-page class="flex flex-center">
    <template v-if="todos.length">
      <t-todo
        v-for="todo of todos"
        :todo="todo"
        :key="todo.id || todo.header"
        @updated="onUpdate"
      ></t-todo>
    </template>
    <template v-else>
      <div>No todos yet</div>
    </template>
  </q-page>
</template>

<style>
</style>

<script>
import Todo from 'components/Todo';

export default {
  name: 'Todos',
  components: {
    't-todo': Todo,
  },
  data() {
    return {
      todos: [],
    };
  },
  beforeMount() {
    this.todos = this.$api.get();
  },
  methods: {
    onUpdate() {
      this.todos = this.$api.get();
    },
  },
};
</script>
