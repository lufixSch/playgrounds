<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type ToDoItem from '../interfaces/todo_item';
  import TodoItem from './todo_item.svelte';

  export let items: ToDoItem[];

  const dispatch = createEventDispatcher();

  function handleDelete(event: CustomEvent<ToDoItem>) {
    dispatch('delete', event.detail);
  }

  function handleComplete(event: CustomEvent<ToDoItem>) {
    dispatch('complete', event.detail);
  }
</script>

<ul>
  {#each items as item (item.id)}
    <li>
      <TodoItem {item} on:delete={handleDelete} on:complete={handleComplete} />
    </li>
  {/each}
</ul>
