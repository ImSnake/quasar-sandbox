<template>
  <q-page class="bg-grey-3 column">

<!--    <div class="row q-pl-md q-pr-none q-py-sm">
      <div class="text-h5">Здесь графики</div>
    </div>

    <div>{{yearData}}</div>-->

    <div class="row q-pl-md q-pr-none q-py-sm">
      <div class="col">
        <q-select
            label="Выбрать год"
            v-model="year"
            emit-value
            @update:model-value="getYearData()"
            :options="[
              { label: '2021 год', value: 2021 },
              { label: '2020 год', value: 2020 },
              { label: '2019 год', value: 2019 }
            ]" />
        <GraphSpeed :data="yearData"/>
      </div>
      <div class="col">
        <q-select
            label="Выбрать квартал"
            v-model="quarter"
            emit-value
            @update:model-value="countData()"
            :options="[
              { label: '1 квартал', value: 1 },
              { label: '2 квартал', value: 2 },
              { label: '3 квартал', value: 3 },
              { label: '4 квартал', value: 4 }
            ]" />

        <GraphSpeed :data="quarterData"/>
      </div>
    </div>



    <GraphYearPlanFact />


  </q-page>
</template>

<script>
import GraphSpeed from "@/components/GraphSpeed";
import GraphYearPlanFact from "@/components/GraphYearPlanFact.vue";

export default {
  name: "Dashboard",
  components: {
    GraphSpeed,
    GraphYearPlanFact,
  },

  data() {
    return {
      year: 2021,
      quarter: 1,
      yearData: {},
      quarterData: {}
    }
  },

  created() {
    console.log('dashboard created');
    this.getYearData();
  },

  computed: {},

  methods: {

    countData(){
      const plan = this.filterType(1);
      this.yearData.plan = this.formatValue(plan);
      this.quarterData.plan = this.formatValue(this.filterQuarter(this.quarter, plan));

      const fact = this.filterType(2);
      this.yearData.fact = this.formatValue(fact);
      this.quarterData.fact = this.formatValue(this.filterQuarter(this.quarter, fact));
    },

    filterType(id) {
      return this.$store.state.dashboard.find(item => item.year === this.year).data.filter(value => value.type_id === id);
    },

    filterQuarter(id, value) {
      return value.filter(value => value.quarter === id);
    },

    formatValue(value){
      return Math.round(value.map(item => item.total).reduce((prev, curr) => prev + curr, 0) / 1000000, 2);
    },

    async getYearData(){
      if (!this.$store.state.dashboard.find(item => item.year === this.year)) {
        await this.$store.dispatch('fetchYearData', this.year)
          .catch(error => {
            this.$router.push({
              name: 'ErrorDisplay',
              params: { error: error }
            });
          });
      }
      this.countData();
    }
  }

}
</script>

<style scoped>

</style>
