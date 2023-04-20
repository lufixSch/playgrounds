<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let title = '';
  let deadline = '';

  function handleCreate() {
    if (!title) return;

    dispatch('create', {
      title,
      deadline,
      completed: false,
      id: Date.now(),
    });

    title = '';
    deadline = '';
  }
</script>

<form on:submit|preventDefault={handleCreate}>
  <label>
    Title
    <input type="text" bind:value={title} />
  </label>
  <label>
    Deadline
    <input type="date" bind:value={deadline} />
  </label>
  <button type="submit">Create</button>
</form>
