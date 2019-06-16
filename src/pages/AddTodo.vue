<template>
  <q-page class="flex flex-center">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="header"
        label="Todo header *"
        lazy-rules
        :rules="[
         val => val && val.length > 0 || 'Please type something',
         val => val && val.length < 50 || 'Make text shorter that 50 chars',
         ]"></q-input>

      <q-input
        filled
        v-model="text"
        label="Todo text *"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Please type something',
         val => val && val.length < 256 || 'Make text shorter that 256 chars',
        ]"></q-input>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'AddTodo',
  props: {
    id: {
      type: String,
      required: false,
    },
    todo: {
      header: {
        type: String,
        required: false,
      },
      text: {
        type: String,
        required: false,
      },
    },
  },
  data: () => ({
    header: '',
    text: '',
  }),
  beforeMount() {
    const todos = this.$api.get() || [];
    const currentTodo = todos.find(todo => todo.id === +this.id);

    if (!currentTodo) {
      return;
    }

    this.header = currentTodo.header;
    this.text = currentTodo.text;
  },
  methods: {
    onSubmit() {
      if (!this.todo || !this.todo.id) {
        this.$api.post({
          header: this.header,
          text: this.text,
        });
      } else {
        this.$api.update({
          id: this.todo.id,
          header: this.header,
          text: this.text,
        });
      }

      this.$router.push('/');
    },
    onReset() {
      this.header = '';
      this.text = '';
    },
  },
};
</script>
