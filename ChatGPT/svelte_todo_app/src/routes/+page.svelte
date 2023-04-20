<script lang="ts">
  import CreateTodo from '../lib/components/create_todo.svelte';
  import TodoItems from '../lib/components/todo_items.svelte';
  import type ToDoItem from '../lib/interfaces/todo_item';

  export let todo_items: ToDoItem[] = [];

  function handleCreate(event: CustomEvent<ToDoItem>) {
    todo_items = [...todo_items, event.detail];
  }

  function onComplete(event: CustomEvent<ToDoItem>) {
    todo_items = todo_items.map((item) => {
      if (item.id === event.detail.id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });
  }

  function onDelete(event: CustomEvent<ToDoItem>) {
    todo_items = todo_items.filter((item) => item.id !== event.detail.id);
  }
</script>

<h1>To-Do App</h1>

<CreateTodo on:create={handleCreate} />

<TodoItems items={todo_items} on:complete={onComplete} on:delete={onDelete} />
