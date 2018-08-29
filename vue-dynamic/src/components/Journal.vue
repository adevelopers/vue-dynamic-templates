<template>
  <div class="journal">
    <JournalName />
    <TableCommon template-name="big" />
    <TableCommon template-name="main" />
    <TableCommon template-name="small" />
  </div>
</template>
<script>
import TableCommon from './TableCommon.vue'
import JournalName from './JournalName.vue'

export default {
  name: 'Journal',
  components: {
    TableCommon,
    JournalName
  }
}
</script>
