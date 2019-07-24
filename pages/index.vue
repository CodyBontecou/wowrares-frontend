<template>
  <div>
    <h1 class="white--text">Home Page</h1>
  </div>
</template>
<script>
  export default {
    async fetch({store}) {
      await store.dispatch('fetchAllZones');
    },
  }
</script>
