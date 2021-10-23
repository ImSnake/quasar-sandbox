<template>
  <q-page class="bg-grey-3 column">

    <div class="row q-pl-md q-pr-none q-py-sm">
      <div class="text-h5">Здесь графики</div>
    </div>


  </q-page>
</template>

<script>
import GraphYearSpeed from "@/components/GraphYearSpeed";
import GraphYearPlanFact from "@/components/GraphYearPlanFact.vue";

export default {
  name: "Dashboard",
  components: {
    GraphYearSpeed,
    GraphYearPlanFact,
  },

}
</script>

<style scoped>

</style>
