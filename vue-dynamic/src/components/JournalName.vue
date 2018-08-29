<template>
  <div class="journal__name">journal: {{ getJournalName }}</div>
</template>
<script>
export default {
  name: 'Numbers',
  computed: {
    getJournalName() {
      return this.$store.getters['currentJournal/getJournalName'];
    },
  }
}
</script>
