<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { ToDoItem } from '../interfaces';

  const dispatch = createEventDispatcher();

  export let item: ToDoItem;

  function handleDelete() {
    dispatch('delete', item);
  }

  function handleComplete() {
    dispatch('complete', item);
  }
</script>

<div>
  <h3>{item.title}</h3>
  <p>Deadline: {item.deadline}</p>
  <p>
    <label>
      <input
        type="checkbox"
        checked={item.completed}
        on:change={handleComplete}
      />
      Completed
    </label>
  </p>

  <button on:click={handleDelete}>Delete</button>
</div>
