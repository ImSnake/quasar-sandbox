<template>
  <q-page class="bg-grey-3 column">
    <q-select class="row q-px-md"
        label="Выбрать год"
        v-model="year"
        emit-value
        @update:model-value="getYearData()"
        :options="[
              { label: '2021 год', value: 2021 },
              { label: '2020 год', value: 2020 },
              { label: '2019 год', value: 2019 }
            ]" />
<!--    <q-select class="row q-px-md"
              label="Выбрать данные"
              v-model="type"
              emit-value
              @update:model-value="updateTableType()"
              :options="[
              { label: 'План', value: 1 },
              { label: 'Факт', value: 2 },
            ]" />-->

    <div class="row q-pl-md q-pr-none q-py-sm">
      <q-table
          title="Факт"
          :rows="factRows"
          :columns="title"
          row-key="name"

          binary-state-sort
          hide-bottom
          dense
          :rows-per-page-options="[13]"
          :table-header-class="{'income-table-header': true}"
          :table-class="{'income-table': true}" >

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="month_name" :props="props">{{ props.row.month_name }}</q-td>

            <q-td key="id_1" :props="props"> {{ vueNumberFormat(props.row.id_1.sum) }}
              <q-popup-edit v-model="props.row.id_1.sum" :title="props.row.id_1.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_1.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_2" :props="props"> {{ vueNumberFormat(props.row.id_2.sum) }}
              <q-popup-edit v-model="props.row.id_2.sum" :title="props.row.id_2.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_2.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_3" :props="props"> {{ vueNumberFormat(props.row.id_3.sum) }}
              <q-popup-edit v-model="props.row.id_3.sum" :title="props.row.id_3.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_3.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_4" :props="props"> {{ vueNumberFormat(props.row.id_4.sum) }}
              <q-popup-edit v-model="props.row.id_4.sum" :title="props.row.id_4.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_4.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_6" :props="props"> {{ vueNumberFormat(props.row.id_6.sum) }}
              <q-popup-edit v-model="props.row.id_6.sum" :title="props.row.id_6.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_6.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_5" :props="props"> {{ vueNumberFormat(props.row.id_5.sum) }}
              <q-popup-edit v-model="props.row.id_5.sum" :title="props.row.id_5.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_5.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="summary" :props="props">{{ vueNumberFormat(props.row.summary) }}</q-td>
            <q-td key="done" :props="props">{{ props.row.done }} %</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

    <div class="row q-pl-md q-pr-none q-py-sm">
      <q-table
          title="План"
          :rows="planRows"
          :columns="title"
          row-key="name"

          binary-state-sort
          hide-bottom
          dense
          :rows-per-page-options="[13]"
          :table-header-class="{'income-table-header': true}"
          :table-class="{'income-table': true}" >

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="month_name" :props="props">{{ props.row.month_name }}</q-td>

            <q-td key="id_1" :props="props"> {{ vueNumberFormat(props.row.id_1.sum) }}
              <q-popup-edit v-model="props.row.id_1.sum" :title="props.row.id_1.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_1.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_2" :props="props"> {{ vueNumberFormat(props.row.id_2.sum) }}
              <q-popup-edit v-model="props.row.id_2.sum" :title="props.row.id_2.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_2.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_3" :props="props"> {{ vueNumberFormat(props.row.id_3.sum) }}
              <q-popup-edit v-model="props.row.id_3.sum" :title="props.row.id_3.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_3.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_4" :props="props"> {{ vueNumberFormat(props.row.id_4.sum) }}
              <q-popup-edit v-model="props.row.id_4.sum" :title="props.row.id_4.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_4.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_6" :props="props"> {{ vueNumberFormat(props.row.id_6.sum) }}
              <q-popup-edit v-model="props.row.id_6.sum" :title="props.row.id_6.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_6.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="id_5" :props="props"> {{ vueNumberFormat(props.row.id_5.sum) }}
              <q-popup-edit v-model="props.row.id_5.sum" :title="props.row.id_5.title" buttons persistent label-set="Сохранить" label-cancel="Отмена">
                <q-input type="number" v-model="props.row.id_5.sum" dense autofocus :hint="props.row.month_name" />
              </q-popup-edit>
            </q-td>

            <q-td key="summary" :props="props">{{ vueNumberFormat(props.row.summary) }}</q-td>
            <q-td key="done" :props="props">{{ props.row.done }} %</q-td>
          </q-tr>
        </template>
      </q-table>
    </div>

  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Income",

  data() {
    return {
      year: 2021,

      title: [
        {
          name: 'month_name',
          required: true,
          label: 'Месяц',
          align: 'left',
          field: row => row.month_name,
          format: val => `${val}`,
          //sortable: true
        },
        { name: 'id_1', label: 'Интеграция', field: '1'},
        { name: 'id_2', label: 'Партнеры А', field: '2'},
        { name: 'id_3', label: 'Дистрибуция', field: '3'},
        { name: 'id_4', label: 'Core-3D', field: '4'},
        { name: 'id_6', label: 'Внешние рынки', field: '6'},
        { name: 'id_5', label: 'Прочее', field: '5'},
        { name: 'summary', label: 'Итого', field: 'summary'},
        { name: 'done', align: 'center', label: 'Выполнено, %', field: 'done', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      ],
      factRows: ref([]),
      planRows: ref([])
    }
  },

  created() {
    console.log('income created');
    this.getYearData();
  },

  methods: {
    async getYearData() {
      if (!this.$store.state.dashboard.find(item => item.year === this.year)) {
        await this.$store.dispatch('fetchYearData', this.year)
            .catch(error => {
              this.$router.push({
                name: 'ErrorDisplay',
                params: { error: error }
              });
            });
      }

      const test = this.$store.state.dashboard.find(el => el.year === this.year).data;

      /*const template = [
        { month_id: 1, month_name: 'Январь', summary: 0 },
        { month_id: 2, month_name: 'Февраль', summary: 0 },
        { month_id: 3, month_name: 'Март', summary: 0 },
        { month_id: 4, month_name: 'Апрель', summary: 0 },
        { month_id: 5, month_name: 'Май', summary: 0 },
        { month_id: 6, month_name: 'Июнь', summary: 0 },
        { month_id: 7, month_name: 'Июль', summary: 0 },
        { month_id: 8, month_name: 'Август', summary: 0 },
        { month_id: 9, month_name: 'Сентябрь', summary: 0 },
        { month_id: 10, month_name: 'Октябрь', summary: 0 },
        { month_id: 11, month_name: 'Ноябрь', summary: 0 },
        { month_id: 12, month_name: 'Декабрь', summary: 0 },
      ];*/

      this.factRows = [
        { month_id: 1, month_name: 'Январь', summary: 0 },
        { month_id: 2, month_name: 'Февраль', summary: 0 },
        { month_id: 3, month_name: 'Март', summary: 0 },
        { month_id: 4, month_name: 'Апрель', summary: 0 },
        { month_id: 5, month_name: 'Май', summary: 0 },
        { month_id: 6, month_name: 'Июнь', summary: 0 },
        { month_id: 7, month_name: 'Июль', summary: 0 },
        { month_id: 8, month_name: 'Август', summary: 0 },
        { month_id: 9, month_name: 'Сентябрь', summary: 0 },
        { month_id: 10, month_name: 'Октябрь', summary: 0 },
        { month_id: 11, month_name: 'Ноябрь', summary: 0 },
        { month_id: 12, month_name: 'Декабрь', summary: 0 }
      ];
      this.planRows = [
        { month_id: 1, month_name: 'Январь', summary: 0 },
        { month_id: 2, month_name: 'Февраль', summary: 0 },
        { month_id: 3, month_name: 'Март', summary: 0 },
        { month_id: 4, month_name: 'Апрель', summary: 0 },
        { month_id: 5, month_name: 'Май', summary: 0 },
        { month_id: 6, month_name: 'Июнь', summary: 0 },
        { month_id: 7, month_name: 'Июль', summary: 0 },
        { month_id: 8, month_name: 'Август', summary: 0 },
        { month_id: 9, month_name: 'Сентябрь', summary: 0 },
        { month_id: 10, month_name: 'Октябрь', summary: 0 },
        { month_id: 11, month_name: 'Ноябрь', summary: 0 },
        { month_id: 12, month_name: 'Декабрь', summary: 0 }
      ];

      test.forEach( item => {
        if (+item.type_id === 2) {
          this.addToRow(this.factRows, item);
        }
        else if (+item.type_id === 1) {
          this.addToRow(this.planRows, item);
        }
/*       if (+item.type_id === 1) {
         console.log(item.type_id);
         this.addToRow(planRows, item)
       } else if (+item.type_id === 2) {
         this.addToRow(factRows, item)
       }*/
      });



      //this.factRows = factRows;

      console.log(this.factRows);
    },

    addToRow(tableName, item){
      const row = tableName.find(st => st.month_id === item.month);
      const key = 'id_' + item.division_id;
      row[key] = {sum: item.total, title: item.division, id: item.id};
      row.summary += row[key].sum;
    },


  }

}
</script>

<style lang="sass">

.income-table-header
  background-color: #C64F15
  color: #fff
  th
    min-width: 110px
    //text-align: center
.income-table
  .q-table tbody td
    font-size: 12px
    //text-align: center

//.q-table tbody td
//  font-size: 12px !important

//.income-table-header  th
//  font-weight: 600 !important

//.q-table__container
//  width: 98%
</style>
