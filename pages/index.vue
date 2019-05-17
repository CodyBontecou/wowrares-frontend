<script>
  export default {
    async fetch({store}) {
      await store.dispatch('fetchAllZones');
    },
  }
</script>
